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
var formArr;
function readInputFields(event) {
  let { name, value } = event.target;
  formArr = { ...formArr, [name]: value };

  console.log(formArr);
}
