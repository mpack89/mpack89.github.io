function remove(event) {
  event.preventDefault();
  var ball = document.getElementById("golf");
  Array.from(ball.children).forEach((input, index) => {
    if (index !== 0) {
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

  var sum = handicap / low.length;

  document.getElementById("txtSum").value = sum;
}

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0bdfae4b32msh944cce92bea9b3ap1ab133jsn438ada11b9cb",
    "X-RapidAPI-Host": "golf-leaderboard-data.p.rapidapi.com",
  },
};

const api_url = "https://golf-leaderboard-data.p.rapidapi.com/world-rankings";
async function getLeader() {
  const response = await fetch(api_url, options);
  const data = await response.json();
  const lead = data.results;
  const rank = lead.rankings.slice(0, 20);
  const names = rank.map((player) => {
    return player.player_name;
  });

  const list = document.getElementById("myList");
  names.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
}

//getLeader();

function front(event) {
  event.preventDefault();
  const card = document.getElementById("fronts");
  const scorecards = [];
  Array.from(card.elements).forEach((inputs) => {
    if (
      inputs.type === "text" &&
      inputs.disabled === false &&
      inputs.value !== ""
    ) {
      scorecards.push(inputs.value);
    }
  });

  const thesum = scorecards.reduce((acc, curVal) => {
    return Number(acc) + Number(curVal);
  });

  document.getElementById("front9").value = thesum;
}

function back(event) {
  event.preventDefault();
  const cards = document.getElementById("back");
  const scorecardsback = [];
  Array.from(cards.elements).forEach((inputs) => {
    if (
      inputs.type === "text" &&
      inputs.disabled === false &&
      inputs.value !== ""
    ) {
      scorecardsback.push(inputs.value);
    }
  });

  const thesumback = scorecardsback.reduce((acc, curVal) => {
    return Number(acc) + Number(curVal);
  });

  document.getElementById("back9").value = thesumback;
}

function total(event) {
  event.preventDefault();
  const card = document.getElementById("fronts");
  const scorecards = [];
  Array.from(card.elements).forEach((inputs) => {
    if (
      inputs.type === "text" &&
      inputs.disabled === false &&
      inputs.value !== ""
    ) {
      scorecards.push(inputs.value);
    }
  });

  const thesum = scorecards.reduce((acc, curVal) => {
    return Number(acc) + Number(curVal);
  });

  const cards = document.getElementById("back");
  const scorecardsback = [];
  Array.from(cards.elements).forEach((inputs) => {
    if (
      inputs.type === "text" &&
      inputs.disabled === false &&
      inputs.value !== ""
    ) {
      scorecardsback.push(inputs.value);
    }
  });

  const thesumback = scorecardsback.reduce((acc, curVal) => {
    return Number(acc) + Number(curVal);
  });

  const final = thesumback + thesum;

  document.getElementById("round").value = final;
}

function clearscores(event) {
  event.preventDefault();
  if (confirm("Are you sure?")) {
    document.getElementById("back").reset();
    document.getElementById("fronts").reset();
  }
}
