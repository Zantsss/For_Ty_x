document.addEventListener("DOMContentLoaded", function () {
    const song = document.getElementById("song");
    const playButton = document.getElementById("playSong");

    playButton.addEventListener("click", function () {
        if (song.paused) {
            song.play();
            playButton.textContent = "Pause";
        } else {
            song.pause();
            playButton.textContent = "Resume 3rd Option";
        }
    });
});

// Set relationship start date (YYYY, MM (0-based), DD, HH, MM, SS)
const startDate = new Date(2024, 11, 18, 19, 0, 0); // December 18, 2024, 7:00 PM

function updateCounter() {
    const now = new Date();
    const diff = now - startDate; // Difference in milliseconds

    if (diff < 0) {
        document.getElementById("counter").textContent = "Counting down until our day!";
        return;
    }

    const minutes = Math.floor(diff / (1000 * 60)); // Convert to minutes
    document.getElementById("counter").textContent = `${minutes.toLocaleString()} minutes`;
}

// Update the counter every second
setInterval(updateCounter, 1000);
updateCounter(); // Call immediately
