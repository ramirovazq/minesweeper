const generatePlayerBoard = (numberOfRows, numberOfColumns) => { 
        let board = [];
        //console.log(numberOfRows, numberOfColumns)
        for (let numberOfRowsIndex=0;numberOfRowsIndex<numberOfRows;numberOfRowsIndex++){
            let row = [];
            for (let numberOfColumnsIndex=0;numberOfColumnsIndex<numberOfColumns;numberOfColumnsIndex++){
                row.push(" ");
            }//for
            board.push(row)
        }//for
        return board
    }//function
//console.log(generatePlayerBoard(2,3));
//console.log(generatePlayerBoard(2,2));
//console.log(generatePlayerBoard(4,1));

// Retorna un número aleatorio entre min (incluido) y max (excluido)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => { 
       let board = [];
        //console.log(numberOfRows, numberOfColumns)
        for (let numberOfRowsIndex=0;numberOfRowsIndex<numberOfRows;numberOfRowsIndex++){
            let row = [];
            for (let numberOfColumnsIndex=0;numberOfColumnsIndex<numberOfColumns;numberOfColumnsIndex++){
                row.push(null);
            }//for
            board.push(row)
        }//for

        let numberOfBombsPlaced = 0;
        while(numberOfBombsPlaced < numberOfBombs){
          //  console.log(numberOfBombsPlaced+" de un numero de bombas "+numberOfBombs);

            let randomRowIndex = Math.floor(Math.random()*numberOfRows);
            let randomColumnIndex = Math.floor(Math.random()*numberOfColumns);
        
            if (board[randomRowIndex][randomColumnIndex] !== "B"){
                board[randomRowIndex][randomColumnIndex] = "B";
                numberOfBombsPlaced++;
            }//if
        }//while


        return board
    };//function


const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) =>{
    const neighborOffsets = [[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]];
    const numberOfRows = bombBoard.length;
    const numberOfColumns = bombBoard[0].length;
    let numberOfBombs = 0;

    neighborOffsets.forEach((offset)=>{
        /*
        console.log("entrando al offset del foreach");
        console.log("------------------- inicio");
        console.log(numberOfRows);
        console.log(numberOfColumns);
        console.log("------------------- fin");
*/
        const neighborRowIndex = rowIndex + offset[0];
        const neighborColumnIndex = columnIndex + offset[1];

            if (  ((neighborRowIndex >=0) && (neighborRowIndex < numberOfRows)) && ((neighborColumnIndex >=0) && (neighborColumnIndex < numberOfColumns))  ) {
                if(bombBoard[neighborRowIndex][neighborColumnIndex] === "B"){
                    numberOfBombs ++;
                }//if
            }//if

        }//forEach
    );
    return numberOfBombs
};


const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) =>{
  if(playerBoard[rowIndex][columnIndex] !== " "){
        console.log("This tile has already been fliped!");
        return
    }else if (bombBoard[rowIndex][columnIndex] === "B"){
        playerBoard[rowIndex][columnIndex] = "B";
    }else{
        playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
    }//else

}//flipTile

const printBoard = (board) =>{
    console.log(board.map(row => row.join(' | ')).join('\n'));
};//printboard


let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log("Player Board: ");
printBoard(playerBoard);
console.log("Bomb Board: ");
printBoard(bombBoard);

flipTile(playerBoard, bombBoard, 0,0);
console.log('Updated Player Board:');
printBoard(playerBoard);
