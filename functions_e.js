class Clock {
  constructor() {
    let date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    console.log(this.hours, this.minutes, this.seconds);
    // printTime();
    // debugger
    setInterval(this._tick.bind(this), 1000);
    // setInterval(this._tick, 1000);
  }
  
  printTime() {
    let formattedTime = `${this.hours}:${this.minutes}:${this.seconds}`;
    console.log(formattedTime);
  }
  
  _tick() {
    if (this.seconds < 59) {
      this.seconds += 1;
    }
    else if (this.minutes < 59) {
      this.minutes += 1;
      this.seconds = 0;
    }
    else {
      this.hours += 1;
      this.minutes = 0;
    }
    this.printTime();
  }
}

// const clock = new Clock();

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function addNumbers(sum, numsleft, completionCallback) {
  if (numsleft > 0) {
    reader.question("give us a number:", function (answer) {  
      sum += parseInt(answer);
      numsleft -= 1;
      console.log(sum);
      addNumbers(sum, numsleft, completionCallback);
    });
  } else {
    completionCallback(sum);
  }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}?    `, function (answer) {
    if (answer === "yes") {
      callback(true);
    } else {
      callback(false);
    }
  });
}

//askIfGreaterThan(2, 1, answer => console.log(`${answer}`));





function innerBubbleSort(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i == arr.length - 1) {
    // console.log(arr);
    // return;
    outerBubbleSortLoop(madeAnySwaps);
  } else {
    askIfGreaterThan(arr[i], arr[i+1], function (answer) {
      // console.log(answer);
      if (answer === true) {
        let el1 = arr[i];  
        arr[i] = arr[i+1];
        arr[i+1] = el1;
        madeAnySwaps = true; 
      } else {
        madeAnySwaps = false;
      }
      i += 1;
      console.log(arr);
      innerBubbleSort(arr, i , madeAnySwaps, outerBubbleSortLoop);
    });
  }  
}

// innerBubbleSort([1,3,8,3,2], 0, false, outerBubbleSortLoop);

function absurdBubbleSort(arr, sortCompletionCallback) {
  madeAnySwaps = true;
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSort(arr, 0, true, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(madeAnySwaps);
}

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

 Function.prototype.myBind = function (context) { 
  return () => this.apply(context);
 };


class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"























