document.getElementById("myBtn").addEventListener("click", open_close);

var menuState = 0;
function open_close() {
  if (menuState === 0) {
    menuState = 1;
    document.getElementById("side").style.display = "none";
  } else {
    menuState = 0;
    document.getElementById("side").style.display = "block";
  }
  console.log(menuState);
}
