document.addEventListener("DOMContentLoaded", function () {
    const song = document.getElementById("song");
    const playButton = document.getElementById("playSong");

    playButton.addEventListener("click", function () {
        if (song.paused) {
            song.play();
            playButton.textContent = "Pause Song";
        } else {
            song.pause();
            playButton.textContent = "Play Our Song";
        }
    });
});
