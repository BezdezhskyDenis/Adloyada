let currentQuestion = 0;
let currentRoll = 1;
let answersCorrect = 0;
let userAnswers = 0;
let finish = true;
const resultContainer = document.getElementById("body11");

$("#next").click( () => {
  next();
});

$("#prev").click( () => {
  prev();
});

function next() {
  if (currentQuestion != 10) {
    $("#triviaTitle" + currentQuestion)
      .addClass("hidden")
      .removeClass("show");
    $("#triviaTitle" + (currentQuestion + 1))
      .addClass("show")
      .removeClass("hidden");
    $("#body" + currentQuestion)
      .addClass("hidden")
      .removeClass("show");
    $("#body" + (currentQuestion + 1))
      .addClass("show")
      .removeClass("hidden");
    currentQuestion++;
    fillBar(currentQuestion);
  }
}
function prev() {
  if (currentQuestion != 1) {
    $("#triviaTitle" + currentQuestion)
      .addClass("hidden")
      .removeClass("show");
    $("#triviaTitle" + (currentQuestion - 1))
      .addClass("show")
      .removeClass("hidden");
    $("#body" + currentQuestion)
      .addClass("hidden")
      .removeClass("show");
    $("#body" + (currentQuestion - 1))
      .addClass("show")
      .removeClass("hidden");
    currentQuestion--;
    fillBar(currentQuestion);
  }
}

$("input").click(function () {
  const userSelection = $(this).attr("value");
  const questionNumber = $(this).attr("name");
  const selectedId = $(this).attr("id");
  console.log(selectedId);
  if (currentQuestion == 0) {
    finish = false;
    $("#next, #prev").removeClass("hidden");
    next();
  } else if (userAnswers != 9) {
    checkAnswer(userSelection, questionNumber, selectedId);
  } else {
    checkAnswer(userSelection, questionNumber, selectedId);
    finish = true;
    setTimeout(function () {
      result();
    }, 2000);
  }
});

function checkAnswer(userSelection, questionNumber, selectedId) {
  if (userSelection == "true") {
    $("#" + questionNumber).removeClass("hidden");
    $("#" + selectedId)
      .next()
      .addClass("checkedTrue");
    $("#step" + currentQuestion).addClass("done");
    answersCorrect++;
    userAnswers++;
  } else {
    $("#" + questionNumber).removeClass("hidden");
    $("#" + selectedId)
      .next()
      .addClass("checkedFalse");
    $(`input[value='true'][name=${questionNumber}]`)
      .next()
      .addClass("checkedTrue");
    $("#step" + currentQuestion).addClass("done");
    userAnswers++;
  }
  setTimeout(function () {
    next();
  }, 2000);
}

function result() {
  $("#triviaTitle" + currentQuestion)
    .addClass("hidden")
    .removeClass("show");
  $("#body" + currentQuestion)
    .addClass("hidden")
    .removeClass("show");
  $("#next, #prev").addClass("hidden");
  const output = [];
  output.push(
    ` <div class="questionTitle display-3 text-center">עניתה נכון על:</div>
          <div class="questionTitle display-3 text-center"> ${answersCorrect} </div>
          <div class="questionTitle display-3 text-center">שאלות</div>
          <div class="col-lg-12 mt-5 pt-5"><button id="restart" class="btn fs-2" autocomplete="off" onclick="restart()">שחק שוב</button></div>`
  );
  resultContainer.innerHTML = output.join("");
}

function restart() {
  location.reload();
}

$(".step").click(function () {
  const idNumber = $(this).attr("id").slice(4);
  goToQuestion(idNumber);
});

function goToQuestion(num) {
  if (!finish) {
    $("#triviaTitle" + currentQuestion)
      .addClass("hidden")
      .removeClass("show");
    $("#triviaTitle" + num)
      .addClass("show")
      .removeClass("hidden");
    $("#body" + currentQuestion)
      .addClass("hidden")
      .removeClass("show");
    $("#body" + num)
      .addClass("show")
      .removeClass("hidden");
    fillBar(num);
    currentQuestion = parseInt(num);
  }
}
function fillBar(numId) {
  let n = "#progress";
  let step = numId - currentRoll;
  if (step > 0) {
    for (let i = step; i != 0; i--) {
      $(n + currentRoll).addClass("done");
      currentRoll++;
    }
  } else if (step < 1) {
    for (let i = step; i != 1; i++) {
      $(n + currentRoll).removeClass("done");
      currentRoll--;
    }
  }
}
