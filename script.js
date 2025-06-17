document.addEventListener("DOMContentLoaded", function () {
    // PLAY / PAUSE MUSIC BUTTON
    const song = document.getElementById("song");
    const playButton = document.getElementById("playSong");
  
    playButton.addEventListener("click", function () {
      if (song.paused) {
        song.play().then(() => {
          playButton.textContent = "PAUUUUUSEEE";
        }).catch(err => console.log("Playback blocked:", err));
      } else {
        song.pause();
        playButton.textContent = "RESUUUUUME";
      }
    });
  
    // TIMER
    const startDate = new Date(2024, 11, 18, 19, 0, 0);
  
    function updateCounter() {
      const now = new Date();
      const diff = now - startDate;
  
      if (diff < 0) {
        document.getElementById("months").textContent = "Counting down until our day!";
        document.getElementById("days").textContent = "";
        document.getElementById("hours").textContent = "";
        document.getElementById("minutes").textContent = "";
        document.getElementById("seconds").textContent = "";
        return;
      }
  
      const totalSeconds = Math.floor(diff / 1000);
      const totalMinutes = Math.floor(diff / 60000);
      const totalHours = Math.floor(diff / 3600000);
      const totalDays = Math.floor(diff / 86400000);
      const totalMonths = Math.floor(totalDays / 30.44);
  
      document.getElementById("months").textContent = `${totalMonths} Month${totalMonths !== 1 ? "s" : ""}`;
      document.getElementById("days").textContent = `${totalDays} Day${totalDays !== 1 ? "s" : ""}`;
      document.getElementById("hours").textContent = `${totalHours} Hour${totalHours !== 1 ? "s" : ""}`;
      document.getElementById("minutes").textContent = `${totalMinutes} Minute${totalMinutes !== 1 ? "s" : ""}`;
      document.getElementById("seconds").textContent = `${totalSeconds} Second${totalSeconds !== 1 ? "s" : ""}`;
    }
  
    setInterval(updateCounter, 1000);
    updateCounter();
  
    // CUSTOM TEXT CURSOR EFFECT
    const cursorTrail = document.getElementById("cursor-trail");
    const floatingText = "MWAH";
  
    document.addEventListener("mousemove", (e) => {
      const span = document.createElement("span");
      span.textContent = floatingText;
      span.style.left = `${e.clientX}px`;
      span.style.top = `${e.clientY}px`;
      cursorTrail.appendChild(span);
      setTimeout(() => span.remove(), 1000);
    });
  });
  