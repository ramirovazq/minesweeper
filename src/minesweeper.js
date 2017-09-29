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
        while(numberOfBombsPlaced<numberOfBombs){
          //  console.log(numberOfBombsPlaced+" de un numero de bombas "+numberOfBombs);
            let randomRowIndex = Math.floor(Math.random()*numberOfRows);
            let randomColumnIndex = Math.floor(Math.random()*numberOfColumns);
            //en este momento no verifica si ya habia una bomba en ese lugar    
            board[randomRowIndex][randomColumnIndex] = "B";
            numberOfBombsPlaced++;
        }//while
        return board
    }//function


const printBoard = (board) =>{
    console.log(board.map(row => row.join(' | ')).join('\n'));
}//printboard


let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log("Player Board: ");
printBoard(playerBoard);
console.log("Bomb Board: ");
printBoard(bombBoard);

