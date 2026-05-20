async function loadNewsPage() {

    try {

        const response = await fetch("./news.json");

        const newsPosts = await response.json();

        console.log(newsPosts);

        const container =
            document.getElementById("newsContainer");

        console.log(container);

        const prevBtn =
            document.getElementById("prevBtn");

        const nextBtn =
            document.getElementById("nextBtn");

        const postsPerPage = 5;

        let currentPage = 1;

        function renderPage(page) {

            container.innerHTML = "";

            const start =
                (page - 1) * postsPerPage;

            const end =
                start + postsPerPage;

            const pagePosts =
                newsPosts.slice(start, end);

            pagePosts.forEach((post) => {

                const card =
                    document.createElement("div");

                card.classList.add("newsCard");

                card.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.date}</p>
                    <p>${post.text}</p>
                `;

                container.appendChild(card);

            });

        }

        renderPage(currentPage);

        nextBtn.addEventListener("click", () => {

            if (
                currentPage * postsPerPage < newsPosts.length
            ) {

                currentPage++;

                renderPage(currentPage);

            }

        });

        prevBtn.addEventListener("click", () => {

            if (currentPage > 1) {

                currentPage--;

                renderPage(currentPage);

            }

        });

    }

    catch (error) {

        console.error(error);

    }

}

loadNewsPage();