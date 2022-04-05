const selectBox = document.getElementById("select_box");
const btnGame = document.getElementById("gioca");
const cellContainer = document.querySelector(".container_grid");




btnGame.addEventListener("click", function() {
    cellContainer.innerHTML = "";

    difficoltà = selectBox.value;

    const totalCell = cellsNum(difficoltà);

    const cellPerRow = Math.sqrt(totalCell);
    const cellSize = 100 / cellPerRow;

    for (let i = 0; i < totalCell; i++) {
        const cell = document.createElement("div");
        const innerSpan = document.createElement("span");

        cell.classList.add("cell");
        cell.style.height = cellSize + "%";
        cell.style.width = cellSize + "%";
        innerSpan.textContent = i + 1;

        innerSpan.classList.add("center_num");

        cellContainer.append(cell);
        cell.append(innerSpan);
        cell.addEventListener("click", cellClick);

    };
});


function cellsNum(difficoltà) {

    if ((difficoltà) === 'facile') {
        let numCell = 100;
        console.log("numero celle " + numCell);
        return numCell;
    }
    if ((difficoltà) === 'media') {
        let numCell = 81;
        console.log("numero celle " + numCell);
        return numCell;
    }
    if ((difficoltà) === 'difficile') {
        let numCell = 49;
        console.log("numero celle " + numCell);
        return numCell;
    }


};


function cellClick() {
    this.classList.add("on_click");
}