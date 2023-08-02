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
    'X-RapidAPI-Key': '2f64b2619fmsh92d72f49877053cp1bf074jsn81db7c668171',
		'X-RapidAPI-Host': 'golf-leaderboard-data.p.rapidapi.com',
  },
};

const api_url = "https://golf-leaderboard-data.p.rapidapi.com/world-rankings";
async function getLeader() {
  const response = await fetch(api_url, options);
  const data = await response.json();
  const lead = data.results;
  const rank = lead.rankings.slice(0, 30);
  const formattedPlayers = rank.map((player) => {
    return [
      player.position,
      player.player_name,
      player.num_events,
      player.total_points,
    ];
  });

  const tableHeaders = ["Rank", "Player", "Events Played", "Total Points"];
  const list = document.getElementById("myTable");
  let headerRow = document.createElement("tr");
  list.appendChild(headerRow);
  tableHeaders.forEach((header) => {
    let th = document.createElement("th");
    th.innerText = header;
    headerRow.appendChild(th);
  });
  formattedPlayers.forEach((player) => {
    let tr = document.createElement("tr");
    list.appendChild(tr);
    player.forEach((property) => {
      let td = document.createElement("td");
      td.innerText = property;
      tr.appendChild(td);
    });
  });
}

getLeader();

function restore(event) {
  event.preventDefault();
  if (confirm("Are you sure you want to restore previous scores?")) {
    [...Array(76).keys()].forEach((hole) => {
      const holeNumber = hole + 1;
      const inputId = `hole${holeNumber}`;
      var restored = localStorage.getItem(inputId);
      document.getElementById(inputId).value = restored;
    });
  }
}

function memory(event, inputId) {
  event.preventDefault();

  const hole = document.getElementById(inputId);
  localStorage.setItem(inputId, hole.value);
}

function calculateRound(event, inputId, totalId) {
  event.preventDefault();
  const card = document.getElementById(inputId);
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

  document.getElementById(totalId).value = thesum;
}

function total(event, inputId, inputId2, totalId) {
  event.preventDefault();
  const card = document.getElementById(inputId);
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

  const cards = document.getElementById(inputId2);
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

  document.getElementById(totalId).value = final;
}

function clearScores(event) {
  event.preventDefault();
  if (
    confirm(
      "Are you sure you want to clear scores? This will also clear saved scores from previous card."
    )
  ) {
    document.getElementById("front").reset();
    document.getElementById("back").reset();
    document.getElementById("player2front").reset();
    document.getElementById("player2back").reset();
    document.getElementById("player3front").reset();
    document.getElementById("player3back").reset();
    document.getElementById("player4front").reset();
    document.getElementById("player4back").reset();
    document.getElementById("front1").reset();
    document.getElementById("player2front1").reset();
    document.getElementById("player3front1").reset();
    document.getElementById("player4front1").reset();
    localStorage.clear();
  }
}

function changeclass(
  event,
  inputId,
  inputIdOff,
  inputIdOff2,
  inputIdOff3,
  inputIdOff4
) {
  event.preventDefault();
  const change = document.getElementById(inputId);
  change.classList.add("active");
  const others = document.getElementById(inputIdOff);
  others.classList.remove("active");
  const others2 = document.getElementById(inputIdOff2);
  others2.classList.remove("active");
  const others3 = document.getElementById(inputIdOff3);
  others3.classList.remove("active");
  const others4 = document.getElementById(inputIdOff4);
  others4.classList.remove("active");
}

function show_hide(
  event,
  inputId,
  inputIdNone,
  inputIdNone2,
  inputIdNone3,
  inputIdNone4
) {
  event.preventDefault();
  {
    document.getElementById(inputId).style.display = "block";
    document.getElementById(inputIdNone).style.display = "none";
    document.getElementById(inputIdNone2).style.display = "none";
    document.getElementById(inputIdNone3).style.display = "none";
    document.getElementById(inputIdNone4).style.display = "none";

    return;
  }
}

(function () {
  function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];

      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
        );
      }

      output.push(
        `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
      );
    });

    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;

        answerContainers[questionNumber].style.color = "green";
      } else {
        answerContainers[questionNumber].style.color = "red";
      }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question:
        "Back in 2014, which golfer became the third player after Jack Nicklaus and Tiger Woods to win three majors by the age of 25 and the first European to win three different major titles.",
      answers: {
        a: "Sergio Garcia",
        b: "John Rahm",
        c: "Rory McIlroy",
        d: "Ernie Els",
      },
      correctAnswer: "c",
    },
    {
      question:
        "How many major championships has Tiger Woods won (as of January 2022)?",
      answers: {
        a: "15",
        b: "18",
        c: "20",
        d: "12",
      },
      correctAnswer: "a",
    },
    {
      question: "Who is the only tour rookie to win a PGA major?",
      answers: {
        a: "Tiger Woods",
        b: "Rory McIlroy",
        c: "Jordan Spieth",
        d: "John Daly",
      },
      correctAnswer: "d",
    },
    {
      question: "What is the appropriate loft range for a sand wedge?",
      answers: {
        a: "50-54 Degrees",
        b: "54-58 Degrees",
        c: "58-62 Degrees",
        d: "62-66 Degrees",
      },
      correctAnswer: "b",
    },

    {
      question:
        "An avid golfer, which popular actor has a contract clause to play golf twice a week whenever he films movies?",
      answers: {
        a: "Samuel L. Jackson",
        b: "Bill Murray",
        c: "Mark Wahlberg",
        d: "Adam Sandler",
      },
      correctAnswer: "a",
    },
    {
      question: "How many players make the cut at The British Open?",
      answers: {
        a: "60",
        b: "70",
        c: "80",
        d: "90",
      },
      correctAnswer: "b",
    },
    {
      question: "How many clubs can a player carry in their bag?",
      answers: {
        a: "12",
        b: "10",
        c: "15",
        d: "14",
      },
      correctAnswer: "b",
    },
    {
      question: "How many points are needed to win The Ryder Cup?",
      answers: {
        a: "15",
        b: "10.5",
        c: "12",
        d: "14.5",
      },
      correctAnswer: "d",
    },
    {
      question: "What event was Rickie Fowler's first career win?",
      answers: {
        a: "Wells Fargo Championship",
        b: "The Honda Classic",
        c: "WM Phoenix Open",
        d: "Valero Texas Open",
      },
      correctAnswer: "a",
    },
  ];

  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(currentSlide);

  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
