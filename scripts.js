const side = 16;


let gridBox = document.getElementById("gridBox");

for (let i = 0; i < side; i++) {
    let newRow = createRow();

    for (let n = 0; n < side; n++) {
        let newDiv = createElement();
        newRow.appendChild(newDiv);
    }
    gridBox.appendChild(newRow);
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
    return newDiv;
}