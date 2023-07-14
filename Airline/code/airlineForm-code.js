var airlineForm;
function readInput(event) {
  let { name, value } = event.target;
  airlineForm = { ...airlineForm, [name]: value };
  console.log(airlineForm);
  forminputValidation(event);
}
function readCheckBox(event) {
  let { name, checked } = event.target;
  airlineForm = { ...airlineForm, [name]: checked };
}
// flight form post request function is start
async function AirlineUserPostReq() {
  let firstnameRef = document.querySelector(".firstname");
  let lastnameRef = document.querySelector(".lastname");
  let stateRef = document.querySelector(".state");
  let phonenumberRef = document.querySelector(".phonenumber");
  let zipcodeRef = document.querySelector(".zipcode");
  let ageRef = document.querySelector(".age");
  let emailRef = document.querySelector(".email");
  let checkboxRef = document.querySelector(".checkbox");

  let data = await axios.post(
    "http://localhost:5000/users/airline",
    airlineForm
  );

  if (data.data.status == 200) {
    alert(data.data.msg);
  } else {
    alert(data.data.msg);
  }
  zipcodeRef.value = "";
  firstnameRef.value = "";
  lastnameRef.value = "";
  emailRef.value = "";
  phonenumberRef.value = "";
  stateRef.value = "";
  ageRef.value = "";
  checkboxRef.checked = "";
}

// flight form post request function is end

// flight form input validation is start
function forminputValidation(event) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const { name, value } = event.target;
  let elem = event.target;

  if (event.target.name == name && value != "") {
    elem.setAttribute("style", "border-color:green");
  } else {
    elem.setAttribute("style", "border-color:red");
  }
}
// flight form input validation is end

// flight form check-box validation is strat
// function checkBoxValidation(event) {
//   var sendbtnRef = document.querySelector("#disabled");
//   const { name, value } = event.target;
//   if (event.target.checked === true) {
//     sendbtnRef.setAttribute("style", "display:block");
//   } else {
//     sendbtnRef.setAttribute("style", "display:none");
//   }
// }
