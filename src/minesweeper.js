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
        console.log(numberOfRows, numberOfColumns)
        for (let numberOfRowsIndex=0;numberOfRowsIndex<numberOfRows;numberOfRowsIndex++){
            let row = [];
            for (let numberOfColumnsIndex=0;numberOfColumnsIndex<numberOfColumns;numberOfColumnsIndex++){
                row.push(null);
            }//for
            board.push(row)
        }//for


        let numberOfBombsPlaced = 0;
        let randomRowIndex = Math.floor(Math.random()*numberOfRows);
        let randomColumnIndex = Math.floor(Math.random()*numberOfColumns);
        board[randomRowIndex][randomColumnIndex] = "B";
        console.log("-----------row y column---------");
        console.log(randomRowIndex);
        console.log("column ---");
        console.log(randomColumnIndex);
        console.log("--------------------");
    /*
        while(numberOfBombsPlaced<numberOfBombs){
    
        }*/




        return board
    }//function

console.log(generateBombBoard(4,4,4));
