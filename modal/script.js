//get modal elements
var modal = document.querySelector("#simpleModal");
var modalBtn = document.getElementById("modalBtn");
var closeBtn = document.querySelector(".closeBtn");

//listen for click on modal
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", closeOutside);

function openModal() {
  console.log("I work!");
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function closeOutside(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}
