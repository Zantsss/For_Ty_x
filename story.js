document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("backgroundMusic");
    const musicButton = document.getElementById("toggleMusic");

    // Ensure volume is set to a reasonable level
    music.volume = 0.5;

    // Add event listener to play/pause music
    musicButton.addEventListener("click", function () {
        if (music.paused) {
            music.play().catch(error => console.log("Playback error:", error)); // Catches any errors
            musicButton.textContent = "Halt";
        } else {
            music.pause();
            musicButton.textContent = "Continue";
        }
    });
});
