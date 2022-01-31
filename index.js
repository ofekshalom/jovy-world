var id = null;
var autioElement = document.getElementsByClassName("audio");

const docHeight = document.documentElement.clientHeight;
const docWidth = document.documentElement.clientWidth;
console.log(autioElement);
function myMove() {
  console.log("clicked");
  var catElement = document.getElementById("cat");
  var jovElement = document.getElementById("jov");
  var pos = 0;
  var top = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos < docWidth) {
      pos++;

      catElement.style.left = pos + "px";
      jovElement.style.left = pos + "px";
    } else {
      pos = 0;
      top += 100;
      catElement.style.top = top + "px";
      jovElement.style.top = top + "px";

      if (top >= docHeight) {
        top = 0;
      }
    }
  }
}

setTimeout(() => {
  myMove();
}, 0);
