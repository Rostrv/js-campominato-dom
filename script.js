const selectBox = document.getElementById("select_box");
const btnGame = document.getElementById("gioca");
const cellContainer = document.querySelector(".container_grid");

let bombe = []
let punteggio = 0
let counterBlueBox = 0
let level
let boxes = 0
let numCell

btnGame.addEventListener("click", function() {
    cellContainer.innerHTML = "";

    difficult = selectBox.value;

    const totalCell = cellsNum(difficult);

    const cellPerRow = Math.sqrt(totalCell);
    const cellSize = 100 / cellPerRow;

    for (let i = 0; i < totalCell; i++) {
        const cell = document.createElement("div");
        const innerSpan = document.createElement("span");

        cell.classList.add("cell");
        cell.setAttribute('id', i + 1)
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
    bombe = []
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


function cellsNum(difficult) {

    if ((difficult) === 'facile') {
        numCell = 100;
        level = 'facile'
            // console.log("numero celle " + numCell);
        return numCell;
    }
    if ((difficult) === 'media') {
        numCell = 81;
        level = 'media'
            // console.log("numero celle " + numCell);
        return numCell;
    }
    if ((difficult) === 'difficile') {
        numCell = 49;
        level = 'difficile'

        //console.log("numero celle " + numCell);
        return numCell;
    }


};


function cellClick() {
    this.classList.add("on_click");

}


function checkBlueBox(level) {

    if (level == 'facile') {
        boxes = 100 - 16
    }
    if (level == 'media') {
        boxes = 81 - 16
    }
    if (level == 'difficile') {
        boxes = 49 - 16
    }


    if (counterBlueBox == boxes) {
        console.log('true')
        alert('Hai vinto!')
    }
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
        counterBlueBox++
        console.log('punto' + " " + punteggio)

    }

    checkBlueBox(level);
}