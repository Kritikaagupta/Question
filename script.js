/* ===============================
   ELEMENTS
================================ */
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const yt = document.getElementById("ytMusic");

/* ===============================
   NO BUTTON – NEVER CLICKABLE
================================ */
function moveNo() {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 120);
  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}
noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* ===============================
   BACKGROUND FLOATING HEARTS
================================ */
const bgCanvas = document.getElementById("bgCanvas");
const bgCtx = bgCanvas.getContext("2d");

function resizeBG() {
  bgCanvas.width = innerWidth;
  bgCanvas.height = innerHeight;
}
resizeBG();
window.addEventListener("resize", resizeBG);

const bgHearts = [];
const heartEmojis = ["💗","💖","💕","💘","❤️"];

setInterval(() => {
  bgHearts.push({
    x: Math.random() * bgCanvas.width,
    y: bgCanvas.height + 30,
    size: Math.random() * 18 + 18,
    speed: Math.random() * 0.6 + 0.4,
    emoj
