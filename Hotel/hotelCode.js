var formArr;
function readInputFields(event) {
  const { name, value } = event.target;
  formArr = { ...formArr, [name]: value };
}
function readCheckBox(event) {
  let { name, checked } = event.target;
  formArr = { ...formArr, [name]: checked };
}

async function HotelFormPostReq() {
  var response = await axios.post("http://localhost:5000/users/hotel", formArr);

  if (response.data.status == 200) {
    alert(response.data.msg);
  } else {
    alert(response.data.msg);
  }

  let firstnameRef = document.querySelector(".firstname");
  let lastnameRef = document.querySelector(".lastname");
  let stateRef = document.querySelector(".state");
  let phonenumberRef = document.querySelector(".phonenumber");
  let zipcodeRef = document.querySelector(".zipcode");
  let ageRef = document.querySelector(".age");
  let emailRef = document.querySelector(".email");
  let checkboxRef = document.querySelector(".checkBox");
  zipcodeRef.value = "";
  firstnameRef.value = "";
  lastnameRef.value = "";
  emailRef.value = "";
  phonenumberRef.value = "";
  stateRef.value = "";
  ageRef.value = "";
  checkboxRef.checked = "";
}
