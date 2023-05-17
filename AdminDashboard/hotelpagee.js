let tableBodyRef = document.querySelector(".hotel-table");
var HotelData = [];
let table = "";
window.onload = async function () {
  let token = localStorage.getItem("token");
  try {
    const response = await axios.get("http://localhost:5000/users/hotel", {
      headers: { Authorization: token },
    });
    if (response.data.status == 200) {
      HotelData = response.data.result;
      console.log("table", response.data);
      HotelData.map((item, index) => {
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
        return table;
      });

      tableBodyRef.innerHTML = table;
    } else {
      window.location.href = "../Admin/adminLogin.html";
    }
  } catch (error) {
    console.log(error);
  }
};

async function hotelSearchEvent(event) {
  const { value } = event.target;
  let token = localStorage.getItem("token");

  try {
    table = "";
    const response = await axios.get(
      `http://localhost:5000/users/hotel/${value}`,
      {
        headers: { Authorization: token },
      }
    );
    HotelData = response.data.result;
    console.log("i am search", response.data);
    HotelData.map((item, index) => {
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
      return table;
    });

    tableBodyRef.innerHTML = table;
  } catch (error) {
    console.log(error);
  }
}
function logout() {
  window.location.href = "../Admin/adminLogin.html";
  localStorage.removeItem("token");
}
