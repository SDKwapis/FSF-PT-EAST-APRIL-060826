function keydownAction(event) {
  // TODO: Complete keydown function
  document.querySelector("#status").textContent = "KEYDOWN Event";
  document.querySelector("#code").textContent = event.code;
  document.querySelector("#key").textContent = event.key;

}

function keyupAction() {
  document.querySelector("#status").textContent = "KEYUP Event";
  document.querySelector("#code").textContent = "";
  document.querySelector("#key").textContent = "";
}

document.addEventListener("keyup", keyupAction);
document.addEventListener("keydown", keydownAction);
// TODO: Add Event Listener for "keydown" event

