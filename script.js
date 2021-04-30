const textarea = document.getElementById("textarea");
const tags = document.getElementById("tags");
const decide = document.getElementById("button");
const selectionDelay = 0;
const currentElasped = 0;

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

decide.addEventListener("click", () => {
    selectOneRandom();
});

function selectOneRandom() {
    const options = tags.childNodes;
    selectionDelay = options.length;

    const intervalFunction = setInterval(() => {
        highlightOneRandomly(options);
    }, 100);

    if (currentElasped == selectionDelay) {
        clearInterval(intervalFunction);
    }
}

function highlightOneRandomly(options) {
    currentElasped++;

    options[Math.floor(Math.random() * options.length)].classList.add(
        "highlight"
    );
}
