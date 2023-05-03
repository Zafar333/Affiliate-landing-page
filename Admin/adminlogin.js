var AdminFormData;
function readAdmnInput(event) {
  const { name, value } = event.target;
  AdminFormData = { ...AdminFormData, [name]: value };
  console.log(AdminFormData);
}
function AdminPostReq() {
  console.log("admin data", AdminFormData);
}
