function remove(event){
event.preventDefault();
 var ball = document.getElementById("golf");
 Array.from(ball.children).forEach((input, index) => {
  if (
    index !== 0
  ) {
    input.remove();
  }
});

var scores = document.getElementById("form");
scores.reset();

}

function addInput(event) {
  event.preventDefault();
  var form = document.getElementById("golf");
  var newInput = document.createElement("input");
  newInput.type = "text";
  form.appendChild(newInput);
}

function calculate(event) {
  var form = document.getElementById("form");

  const scorearray = [];
  Array.from(form.elements).forEach((input) => {
    if (
      input.type === "text" &&
      input.disabled === false &&
      input.value !== ""
    ) {
      scorearray.push(input.value);
    }
  });

  event.preventDefault();

  var sorted = scorearray.sort((a, b) => {
    return a - b;
  });

  var middle = Math.floor(sorted.length / 2);

  var low = sorted.slice(0, middle);

  var handicap = low.reduce((acc, curVal) => {
    return Number(acc) + Number(curVal);
  });

  console.log(handicap);
  var sum = handicap / low.length;

  document.getElementById("txtSum").value = sum;
}
