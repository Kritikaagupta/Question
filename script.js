const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const yt = document.getElementById("ytMusic");

let yesScale = 1;
let musicPlayed = false;

/* ❌ NO button – tap hi na ho paaye (mobile + laptop) */
function moveNo() {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 120);

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* 🌸 Floating background hearts (soft romantic vibe) */
function spawnHeart() {
  const heart = document.createElement("div");
  heart.className = "bg-heart";
  heart.innerHTML = Math.random() > 0.5 ? "💗" : "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 6 + Math.random() * 4 + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 12000);
}

/* Continuous soft hearts */
setInterval(spawnHeart, 900);

/* ❤️ Heart confetti on YES click */
function confettiHearts() {
  function confettiHearts() {
  const rect = yesBtn.getBoundingClientRect();

  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = ["💖", "💕", "💘", "❤️"][Math.floor(Math.random() * 4)];

    // Start EXACTLY from YES button centre
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    heart.style.left = startX + "px";
    heart.style.top = startY + "px";

    // 🎯 Random burst direction (UPWARD + SIDE)
    const x = (Math.random() - 0.5) * 300;   // left-right spread
    const y = -(Math.random() * 350 + 150); // strong upward blast

    heart.style.setProperty("--x", `${x}px`);
    heart.style.setProperty("--y", `${y}px`);

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2400);
  }
}


/* ✅ YES button → grows + confetti + music */
yesBtn.addEventListener("click", () => {
  // button bada hota jaaye
  yesScale += 0.25;
  yesBtn.style.transform = `scale(${yesScale})`;

  // heart confetti
  confettiHearts();

  // play song only once
  if (!musicPlayed) {
    yt.src =
      "https://www.youtube.com/embed/AXDnfm7qqZ4" +
      "?autoplay=1&loop=1&playlist=AXDnfm7qqZ4";
    musicPlayed = true;
  }
});
