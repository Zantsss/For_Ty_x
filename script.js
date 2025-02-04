document.addEventListener("DOMContentLoaded", function () {
    const song = document.getElementById("song");
    const playButton = document.getElementById("playSong");

    playButton.addEventListener("click", function () {
        if (song.paused) {
            song.play();
            playButton.textContent = "PAUUUUUSEEE";
        } else {
            song.pause();
            playButton.textContent = "RESUUUUUME";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const song = document.getElementById("song");
    const playButton = document.getElementById("playSong");

    playButton.addEventListener("click", function () {
        if (song.paused) {
            song.play();
            playButton.textContent = "PAUUUUUSEEE";
        } else {
            song.pause();
            playButton.textContent = "RESUUUUUME";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const song = document.getElementById("song");
    const playButton = document.getElementById("playSong");

    playButton.addEventListener("click", function () {
        if (song.paused) {
            song.play();
            playButton.textContent = "PAUUUUUSEEE";
        } else {
            song.pause();
            playButton.textContent = "RESUUUUUME";
        }
    });
});

// Set relationship start date (YYYY, MM (0-based), DD, HH, MM, SS)
// December 18, 2024, at 7:00 PM:
const startDate = new Date(2024, 11, 18, 19, 0, 0);

function updateCounter() {
    const now = new Date();
    const diff = now - startDate; // Difference in milliseconds

    if (diff < 0) {
        // If the start date is in the future:
        document.getElementById("months").textContent = "Counting down until our day!";
        document.getElementById("days").textContent = "";
        document.getElementById("hours").textContent = "";
        document.getElementById("minutes").textContent = "";
        document.getElementById("seconds").textContent = "";
        return;
    }

    // Calculate independent totals:
    const totalSeconds = Math.floor(diff / 1000);
  const totalMinutes = Math.floor(diff / (1000 * 60));
  const totalHours   = Math.floor(diff / (1000 * 60 * 60));
  const totalDays    = Math.floor(diff / (1000 * 60 * 60 * 24));
  // Approximate total months using an average month length (30.44 days)
  const totalMonths  = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));

    // Update each counter element:
    document.getElementById("months").textContent = totalMonths + " Month" + (totalMonths !== 1 ? "s" : "");
    document.getElementById("days").textContent   = totalDays + " Day" + (totalDays !== 1 ? "s" : "");
    document.getElementById("hours").textContent  = totalHours + " Hour" + (totalHours !== 1 ? "s" : "");
    document.getElementById("minutes").textContent= totalMinutes + " Minute" + (totalMinutes !== 1 ? "s" : "");
    document.getElementById("seconds").textContent= totalSeconds + " Second" + (totalSeconds !== 1 ? "s" : "");
}

// Update the counter every second
setInterval(updateCounter, 1000);
updateCounter(); // Initial call
