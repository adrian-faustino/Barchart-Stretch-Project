//DOM Cache
const title = document.getElementById('title');
const canvas = document.getElementById('canvas');

//Information need to draw a bar
let data = [4, 6, 6 , 7 , 5, 4]; //make 4 bars
let options = {
  barWidth: '',
  barHeight: '',
  barColor: 'red',
  barSpacing: ''
};
//------------------------------

//-----------Main functions-----------//
function drawBarChart(data, options, element) {
  //for each element in array, create a new bar and draw each
  for (let i = 0 ; i < data.length; i++) {
    let newDiv = document.createElement('div');
    element.appendChild(newDiv);
    newDiv.style.setProperty('--width', options.barWidth);
    newDiv.style.setProperty('--left', options.barSpacing + (options.barSpacing * i));
    newDiv.style.setProperty('--color', options.barColor);
    newDiv.style.setProperty('--height', setBarHeight(data[i]) * 0.95);
  }
}

function setBarHeight(num) {
  const maxHeight = arrayMax(data);
  let heightRatio = (num / maxHeight);
  return heightRatio * 100;
}

//...options user input
function setBarWidth(str) {
  let baseWidth = (100 / data.length);
  switch (str) {
    case 'default':
      options.barWidth = (baseWidth * 0.7);
      break;
    case 'narrow':
      options.barWidth = (baseWidth * 0.5);
      break;
    case 'wide':
      options.barWidth = (baseWidth * 0.9);
      break;
  }
}

function setBarSpacing(str) { //to do: change spacing to a number input type instead of taking a selection
  let baseSpacing = (80 / data.length);
  switch (str) {
    case 'default':
      options.barSpacing = (baseSpacing * 1.1);
      break;
    case 'narrow':
      options.barSpacing = (baseSpacing * 1);
      break;
    case 'wide':
      options.barSpacing = (baseSpacing * 1.2);
      break;
  }
}

//clear canvas
function clearCanvas() {
  while (canvas.childNodes.length > 0) {
    canvas.removeChild(canvas.firstChild);
  }
}

//-----------Functions activated by event listeners-----------//
//Form DOM Cache
const optionsForm = document.getElementById('optionsForm');
let barWidthForm = optionsForm.barWidth;
let barSpacingForm = optionsForm.barSpacing;
let barColorForm = optionsForm.barColor;

//Create Bar Chart Button
optionsForm.addEventListener('submit', function(e) {
  e.preventDefault();
  clearCanvas();
  setBarWidth(barWidthForm.value);
  setBarSpacing(barSpacingForm.value);
  // setBarColor(val);
  drawBarChart(data, options, canvas);
});


//-----------General Functions-----------//
function arrayMax(arr) {
  let tempMax = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > tempMax) {
      tempMax = arr[i];
    }
  }
  return tempMax;
}

function arrayMin(arr) {
  let tempMin = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < tempMin) {
      tempMin = arr[i];
    }
  }
  return tempMin;
}

//---console logs

