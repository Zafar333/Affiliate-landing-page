var airlineForm;
function readInput(event) {
  let { name, value } = event.target;
  airlineForm = { ...airlineForm, [name]: value };
  console.log(airlineForm);
}
