const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-model");

// for querySelector multiple element ko lagiwe use querySelectorAll
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  // console.log("btn clicked");
  // hidden class lai remove garchha classList.remove le
  // for multiple class lai remove garna comma use garchhau "hidden","another"
  // classList used for manipulating of class
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// hiding of window
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  // two parameter one is name of the event and second is function which contain the code
  //that should be executed when the button is clicked
  console.log(btnsOpenModal[i].addEventListener("click", openModal));
}

btnCloseModel.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// keyword event are so called global event
// pass event object as an argument
document.addEventListener("keydown", function (e) {
  console.log("a key was pressed");
  // console.log)e
  console.log(e.key);
  // if(e.key ==="Escape"){
  //   // if the esacape key press then now check of the model contain hidden class

  //   // if model does not contain hidden class then close the modal
  //   if(!modal.classList.contains('hidden')){
  //     closeModal();
  //   }
  // }

  //for improving this
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
