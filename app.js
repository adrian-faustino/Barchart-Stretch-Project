//DOM Cache
const title = document.getElementById('title');
const canvas = document.getElementById('canvas');
const barsDivArray = document.getElementsByClassName('bars');

//Informatio need to draw a bar
const element = barsDivArray;
let data = [4, 6, 6 ,7]; //make 4 bars
let options = {
  barWidth: '9%',
  barHeight: '',
  barColor: 'red',
  barSpacing: 'wide', //make setBarSpace() functionl later to return wide, narrow etc
};
let numberOfBars = data.length;
//------------------------------

//-----------Main functions-----------//
function drawBarChart(data, options, element) {
  const barSpacing = ( 100 / data.length);

  //for each element in array, create a new bar and draw each
  for (let i = 0 ; i < data.length; i++) {
    let newDiv = document.createElement('div');
    canvas.appendChild(newDiv);
    newDiv.style.setProperty('--width', options.barWidth);
    newDiv.style.setProperty('--left', barSpacing * (i + 0.5));
    newDiv.style.setProperty('--color', options.barColor);
    newDiv.style.setProperty('--height', setBarHeight(data[i]) * 0.95);
  }
}

function setBarHeight(num) {
  const maxHeight = arrayMax(data);
  let heightRatio = (num / maxHeight);
  return heightRatio * 100;
}

function setBarWidth(str) {
  let baseWidth = (100 / numberOfBars);
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


//-----------Functions activated by event listeners-----------//
//Form DOM Cache
const optionsForm = document.getElementById('optionsForm');
let barWidthForm = optionsForm.barWidth;
let barSpacingForm = optionsForm.barSpacing;
let barColorForm = optionsForm.barColor;

optionsForm.addEventListener('submit', function(e) {
  e.preventDefault();
  setBarWidth(barWidthForm.value);
  // setBarSpacing(str);
  // setBarColor(val);
  // drawBarChart(data, options, element);
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

drawBarChart(data, options, element);
