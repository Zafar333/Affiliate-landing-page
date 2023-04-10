function mainModal() {
  let modal = document.querySelector(".main-modal");
  modal.style.display = "block";
}
function closeModal() {
  let close = document.querySelector(".main-modal");
  close.style.display = "none";
}
function goFormPage() {
  var data = document.querySelector("input[name=zipField]").value;
  if (data !== "") {
    document.querySelector("input[name=zipField]").style.borderColor = "green";
    window.location.href = "./form.html";
  } else {
    document.querySelector("input[name=zipField]").style.borderColor = "red";
  }
}
