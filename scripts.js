let gridBox = document.getElementById("gridBox");

buildGrid(16);

//------------------------------------------ FUNCTIONS -------------------------
function rebuildGrid() {
    destroyGrid();
    buildGrid(getSize());
}
function getSize() {
    return prompt("Please enter a size for the Grid");
}

function buildGrid (size) {
    for (let i = 0; i < size; i++) {
        let newRow = createRow();

        for (let n = 0; n < size; n++) {
            let newDiv = createElement();
            newRow.appendChild(newDiv);
        }
        gridBox.appendChild(newRow);
    }
}
function destroyGrid() {
    while(gridBox.firstChild != null) {
        gridBox.removeChild(gridBox.lastChild);
    }
}

function createRow() {
    let newRow = document.createElement("div");
    newRow.id = "boxRow"
    return newRow;
}
function createElement() {
    let newDiv = document.createElement("div");
    newDiv.id = "boxElement"
    newDiv.textContent ="";
    newDiv.addEventListener("mouseover", (event) => {
        newDiv.setAttribute("class", "hoverColor");
        newDiv.addEventListener("transitionend", () => {
            newDiv.removeAttribute("class", "hoverColor");
        });
    })
    return newDiv;
}