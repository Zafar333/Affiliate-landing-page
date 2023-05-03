const SendBtnRef = document.querySelector(".send");
var airlineForm;
function readInput(event) {
  let { name, value } = event.target;
  airlineForm = { ...airlineForm, [name]: value };
  console.log(airlineForm);
}
function readCheckBox(event) {
  let { name, checked } = event.target;
  airlineForm = { ...airlineForm, [name]: checked };
  console.log(airlineForm);
}

SendBtnRef.addEventListener("click", () => {
  AirlineUserPostReq();
});
async function AirlineUserPostReq() {
  let data = await axios.post(
    "http://localhost:5000/airline/users",
    airlineForm
  );
  console.log("resp", data);
}
