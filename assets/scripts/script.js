document.getElementById("myBtn").addEventListener("click", open_close);

var menuState = 0;
function open_close() {
  if (menuState === 0) {
    menuState = 1;
    document.getElementById("side").style.marginLeft = "-300px";
    document.getElementById("side").style.transition = "0.8s";
  } else {
    menuState = 0;
    document.getElementById("side").style.marginLeft = "0";
  }
  console.log(menuState);
}
