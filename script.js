const textarea = document.getElementById("textarea");
const tags = document.getElementById("tags");

textarea.addEventListener("keyup", (e) => {
    const options = e.target.value
        .split(",")
        .filter((data) => data.trim() !== "")
        .map((data) => data.trim());

    tags.innerHTML = "";

    options.forEach((option) => {
        const tag = document.createElement("div");
        tag.classList.add("tag");
        tag.innerHTML = `
            <small>${option}</small>
        `;

        tags.appendChild(tag);
    });
});
