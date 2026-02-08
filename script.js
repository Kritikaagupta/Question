const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const yt = document.getElementById("ytMusic");

/* NO button – works on mobile + laptop */
function moveNo() {
  const x = Math.random() * 140 - 70;
  const y = Math.random() * 90 - 45;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* Floating background hearts */
function spawnHeart() {
  const heart = document.createElement("div");
  heart.className = "bg-heart";
  heart.innerHTML = Math.random() > 0.5 ? "💗" : "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 6 + Math.random() * 4 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 12000);
}

/* Continuous hearts */
setInterval(spawnHeart, 900);

/* YES button → play song + hearts */
yesBtn.addEventListener("click", () => {
  // YouTube autoplay (browser-safe)
  yt.src =
    "https://www.youtube.com/embed/AXDnfm7qqZ4" +
    "?autoplay=1" +
    "&mute=1" +
    "&loop=1" +
    "&playlist=AXDnfm7qqZ4";

  // unmute after user interaction
  setTimeout(() => {
    yt.contentWindow.postMessage(
      '{"event":"command","func":"unMute","args":""}',
      "*"
    );
  }, 1200);

  // extra hearts
  for (let i = 0; i < 8; i++) spawnHeart();
});
