document.addEventListener("DOMContentLoaded", function () {
  const crossword = document.getElementById("crossword");
  const pauseButton = document.getElementById("pauseButton");
  const resetButton = document.getElementById("resetButton");
  const checkButton = document.getElementById("checkPuzzle");
  const pauseOverlay = document.getElementById("pauseOverlay");
  const resumeButton = document.getElementById("resumeButton");
  const resultDisplay = document.getElementById("result");
  let timerActive = true;
  let timeElapsed = 0;

  // Crossword answer positions
  const answers = {
      "7,4": "S", "8,4": "P", "9,4": "A", "10,4": "R",
      "10,8": "S", "11,8": "W", "12,8": "I", "13,8": "S", "14,8": "S", "15,8": "R", "16,8": "O", "17,8": "L", "18,8": "L",
      "11,10": "N", "12,10": "E", "13,10": "C", "14,10": "K", "15,10": "L", "16,10": "A", "17,10": "C", "18,10": "E",
      "6,11": "B", "7,11": "I", "8,11": "T",
      "3,14": "S", "4,14": "I", "5,14": "M", "6,14": "P", "7,14": "L", "8,14": "Y", "9,14": "N", "10,14": "O", "11,14": "T", "12,14": "T", "13,14": "R", "14,14": "U", "15,14": "E",
      "1,16": "P", "2,16": "L", "3,16": "E", "4,16": "A", "5,16": "S", "6,16": "E", "7,16": "S",
      "10,1": "Y", "10,2": "E", "10,3": "A", "10,4": "R", "10,5": "N", "10,6": "E", "10,7": "R", "10,8": "S",
      "15,8": "R", "15,9": "E", "15,10": "L", "15,11": "E", "15,12": "A", "15,13": "S", "15,14": "E", "15,15": "M", "15,16": "E",
      "7,10": "G", "7,11": "I", "7,12": "G", "7,13": "G", "7,14": "L", "7,15": "E", "7,16": "S",
      "13,12": "H", "13,13": "A", "13,14": "R", "13,15": "P", "13,16": "E", "13,17": "R", "13,18": "S",
      "1,13": "G", "1,14": "U", "1,15": "L", "1,16": "P"
  };

  // Clue number positions
  const clueNumbers = {
      "10,1": "1",
      "7,4": "2",
      "10,8": "3",
      "15,8": "4",
      "7,10": "5",
      "11,10": "6",
      "6,11": "7",
      "13,12": "8",
      "1,13": "9",
      "3,14": "10",
      "1,16": "11"
  };

  // Generate full 18x18 crossword grid
  for (let y = 1; y <= 18; y++) {
      for (let x = 1; x <= 18; x++) {
          const cell = document.createElement("div");
          cell.classList.add("cell");
          cell.dataset.x = x;
          cell.dataset.y = y;

          const positionKey = `${x},${y}`;
          if (answers[positionKey]) {
              const input = document.createElement("input");
              input.setAttribute("maxlength", "1");
              input.dataset.answer = answers[positionKey]; // Store correct answer
              input.addEventListener("input", function () {
                  this.value = this.value.toUpperCase();
              });
              cell.appendChild(input);
          } else {
              cell.classList.add("maroon");
          }

          // Add clue number if the position matches
          if (clueNumbers[positionKey]) {
              const clueNumber = document.createElement("span");
              clueNumber.classList.add("clue-number");
              clueNumber.textContent = clueNumbers[positionKey];
              cell.appendChild(clueNumber);
          }

          crossword.appendChild(cell);
      }
  }

  // Timer
  function updateTimer() {
      if (timerActive) {
          timeElapsed++;
          let minutes = Math.floor(timeElapsed / 60);
          let seconds = timeElapsed % 60;
          document.getElementById("timer").textContent = `Time Elapsed: ${minutes} min ${seconds} sec`;
      }
  }
  setInterval(updateTimer, 1000);

  // Pause Button - Shows Overlay
  pauseButton.addEventListener("click", function () {
      timerActive = false;
      pauseOverlay.style.display = "flex";
  });

  // Resume Button - Hides Overlay
  resumeButton.addEventListener("click", function () {
      timerActive = true;
      pauseOverlay.style.display = "none";
  });

  // Reset Button
  resetButton.addEventListener("click", function () {
      document.querySelectorAll(".cell input").forEach(input => {
          input.value = "";
          input.style.backgroundColor = "white"; // Reset background color
      });
      timeElapsed = 0;
      resultDisplay.textContent = ""; // Clear result message
  });

  // Check Answers Button
  checkButton.addEventListener("click", function () {
      let allCorrect = true;

      document.querySelectorAll(".cell input").forEach(input => {
          if (input.value.toUpperCase() === input.dataset.answer) {
              input.style.backgroundColor = "#ccffcc"; // Green for correct
          } else {
              input.style.backgroundColor = "#ffffff"; // White for incorrect
              allCorrect = false;
          }
      });

      // Display result message
      if (allCorrect) {
          resultDisplay.textContent = "WUNDERBAR! You solved the crossword!";
          resultDisplay.style.color = "#008000"; // Green text
      } else {
          resultDisplay.textContent = "Some answers are wrong lol. Come on Einstein!";
          resultDisplay.style.color = "#911919"; // Maroon text
      }
  });
});
