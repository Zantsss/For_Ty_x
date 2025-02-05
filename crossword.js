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

  // Corrected 18x18 crossword answer positions
  const answers = {
      "10,18": "Y", "10,17": "E", "10,16": "A", "10,15": "R", "10,14": "N", "10,13": "E", "10,12": "R", "10,11": "S", // YEARNERS
      "7,15": "S", "8,15": "P", "9,15": "A", "10,15": "R", // SPAR
      "10,11": "S", "11,11": "W", "12,11": "I", "13,11": "S", "14,11": "S", "15,11": "R", "16,11": "O", "17,11": "L", "18,11": "L", // SWISSROLL
      "15,11": "R", "15,10": "E", "15,9": "L", "15,8": "E", "15,7": "A", "15,6": "S", "15,5": "E", "15,4": "M", "15,3": "E", // RELEASEME
      "11,9": "N", "12,9": "E", "13,9": "C", "14,9": "K", "15,9": "L", "16,9": "A", "17,9": "C", "18,9": "E", // NECKLACE
      "7,9": "G", "7,8": "I", "7,7": "G", "7,6": "G", "7,5": "L", "7,4": "E", "7,3": "S", // GIGGLES
      "6,8": "B", "7,8": "I", "8,8": "T", // BIT
      "13,7": "H", "13,6": "A", "13,5": "R", "13,4": "P", "13,3": "E", "13,2": "R", "13,1": "S", // HARPERS
      "3,5": "S", "4,5": "I", "5,5": "M", "6,5": "P", "7,5": "L", "8,5": "Y", "9,5": "N", "10,5": "O", "11,5": "T", "12,5": "T", "13,5": "R", "14,5": "U", "15,5": "E", // SIMPLYNOTTRUE
      "1,3": "P", "2,3": "L", "3,3": "E", "4,3": "A", "5,3": "S", "6,3": "E", "7,3": "S", // PLEASES
      "1,6": "G", "1,5": "U", "1,4": "L", "1,3": "P" // GULP
  };

  // Generate full 18x18 crossword grid
  for (let row = 1; row <= 18; row++) {
      for (let col = 1; col <= 18; col++) {
          const cell = document.createElement("div");
          cell.classList.add("cell");
          cell.dataset.row = row;
          cell.dataset.col = col;

          const positionKey = `${row},${col}`;
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
              input.style.backgroundColor = "#ffcccc"; // Red for incorrect
              allCorrect = false;
          }
      });

      // Display result message
      if (allCorrect) {
          resultDisplay.textContent = "Niceeee! You solved the crossword!";
          resultDisplay.style.color = "#008000"; // Green text
      } else {
          resultDisplay.textContent = "Some answers are incorrect. Keep trying!";
          resultDisplay.style.color = "#911919"; // Maroon text
      }
  });
});
