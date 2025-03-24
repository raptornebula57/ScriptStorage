function updateClock() {
        const now = new Date();
        document.getElementById("clock").innerText = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
            });
      
  setInterval(updateClock, 1000);
  updateClock();
