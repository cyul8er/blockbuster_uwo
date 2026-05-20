// home  page 


// cd cover + cd changing DRAFT
const buttons = document.querySelectorAll(".option");
const poster = document.getElementById("cover");
const trailer = document.getElementById("cd")

buttons.forEach(button => {
    button.addEventListener("click", () => {

    // Remove active state from all buttons
    buttons.forEach(btn => btn.classList.remove("active"));

    // Add active state to clicked button
    button.classList.add("active");

    // Change cover color
    const posterimg = button.dataset.post;
    poster.style.backgroundColor = posterimg;
    // change cd
    const trailervid = button.dataset.vid;
    trailer.style.backgroundColor = trailervid
    });
});


// news
async function loadHomeNews(){

    const response =
        await fetch("allnews.json");

    const newsPosts =
        await response.json();

    const container =
        document.getElementById("newsPreview");

    const latestPosts =
        newsPosts.slice(0, 3);

    latestPosts.forEach(post => {

        container.innerHTML += `
            <div class="newsCard">

                <img src="${post.image}">

                <h2>${post.title}</h2>

                <p>${post.date}</p>

                <p>${post.text}</p>

            </div>
        `;

    });

}

loadHomeNews();