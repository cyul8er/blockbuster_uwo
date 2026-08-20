import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_TOKEN })

export interface Post {
    id: string
    title: string
    date: string
    author: string
    type: string
}

function mapPost(page: any): Post {
    return {
        id: page.id,
        title: page.properties.Title.title[0]?.plain_text ?? "Untitled",
        date: page.properties["Publish"].date?.start ?? "",
        author: page.properties.Author.select?.name ?? "", // change to `.rich_text[0]?.plain_text` if Author is Text, not Select
        type: page.properties.Type.select?.name ?? "",
    }
}

export async function getRecentPosts(limit = 3): Promise<Post[]> {
    const response: any = await notion.request({
        path: `data_sources/${process.env.NOTION_DATA_SOURCE_ID}/query`,
        method: "post",
        body: {
            filter: {
                property: "Status",
                status: { equals: "Live" }, // change to `select: { equals: "Live" }` if Status is a plain Select, not the built-in Status type
            },
            sorts: [{ property: "Publish", direction: "descending" }],
            page_size: limit,
        },
    })

    return response.results.map(mapPost)
}

// Fetches every Live post, newest first, looping through Notion's cursor
// pagination internally so the caller just gets one flat array back.
export async function getAllPosts(): Promise<Post[]> {
    let results: any[] = []
    let cursor: string | undefined = undefined

    do {
        const response: any = await notion.request({
            path: `data_sources/${process.env.NOTION_DATA_SOURCE_ID}/query`,
            method: "post",
            body: {
                filter: {
                    property: "Status",
                    status: { equals: "Live" },
                },
                sorts: [{ property: "Publish", direction: "descending" }],
                page_size: 100, // Notion's max per request
                start_cursor: cursor,
            },
        })

        results = results.concat(response.results)
        cursor = response.has_more ? response.next_cursor : undefined
    } while (cursor)

    return results.map(mapPost)
}