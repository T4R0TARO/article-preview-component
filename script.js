const shareBtn = document.querySelector(".share-button");
const shareMenu = document.querySelector(".share__socials");

shareBtn.addEventListener("click", function () {
  this.classList.toggle("share__socials--active");
  shareMenu.classList.toggle("share__socials--active");
});
