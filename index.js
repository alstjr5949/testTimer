const timeInput = document.querySelectorAll(".time");

// 시간이 입력되야 버튼 활성화
timeInput.forEach((input) => {
  const startBtn = document.querySelector(".startBtn");
  const resetBtn = document.querySelector(".resetBtn");
  input.addEventListener("keyup", (e) => {
    let timeValue = +e.target.value;
    if (timeValue > 0) {
      startBtn.classList.remove("disabled");
      resetBtn.classList.remove("disabled");
    }
  });
});

// startBtn, pausedBtn 클릭 이벤트
const startBtn = document.querySelector(".startBtn");
const resetBtn = document.querySelector(".resetBtn");
// const hoursInput = document.querySelector("#hours");
// const minutesInput = document.querySelector("#minutes");
const secondsInput = document.querySelector("#seconds");
let seconds = +secondsInput.value;
let Interval;

secondsInput.addEventListener("change", (e) => {
  seconds = +e.target.value;
});

startBtn.addEventListener("click", () => {
  startBtn.classList.toggle("paused");
  if (startBtn.classList.contains("paused")) {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 1000);
  } else {
    clearInterval(Interval);
  }
});

function startTimer() {
  seconds--;
  console.log(seconds);
  if (seconds <= 9) {
    secondsInput.value = "0" + seconds;
  } else if (seconds > 9) {
    secondsInput.value = seconds;
  }
  if (seconds < 1) {
    clearInterval(Interval);
    secondsInput.value = "0" + seconds;
    startBtn.classList.remove("paused");
    startBtn.classList.add("disabled");
    resetBtn.classList.add("disabled");
  }
}

// resetBtn 클릭 이벤트
resetBtn.addEventListener("click", () => {
  clearInterval(Interval);
  seconds = 0;
  secondsInput.value = "0" + seconds;
  startBtn.classList.remove("paused");
  startBtn.classList.add("disabled");
  resetBtn.classList.add("disabled");
});
