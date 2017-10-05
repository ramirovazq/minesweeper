"use strict";

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
    var board = [];
    //console.log(numberOfRows, numberOfColumns)
    for (var numberOfRowsIndex = 0; numberOfRowsIndex < numberOfRows; numberOfRowsIndex++) {
        var row = [];
        for (var numberOfColumnsIndex = 0; numberOfColumnsIndex < numberOfColumns; numberOfColumnsIndex++) {
            row.push(" ");
        } //for
        board.push(row);
    } //for
    return board;
}; //function
//console.log(generatePlayerBoard(2,3));
//console.log(generatePlayerBoard(2,2));
//console.log(generatePlayerBoard(4,1));

// Retorna un número aleatorio entre min (incluido) y max (excluido)
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
    var board = [];
    //console.log(numberOfRows, numberOfColumns)
    for (var numberOfRowsIndex = 0; numberOfRowsIndex < numberOfRows; numberOfRowsIndex++) {
        var row = [];
        for (var numberOfColumnsIndex = 0; numberOfColumnsIndex < numberOfColumns; numberOfColumnsIndex++) {
            row.push(null);
        } //for
        board.push(row);
    } //for

    var numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {
        //  console.log(numberOfBombsPlaced+" de un numero de bombas "+numberOfBombs);

        var randomRowIndex = Math.floor(Math.random() * numberOfRows);
        var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

        if (board[randomRowIndex][randomColumnIndex] !== "B") {
            board[randomRowIndex][randomColumnIndex] = "B";
            numberOfBombsPlaced++;
        } //if
    } //while


    return board;
}; //function


var getNumberOfNeighborBombs = function getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex) {
    var neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
    var numberOfRows = bombBoard.length;
    var numberOfColumns = bombBoard[0].length;
    var numberOfBombs = 0;

    neighborOffsets.forEach(function (offset) {
        /*
        console.log("entrando al offset del foreach");
        console.log("------------------- inicio");
        console.log(numberOfRows);
        console.log(numberOfColumns);
        console.log("------------------- fin");
        */
        var neighborRowIndex = rowIndex + offset[0];
        var neighborColumnIndex = columnIndex + offset[1];

        if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
            if (bombBoard[neighborRowIndex][neighborColumnIndex] === "B") {
                numberOfBombs++;
            } //if
        } //if
    } //forEach
    );
    return numberOfBombs;
};

var flipTile = function flipTile(playerBoard, bombBoard, rowIndex, columnIndex) {
    if (playerBoard[rowIndex][columnIndex] !== " ") {
        console.log("This tile has already been fliped!");
        return;
    } else if (bombBoard[rowIndex][columnIndex] === "B") {
        playerBoard[rowIndex][columnIndex] = "B";
    } else {
        playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
    } //else
}; //flipTile

var printBoard = function printBoard(board) {
    console.log(board.map(function (row) {
        return row.join(' | ');
    }).join('\n'));
}; //printboard


var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);

console.log("Player Board: ");
printBoard(playerBoard);
console.log("Bomb Board: ");
printBoard(bombBoard);

flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated Player Board:');
printBoard(playerBoard);