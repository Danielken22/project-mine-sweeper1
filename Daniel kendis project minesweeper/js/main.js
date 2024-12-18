'use strict'
const Mine = '💣'
const Mark = '🚩'
var Size = 4
var gLevel = { Mines: 2, size: buildBoard() }
var gBoard = {
    minesAroundCount: 4,
    isShown: false,
    isMine: false,
    isMarked: true
}

function onInit() {
    gBoard = buildBoard()
    renderBoard(gBoard)
}

function buildBoard(board) {
    board = []
    var level1 = 4
    for (var i = 0; i < level1; i++) {
        board[i] = []
        for (var j = 0; j < level1; j++) {
            board[i][j] = {
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: true
            }
        }
    } return board
}
function renderBoard(board) {
    var cells = []
        var strHTML = ''
        for (var i = 0; i < board.length; i++) {
            strHTML += '<tr>'
            for (var j = 0; j < board[0].length; j++) {
                var currCell = board[i][j]
                var cellClass = (board[i][j]) ? 'isMine' : ''
                var cellData = 'data-i="' + i + '" data-j="' + j + '"'
                strHTML += `
        <td class="cell ${cells}" ${cells} onclick="onCellClick(${i}, ${j})">
        ${cells}
        </td>
        `
            }
            strHTML += '</tr>'

        }
        var elBoard = document.querySelector('.game-board')
        elBoard.innerHTML = strHTML
    
}
function setMinesNegsCount(){

}

function onCellClicked(){
    var cells =[]
  for(vari=0;i<board.length;i++){
    cells[i]=[]
    for(var j=0;j<board.length;j++){
        cells[i][j]=
    }

  }  

}

 function minesAroundCount(){

 }

function createmines(){

}