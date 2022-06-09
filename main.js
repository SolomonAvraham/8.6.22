var intervalId;
var counter = 0;
function increaseImage() {
  intervalId = setInterval(() => {
    firstDiv.style.height = counter++ + "vh";
  }, 1000);
}

var starButtonData = document
  .getElementById("starButton")
  .addEventListener("click", starButton);

function starButton() {
  increaseImage();
}

var stopButtonData = document
  .getElementById("stopButton")
  .addEventListener("click", stopButton);

function stopButton() {
  clearInterval(intervalId);
}

function enterStopAnimation(e) {
  if (event.key == "Enter") {
    stopButton();
    location.reload();
  }
}

// --------------

function randomColor() {
  var secondDiv = document.getElementById("secDiv");
  secondDiv.onclick = () => {
    secondDiv.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  };
}
randomColor();

// ----------------

function userPickHeight() {
  var userPickHeight = document.getElementById("pickHeight");
  return userPickHeight.value;
}

function userPickWidth() {
  var userPickWidthId = document.getElementById("pickWidth");
  return userPickWidthId.value;
}



function executButton() {
    // var animationDiv = document
    //     .getElementById("thirdDiv");
    intervalId=setInterval(() => {
        thirdDiv.style.width = "50vw";
    },2000);
    console.log()
}
