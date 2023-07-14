var AdminFormData;
function readdInput(event) {
  const { name, value } = event.target;
  AdminFormData = { ...AdminFormData, [name]: value };
  console.log(AdminFormData);
}
const AdminPostReq = async () => {
  let usernameRef = document.querySelector(".username");
  let passwordRef = document.querySelector(".password");

  try {
    const response = await axios.post(
      "http://localhost:5000/auth/adminLogin",
      AdminFormData
    );
    if (response.data.status == 200) {
      localStorage.setItem("token", response.data.token);
      window.location.href = "../AdminDashboard/airlinePage.html";
    } else {
      alert("Plese Enter Correct username and password");
    }
  } catch (error) {
    alert(error);
  }
  usernameRef.value = "";
  passwordRef.value = "";
};
