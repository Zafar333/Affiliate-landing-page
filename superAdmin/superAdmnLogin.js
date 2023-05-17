var superAdminData;
function superAdmnInputRead(event) {
  const { name, value } = event.target;
  superAdminData = { ...superAdminData, [name]: value };
}
async function superAdminPostReq() {
  let usernameRef = document.querySelector(".username");
  let passwordRef = document.querySelector(".password");
  usernameRef.value = "";
  passwordRef.value = "";

  try {
    const response = await axios.post(
      "http://localhost:5000/auth/superadminLogin",
      superAdminData
    );
    if (response.data.status == 200) {
      localStorage.setItem("token", response.data.token);
      window.location.href = "../SuperAdminDashboard/airlinepage.html";
    } else {
      alert("Plese Enter Correct username and password");
    }
  } catch (error) {
    alert(error);
  }
}
