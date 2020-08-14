function showMenu() {
  document.querySelector(".hamburger").addEventListener("click", function () {
    document.querySelector(".second-nav").classList.toggle('open')
  });
}
showMenu();

