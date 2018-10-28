// variables
var size = document.getElementById('sizePicker')
var color = document.getElementById('colorPicker');
var table = document.getElementById('pixelCanvas');
var height = document.getElementById('inputHeight');
var width = document.getElementById('inputWidth');

size.addEventListener('submit', function (event) {
// prevents that the default action after hitting submit occurs
  event.preventDefault(); {
/* makeing sure that  only one grid is displayed and not multiple
grids get attched to each other after hittng submit several times*/
    while(table.hasChildNodes()){
            table.removeChild(table.firstChild);
          }
    };
  makeGrid();
});

function makeGrid() {
// insterts a grid depending on values for height and width
 for(let r = 0; r <height.value; r++){
      const row = table.insertRow(r);
      for (let w = 0; w < width.value; w++){
          const cell = row.insertCell(w);
// fill cells with choosen color
          cell.addEventListener('click', function (event) {
            cell.style.backgroundColor = color.value;
          });
  }
  }
};
