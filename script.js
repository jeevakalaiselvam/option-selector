//DOM object references for manipulation later
const textarea = document.getElementById("textarea");
const tags = document.getElementById("tags");
const decide = document.getElementById("button");
//Having interval reference in global scope so it can be cleared later
let intervalFunctionReference;
let selectionDelay = 0;
let currentElasped = 0;

//Listen for any changes in textarea and assign data seperated by comma into a array
textarea.addEventListener("keyup", (e) => {
    //Split all data by comma, Filter the values which have content, Map the value and trim them all
    const options = e.target.value
        .split(",")
        .filter((data) => data.trim() !== "")
        .map((data) => data.trim());

    tags.innerHTML = "";

    //For each data in array, Create a tag below and append it to root container
    options.forEach((option) => {
        const tag = document.createElement("div");
        tag.classList.add("tag");
        tag.innerHTML = `
            <small>${option}</small>
        `;

        //Appending to root container
        tags.appendChild(tag);
    });
});

//Check if user clicks decide button and generate a choice
decide.addEventListener("click", () => {
    selectionDelay = 0;
    currentElasped = 0;
    selectOneRandom();
});

/**
 * @author Jeeva Kalaiselvam
 * This function will select a random option generated from user input content
 */
function selectOneRandom() {
    const options = tags.childNodes;

    //Set a certain time intern
    selectionDelay = options.length * 10;

    //Create a interval and keep highlighing random tags for certain interval based on number of options from user input
    intervalFunctionReference = setInterval(() => {
        removeAllHighlight(options);
        highlightOneRandomly(options);
    }, 50);
}

/**
 * @author Jeeva Kalaiselvam
 * @param {Array} options - This contains all data that was split by commas from user input content in textarea
 */
function highlightOneRandomly(options) {
    currentElasped++;

    options[Math.floor(Math.random() * options.length)].classList.add(
        "highlight"
    );

    //Check if the set interval duration until which random tags are highlighted is met
    if (currentElasped == selectionDelay) {
        clearInterval(intervalFunctionReference);
    }
}

/**
 * This function will loop though all tags and remove highlight class from them
 * @param {Array} options - This contains all data that was split by commas from user input contant in textarea
 */
function removeAllHighlight(options) {
    options.forEach((option) => option.classList.remove("highlight"));
}
