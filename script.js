const selectBox = document.getElementById("select_box");
const btnGame = document.getElementById("gioca");
const cellContainer = document.querySelector(".container_grid");

const bombe = []
let punteggio = 0


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

        cell.addEventListener("click", onSingleCellClick);
    }

    //generatore bombe
    for (let b = 0; b < 16; b++) {
        const randomNum = Math.floor(Math.random() * (totalCell - 1 + 1)) + 1;
        const newBomb = randomNum;
        const existNum = bombe.includes(newBomb);


        if (!existNum) {
            bombe.push(newBomb);

        } else {
            b--;
        }
    }
    console.log(bombe);


});


function cellsNum(difficoltà) {

    if ((difficoltà) === 'facile') {
        let numCell = 100;
        // console.log("numero celle " + numCell);
        return numCell;
    }
    if ((difficoltà) === 'media') {
        let numCell = 81;
        // console.log("numero celle " + numCell);
        return numCell;
    }
    if ((difficoltà) === 'difficile') {
        let numCell = 49;
        //console.log("numero celle " + numCell);
        return numCell;
    }


};


function cellClick() {
    this.classList.add("on_click");

}


function onSingleCellClick() {

    const currentCell = parseInt(this.textContent);
    console.log("cella" + " " + currentCell);


    if (bombe.includes(currentCell)) {
        this.classList.add("boom");

        alert("Sei esploso");
        alert(`hai totalizzato ${punteggio} punti`)

    } else {
        this.classList.add("on_click");
        punteggio++
        console.log('punto' + " " + punteggio)
    }
}