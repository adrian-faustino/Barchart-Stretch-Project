//DOM Cache
const title = document.getElementById('title');
const canvas = document.getElementById('canvas');

//Information need to draw a bar
let data = [];
let options = {
  barWidth: '',
  barHeight: '',
  barColor: '',
  barSpacing: ''
};
//------------------------------

//-----------Main functions-----------//
function drawBarChart(data, options, element) {
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

//Options Section functions
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

function setBarColor(str) {
  options.barColor = str;
}

function appendData(arr) {
  for (let i = 0; i < arr.length; i++) {
    data.push(parseInt(arr[i].value));
  }
}

function clearCanvas() {
  while (canvas.childNodes.length > 0) {
    canvas.removeChild(canvas.firstChild);
  }
  data = [];
}

//-----------Functions activated by event listeners-----------//
//Form DOM Cache
const optionsForm = document.getElementById('optionsForm');
let barWidthForm = optionsForm.barWidth;
let barSpacingForm = optionsForm.barSpacing;
let barColorForm = optionsForm.barColor;
let barHeightForm = optionsForm.getElementsByClassName('barHeight');

//Generate Chart Button
optionsForm.addEventListener('submit', function(e) {
  e.preventDefault();
  clearCanvas();
  appendData(barHeightForm);
  setBarWidth(barWidthForm.value);
  setBarSpacing(barSpacingForm.value);
  setBarColor(barColorForm.value);
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

function addTextField() { //to do: add validation later. input has to be number
  let barHeightParentDiv = document.getElementById('barHeightFields');
  let childDiv = document.createElement('input');

  childDiv.setAttribute('type', 'text');
  childDiv.setAttribute('class', 'barHeight');
  childDiv.setAttribute('placeholder', 'Enter bar height');
  barHeightParentDiv.appendChild(childDiv);
}

function enterBlur() {
  if (event.keyCode == 13) {
    document.getElementById('title').blur();
  }
}
//---console logs

