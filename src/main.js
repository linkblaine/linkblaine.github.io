$(document).ready(function(){

  var game = new Game();
  drawBoard( game.numberOfRows, game.numberOfColumns);
  paintCells( game.board );

  setInterval( function(){
    game.iterate();
    paintCells( game.board );
  }, 500);

});

var paintCells= function(board){
  
  $.each(board.coordinates, function(cell){
    point = cell.split(':');
   
    var rowId = 'row-' + point[0]; 
    var colId = 'column-' + point[1]; 
    $('#'+rowId + '>#' +colId).toggleClass('alive', board.coordinates[cell].isAlive  ); 
  });  

}

var drawBoard = function( rows, columns){
  
  for(var i = 0; i < rows; i++){
    var rowId = 'row-' + i;
    $('#game-board').append("<tr id="+ rowId +" class='row'></tr>");

    for(var j = 0; j < columns; j++){
      var columnId = 'column-' + j;
      $('#'+rowId).append("<td id=" +columnId +" class='column'></td>");
    }
  }
  
}