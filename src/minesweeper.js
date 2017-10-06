
class Game{

    constructor(numberOfRows, numberOfColumns, numberOfBombs){

        this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs); 

    }//constructor    

    playMove(rowIndex, columnIndex){

        this._board.flipTile(rowIndex, columnIndex);
        if(this._board.playerBoard[rowIndex][columnIndex] === "B"){
            console.log("----GAME OVER-----");
            this._board.print();
            console.log("----bomb board");
            this._board.printBombBoard();
        }else if(!(this._board.hasSafeTile())){
            console.log("----YOU WIN-----");
            this._board.print();
            console.log("----bomb board");
            this._board.printBombBoard();
        }else{
            console.log("Current Board:");
            this._board.print();
            console.log("----bomb board");
            this._board.printBombBoard();
        }
    
    }

}//Game


class Board{


    constructor(numberOfRows, numberOfColumns, numberOfBombs){

        this._numberOfBombs = numberOfBombs;
        this._numberOfTiles = numberOfRows * numberOfColumns;

        this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard =  Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);

    }//constructor

    get playerBoard(){
        return this._playerBoard
    }// get playerboard


    flipTile(rowIndex, columnIndex){
      if(this._playerBoard[rowIndex][columnIndex] !== " "){
            console.log("This tile has already been fliped!");
            return;
        }else if (this._bombBoard[rowIndex][columnIndex] === "B"){
            this._playerBoard[rowIndex][columnIndex] = "B";
        }else{
            this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
        }//else
        this._numberOfTiles--;
    }//flipTile


    getNumberOfNeighborBombs(rowIndex, columnIndex){
        const neighborOffsets = [[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]];
        const numberOfRows = this._bombBoard.length;
        const numberOfColumns = this._bombBoard[0].length;
        let numberOfBombs = 0;

        neighborOffsets.forEach((offset)=>{
            const neighborRowIndex = rowIndex + offset[0];
            const neighborColumnIndex = columnIndex + offset[1];

                if (  ((neighborRowIndex >=0) && (neighborRowIndex < numberOfRows)) && ((neighborColumnIndex >=0) && (neighborColumnIndex < numberOfColumns))  ) {
                    if(this._bombBoard[neighborRowIndex][neighborColumnIndex] === "B"){
                        numberOfBombs ++;
                    }//if
                }//if

            }//forEach
        );
        return numberOfBombs
    }//getNumberOfNeighborBombs

    hasSafeTile(){
        return this._numberOfBombs !== this._numberOfTiles;
    }//hasSafeTiles


    print(){
        console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
    }//printboard

    printBombBoard(){
        console.log(this._bombBoard.map(row => row.join(' | ')).join('\n'));
    }//printboard


    static generatePlayerBoard(numberOfRows, numberOfColumns){ 
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


    static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs){ 
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
    }//function



}//class Board





const g = new Game(4,4,10);
g.playMove(0,0);


