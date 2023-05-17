let tableBodyRef = document.querySelector(".table-admin");
var AirlineData = [];
let table = "";
window.onload = async function () {
  let token = localStorage.getItem("token");
  try {
    const response = await axios.get("http://localhost:5000/users/airline", {
      headers: { Authorization: token },
    });
    if (response.data.status == 200) {
      AirlineData = response.data.result;
      console.log("table", response.data);
      AirlineData.map((item, index) => {
        table += `
    
        <tr>
         <td>${item._id}</td>
         <td>${item.firstname}</td>
         <td>${item.lastname}</td>
         <td>${item.email}</td>
         <td>${item.phonenumber}</td>
         <td>${item.state}</td>
         <td>${item.zipcode}</td>
         <td>${item.age}</td>
         <td>${item.createdAt}</td>
         
     </tr>
        `;
      });

      tableBodyRef.innerHTML = table;
    } else {
      window.location.href = "../Admin/adminLogin.html";
    }
  } catch (error) {
    console.log(error);
  }
};
async function airlineSearchEvent(event) {
  let token = localStorage.getItem("token");
  try {
    table = "";
    const response = await axios.get(
      `http://localhost:5000/users/airline/${event.target.value}`,
      {
        headers: { Authorization: token },
      }
    );
    console.log("iam search", response.data.result);

    AirlineData = response.data.result;
    AirlineData.map((item, index) => {
      table += `
    
        <tr>
         <td>${item._id}</td>
         <td>${item.firstname}</td>
         <td>${item.lastname}</td>
         <td>${item.email}</td>
         <td>${item.phonenumber}</td>
         <td>${item.state}</td>
         <td>${item.zipcode}</td>
         <td>${item.age}</td>
         <td>${item.createdAt}</td>
         
     </tr>
        `;
    });

    tableBodyRef.innerHTML = table;
  } catch (error) {
    console.log(error);
  }
}
function Logout() {
  localStorage.removeItem("token");
  window.location.href = "../Admin/adminLogin.html";
}
