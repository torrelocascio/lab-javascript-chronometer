// Constructor
function Chronometer() {
this.currentTime = 0
this.intervalId = 1
};

Chronometer.prototype.startClick = function () {
  console.log(this.currentTime);
}


Chronometer.prototype.setMinutes = function () {
  var minutes =Math.floor(this.currentTime/60);
  return minutes
};

Chronometer.prototype.setSeconds = function () {
  var seconds =this.currentTime % 60;
  return seconds
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  numberString=number.toString() 
  if (numberString.length===1) {numberString="0"+numberString}else(numberString.length>1)
   
  return numberString

  };

Chronometer.prototype.setTime = function () {

};

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
