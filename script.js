const shareBtn = document.querySelector(".share-button");
const shareMenu = document.querySelector(".share__socials");

shareBtn.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    shareMenu.classList.toggle("share__socials--active");
    console.log(event.target.tagName);
  }
});
