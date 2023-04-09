

function reset(event){
  event.preventDefault();
  const element = document.getElementById("form");
  element.reset();
 
}

function addInput(event) {
  event.preventDefault();
  var form = document.getElementById("form");
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

  console.log(sorted)
  var middle = Math.floor(sorted.length / 2);

  console.log(middle)
  var low = sorted.slice(0, middle);

  console.log(low)
  var handicap = low.reduce((acc, curVal) => {
    return Number(acc) + Number(curVal);
  });

  console.log(handicap)
  var sum = handicap / low.length;

  document.getElementById("txtSum").value = sum;
}
