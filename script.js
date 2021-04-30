const textarea = document.getElementById("textarea");
const tags = document.getElementById("tags");
const decide = document.getElementById("button");
let intervalFunctionReference;
let selectionDelay = 0;
let currentElasped = 0;

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
    selectionDelay = options.length * 5;

    intervalFunctionReference = setInterval(() => {
        removeAllHighlight(options);
        highlightOneRandomly(options);
    }, 50);
}

function highlightOneRandomly(options) {
    currentElasped++;

    options[Math.floor(Math.random() * options.length)].classList.add(
        "highlight"
    );

    console.log(currentElasped, selectionDelay);
    if (currentElasped == selectionDelay) {
        clearInterval(intervalFunctionReference);
    }
}

function removeAllHighlight(options) {
    options.forEach((option) => option.classList.remove("highlight"));
}
