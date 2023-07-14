let tableBodyRef = document.querySelector(".table-superadmin");
var updateReqid;
var AirlineData = [];
var EditModalFormArray;
let table = "";
window.onload = async function () {
  let token = localStorage.getItem("token");
  try {
    const response = await axios.get("http://localhost:5000/users/airline", {
      headers: { Authorization: token },
    });
    if (response.data.status == 200) {
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
         <td>${item.flightDestination}</td>
         <td>${item.createdAt}</td>
         <td><button class="edit-btn" onclick="opnEditModal('${index}')">Edit</button>
         <button class="dlete-btn" onclick="dleteReq('${item._id}')">Delete</button>
     </td>
         
     </tr>
        `;
      });

      tableBodyRef.innerHTML = table;
    } else {
      window.location.href = "../SuperAdmin/superAdminLogin.html";
    }
  } catch (error) {
    alert(error.message);
  }
};
async function SearchEvent(event) {
  let token = localStorage.getItem("token");

  let ref = document.querySelector(".Airsearch-bar");
  try {
    table = "";
    const response = await axios.get(
      `http://localhost:5000/users/airline/${event.target.value}`,
      {
        headers: { Authorization: token },
      }
    );

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
         <td>${item.flightDestination}</td>
         <td>${item.createdAt}</td>
         <td><button class="edit-btn" onclick="opnEditModal('${index}')">Edit</button>
         <button class="dlete-btn"  onclick="dleteReq('${item._id}')">Delete</button>
       
         
     </tr>
        `;
    });

    tableBodyRef.innerHTML = table;
  } catch (error) {
    alert(error.message);
  }
}
function Logout() {
  localStorage.removeItem("token");
  window.location.href = "../superAdmin/superAdminLogin.html";
}

async function dleteReq(id) {
  let response = await axios.delete(
    `http://localhost:5000/users/airline/${id}`
  );
  if (response.data.status == 200) {
    table = "";
    window.onload();

    alert("your data is deleted");
  } else {
    alert(response.data.msg);
  }
}
// Edit For Modal Code Start
function opnEditModal(indx) {
  updateReqid = AirlineData[indx]._id;
  let modalRef = document.querySelector(".Modal");
  modalRef.style.display = "block";

  let firstnameRef = document.querySelector(".firstname");
  let lastnameRef = document.querySelector(".lastname");
  let stateRef = document.querySelector(".state");
  let phonenumberRef = document.querySelector(".phonenumber");
  let zipcodeRef = document.querySelector(".zipcode");
  let ageRef = document.querySelector(".age");
  let emailRef = document.querySelector(".email");
  let createDateRef = document.querySelector(".createDate");
  let universalLeadIdRef = document.querySelector(".universalLeadId");
  zipcodeRef.value = AirlineData[indx].zipcode;
  universalLeadIdRef.value = AirlineData[indx]._id;
  firstnameRef.value = AirlineData[indx].firstname;
  lastnameRef.value = AirlineData[indx].lastname;
  emailRef.value = AirlineData[indx].email;
  phonenumberRef.value = AirlineData[indx].phonenumber;
  stateRef.value = AirlineData[indx].state;
  ageRef.value = AirlineData[indx].flightDestination;
  createDateRef.value = AirlineData[indx].createdAt;
}

function hideModal() {
  let modalRef = document.querySelector(".Modal");
  modalRef.style.display = "none";
}

function inputModalEvent(event) {
  const { name, value } = event.target;
  EditModalFormArray = { ...EditModalFormArray, [name]: value };
}

async function updateReq() {
  var response = await axios.put(
    `http://localhost:5000/users/airline/update/${updateReqid}`,
    EditModalFormArray
  );
  if (response.status == 200) {
    alert(response.data.msg);
  } else {
    alert(response.data.msg);
  }
}
