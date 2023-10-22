document.addEventListener("DOMContentLoaded", function () {
    const articles = [
        {
            title: "Article 1",
            imageSrc: "images/art1.jpg",
            description: "A brief description of article 1.",
            content: "Content for article 1...",
        },
        {
            title: "Article 2",
            imageSrc: "images/art2.jpg",
            description: "A brief description of article 2.",
            content: "Content for article 2...",
        },
        // Add more articles as needed
    ];

    const articleContainer = document.querySelector(".article-list");

    articles.forEach((article, index) => {
        const articleTemplate = document.querySelector("#article-template").content.cloneNode(true);

        articleTemplate.querySelector(".article-title").textContent = article.title;
        articleTemplate.querySelector(".article-image-src").src = article.imageSrc;
        articleTemplate.querySelector(".article-description").textContent = article.description;

        const readMoreLink = articleTemplate.querySelector(".read-more-link");
        readMoreLink.addEventListener("click", function () {
            const articleContent = document.querySelector(".article-content");
            articleContent.innerHTML = `
                <h2>${article.title}</h2>
                <img src="${article.imageSrc}" alt="Article Image">
                <p>${article.content}</p>
                <a href="#" class="close-link" onclick="closeArticle()">Close</a>
            `;
            articleContent.style.display = "block";
        });

        articleContainer.appendChild(articleTemplate);
    });
});

function closeArticle() {
    const articleContent = document.querySelector(".article-content");
    articleContent.style.display = "none";
    articleContent.innerHTML = "";
}