let tableBodyRef = document.querySelector(".hotel-superadmintable");
var hotelEditModalFormArray;
var updateReqid;
var HotelData;
let table = "";
window.onload = async function () {
  let token = localStorage.getItem("token");
  try {
    const response = await axios.get("http://localhost:5000/users/hotel", {
      headers: { Authorization: token },
    });
    if (response.data.status == 200) {
      HotelData = response.data.result;

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
         <td>${item.countPerson}</td>
         <td>${item.createdAt}</td>
         <td ><button class="edit-btn" onclick=" hotelopnEditModal('${index}')">Edit</button>
         <button class="dlete-btn" onclick="deleteReq('${item._id}')">Delete</button>
         
     </tr>
        `;
        return table;
      });

      tableBodyRef.innerHTML = table;
    } else {
      window.location.href = "../superAdmin/superAdminLogin.html";
    }
  } catch (error) {
    alert(error);
  }
};

async function hotelSearchevent(event) {
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
         <td>${item.countPerson}</td>
         <td>${item.createdAt}</td>
         <td><button class="edit-btn" onclick=" hotelopnEditModal('${index}')">Edit</button>
          <button class="dlete-btn" onclick="deleteReq('${item._id}')">Delete</button>
         
     </tr>
        `;
      return table;
    });

    tableBodyRef.innerHTML = table;
    // let searchRef = document.querySelector(".searchBar");
    // if (searchRef.value == "") {
    //   window.onload();
    // }
  } catch (error) {
    alert(error);
  }
}
function logout() {
  window.location.href = "../superAdmin/superAdminLogin.html";
  localStorage.removeItem("token");
}

async function deleteReq(id) {
  let response = await axios.delete(`http://localhost:5000/users/hotel/${id}`);
  if (response.data.status == 200) {
    table = "";
    window.onload();
  } else {
    alert(response.data.msg);
  }
}

// Edit For Modal Code Start
function hotelopnEditModal(indx) {
  updateReqid = HotelData[indx]._id;
  let modalRef = document.querySelector(".mainModal");
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
  zipcodeRef.value = HotelData[indx].zipcode;
  universalLeadIdRef.value = HotelData[indx]._id;
  firstnameRef.value = HotelData[indx].firstname;
  lastnameRef.value = HotelData[indx].lastname;
  emailRef.value = HotelData[indx].email;
  phonenumberRef.value = HotelData[indx].phonenumber;
  stateRef.value = HotelData[indx].state;
  ageRef.value = HotelData[indx].countPerson;
  createDateRef.value = HotelData[indx].createdAt;
}

function hideModal() {
  let modalRef = document.querySelector(".mainModal");
  modalRef.style.display = "none";
}

function hotelinputEditEvent(event) {
  const { name, value } = event.target;
  hotelEditModalFormArray = { ...hotelEditModalFormArray, [name]: value };
}

async function updateReq() {
  var response = await axios.put(
    `http://localhost:5000/users/hotel/update/${updateReqid}`,
    hotelEditModalFormArray
  );
  if (response.status == 200) {
    alert(response.data.msg);
  } else {
    alert(response.data.msg);
  }
}
// Edit Modal code end
