const box = document.getElementById("box");
  const scoreText = document.getElementById("score");
  const timerText = document.getElementById("timer");
  const gameOverText = document.getElementById("gameover");
  const startBtn = document.getElementById("startBtn");
  const clickSound = document.getElementById("clickSound");
  const bgMusic = document.getElementById("bgMusic");

  let score = 0;
  let timeLeft = 30;
  let gameRunning = false;
  let timer;

  function moveBox() {
    const x = Math.random() * (window.innerWidth - 60);
    const y = Math.random() * (window.innerHeight - 60);
    box.style.left = x + "px";
    box.style.top = y + "px";
  }

  box.addEventListener("click", () => {
    if (!gameRunning) return;
    score++;
    scoreText.textContent = "Score: " + score;
    clickSound.currentTime = 0;
    clickSound.play();
    moveBox();
  });

  function updateTimer() {
    timeLeft--;
    timerText.textContent = "Time: " + timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      gameRunning = false;
      box.style.display = "none";
      gameOverText.style.display = "block";
      bgMusic.pause();
    }
  }

  startBtn.addEventListener("click", () => {
    score = 0;
    timeLeft = 30;
    scoreText.textContent = "Score: 0";
    timerText.textContent = "Time: 30";
    gameOverText.style.display = "none";
    startBtn.style.display = "none";
    box.style.display = "block";
    bgMusic.play();
    gameRunning = true;
    moveBox();
    timer = setInterval(updateTimer, 1000);
  });