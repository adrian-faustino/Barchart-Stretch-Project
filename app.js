//DOM Cache
const title = document.getElementById('title');
const canvas = document.getElementById('canvas');
const barsDivArray = document.getElementsByClassName('bars');

//Informatio need to draw a bar
const element = barsDivArray;
let data = [1, 2, 3, 4, 5]; //make 4 bars
let options = {
  barWidth: '50px',
  barHeight: '',
  barColor: 'red'
};
//------------------------------

//-----------Main functions-----------//
function drawBarChart(data, options, element) {
  //determine highest, determine lowest --> determine heights


  //determine number of bars --> determine spacing per bar %
  const barSpacing = (80 / data.length);

  //for each element in array, create a new bar and draw each
  for (let i = 0 ; i < data.length; i++) {
    let newDiv = document.createElement('div');
    canvas.appendChild(newDiv);
    newDiv.style.setProperty('--width', options.barWidth);
    newDiv.style.setProperty('--left', barSpacing * (i + 1));
    newDiv.style.setProperty('--color', options.barColor);
    newDiv.style.setProperty('--height', setBarHeight(data[i]) - 5);
  }
}

function setBarHeight(num) {
  const maxHeight = arrayMax(data);
  let heightRatio = (num / maxHeight);
  return heightRatio * 100;
}


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
console.log(setBarHeight(2));

drawBarChart(data, options, element);
