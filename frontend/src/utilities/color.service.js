import chart from "../assets/data.json";
import colors from "../assets/colors.json";

// color codes: 
// FF0000 -> red
// FFFF00 -> yellow
// 00FF00 -> green

// defining start and end values a inner range
let startValue = .22;
let endValue = .3;
 
// setting color defaults
let colorLength = colors.length;
// let colorFirstIndex = 0;
let colorLastIndex = colors.length - 1;

let startStep = 9; // its an index
let endStep = 22;  // same for it

// find min and max 
let minimumValue = Math.min(...chart.data.thickness);
let maximumValue = Math.max(...chart.data.thickness);

// calculating step value
let stepValue = (endValue - startValue) / (colorLength - 2 * (startStep + 1));
let MinStepValue = (startValue - minimumValue) / (startStep);
let MaxStepValue = (maximumValue - endValue) / (startStep);

// function to get color code accodding to the thickness value
export function getColorCode(thickness){
  let offset, numberOfSteps, step;

  // checking for start value equity
  if(thickness === startValue){
    step = startStep;
  } else if (thickness === endValue){ // checking for end value rquity
    step = endStep;
  } else if( startValue < thickness && thickness < endValue){ // lie between start and end value
    // offset from startValue
    offset = thickness - startValue;
    numberOfSteps = Math.floor(offset/stepValue);

    // setting number of steps from start value index
    step = startStep + numberOfSteps
  } else if(thickness < startValue){ // if outSide the boundry
    // offset from start
    offset = thickness - minimumValue;
    numberOfSteps = Math.floor(offset/MinStepValue);
    step = numberOfSteps;
  } else{
    // offset from end
    offset = thickness - endValue;
    numberOfSteps = Math.floor(offset/MaxStepValue);
    step = endStep + numberOfSteps;
  }

  // array start index value check
  if(step < 0){
    step = 0;
  }

  // color array last index boundry check
  if(step > colorLastIndex){
    step = colorLastIndex;
  }

  // returning the color code
  return `#${colors[step]}`;
}
