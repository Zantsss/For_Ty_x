document.getElementById('checkPuzzle').addEventListener('click', function() {
    const cells = document.querySelectorAll('#crossword input');
    let allCorrect = true;
    
    cells.forEach(cell => {
      const userInput = cell.value.toUpperCase();
      const correctAnswer = cell.dataset.answer.toUpperCase();
      if (userInput !== correctAnswer) {
        cell.style.backgroundColor = '#ffcccc'; // light red for wrong
        allCorrect = false;
      } else {
        cell.style.backgroundColor = '#ccffcc'; // light green for correct
      }
    });
    
    const result = document.getElementById('result');
    if (allCorrect) {
      result.textContent = "Congratulations! All answers are correct!";
    } else {
      result.textContent = "Some answers are incorrect. Please try again.";
    }
  });
  
  let startTime = Date.now();
let timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
    let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    let minutes = Math.floor(elapsedTime / 60);
    let seconds = elapsedTime % 60;
    document.getElementById("timer").textContent = `Time Elapsed: ${minutes} min ${seconds} sec`;
}

document.getElementById("checkPuzzle").addEventListener("click", function () {
    const cells = document.querySelectorAll("#crossword input");
    let allCorrect = true;

    cells.forEach(cell => {
        const userInput = cell.value.toUpperCase();
        const correctAnswer = cell.dataset.answer.toUpperCase();
        if (userInput !== correctAnswer) {
            allCorrect = false;
        }
    });

    if (allCorrect) {
        clearInterval(timerInterval);
        document.getElementById("result").textContent = `Fresh! Solved in ${minutes} min ${seconds} sec`;
    } else {
        document.getElementById("result").textContent = "Some answers are incorrect. Try again!";
    }
});
