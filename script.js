document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      content.textContent = `Heure actuelle : ${currentTime}`;
  }, 1000);
});
