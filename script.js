const box = document.getElementById("box");
let position = 0; // initial left position

box.addEventListener("click", () => {
  const screenWidth = window.innerWidth;
  const maxRight = screenWidth - box.offsetWidth - 40; // keep margin

  if (position + 20 <= maxRight) {
    position += 20; // move right by 20px
  } else {
    position = 0; // reset if at boundary
  }

  box.style.left = position + "px";
});
