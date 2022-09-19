function readingTime() {
    const text = document.getElementById("article").innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.abs(words / wpm).toFixed(2);
    document.getElementById("time").innerText = time;
  }
  readingTime();