//DOM Cache
const title = document.getElementById('title');
const canvas = document.getElementById('canvas');
const barsDivArray = document.getElementsByClassName('bars');

//Informatio need to draw a bar
const element = barsDivArray;
let data = [1, 2, 3, 4]; //make 4 bars
let options = {
  barWidth: '50px',
  barHeight: '50%',
  barColor: 'red'
};

//-----------Main functions-----------//
function drawBarChart(data, options, element) {
  //determine highest, determine lowest --> determine heights

  //determine number of bars --> determine spacing per bar %
  const barSpacing = (80 / data.length);

  //for each element in array, create a new bar and draw each
  for (let i = 1 ; i <= data.length; i++) {
    let newDiv = document.createElement('div');
    canvas.appendChild(newDiv);
    newDiv.style.setProperty('--width', options.barWidth);
    newDiv.style.setProperty('--left', barSpacing * i);
    newDiv.style.setProperty('--color', options.barColor);
    newDiv.style.setProperty('--height', options.barHeight);
  }
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

drawBarChart(data, options, element);
