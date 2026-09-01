// components/ContentList.tsx

type ContentType = "film" | "podcast" | "social" | "event"

type Platform =
  | "YouTube"
  | "Spotify"
  | "Instagram"
  | "TikTok"
  | "Twitter"
  | "In Person"

interface ContentItem {
  id: string
  type: ContentType
  title: string
  date: string
  platform: Platform
  url?: string
  thumbnail?: string
  description?: string
  location?: string
}

const content: ContentItem[] = [
  {
    id: "1",
    type: "film",
    title: "Placeholder Short Film",
    date: "2025-10-01",
    platform: "YouTube",
    url: "https://youtube.com/...",
    thumbnail: "/placeholder/Timeline.jpg",
  },
  {
    id: "2",
    type: "podcast",
    title: "Placeholder Podcast Episode",
    date: "2025-10-15",
    platform: "Spotify",
    url: "https://spotify.com/...",
  },
  {
    id: "3",
    type: "social",
    title: "Behind the scenes reel",
    date: "2025-11-01",
    platform: "Instagram",
    url: "https://instagram.com/...",
  },
  {
    id: "4",
    type: "event",
    title: "Open Set Visit",
    date: "2025-11-20",
    platform: "In Person",
    location: "Western University",
  },
]

export default function ContentList() {
  return (
    <ul className="contentList">
      {content.map((item) => (
        <li key={item.id} className={`contentItem contentItem--${item.type}`}>
          <p className="contentItem__type">{item.type}</p>
          <h3 className="contentItem__title">{item.title}</h3>
          <p className="contentItem__meta">
            {item.platform} · {item.date}
            {item.location ? ` · ${item.location}` : ""}
          </p>
        </li>
      ))}
    </ul>
  )
}