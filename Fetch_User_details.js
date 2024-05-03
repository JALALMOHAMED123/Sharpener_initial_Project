// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault();
    const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
    axios
      .post(
        "https://crudcrud.com/api/e2d2374207e24af991f66505068a8a76/appointmentData",
        userDetails
      )
      .then((response) => displayUserOnScreen(response.data))
      .catch((error) => console.log(error));
  
    // Clearing the input fields
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  }
  window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/e2d2374207e24af991f66505068a8a76/appointmentData")
    .then((response) => {
        for(let i of response.data) displayUserOnScreen(i);

    })
    .catch((error) => console.log(error));
    })

  function displayUserOnScreen(userDetails) {
    const userItem = document.createElement("li");
    userItem.appendChild(
      document.createTextNode(
        `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
      )
    );
  
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);
  
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);
  
    const userList = document.querySelector("ul");
    userList.appendChild(userItem);
  
    deleteBtn.addEventListener("click", function (event) {
    userList.removeChild(event.target.parentElement);
    Delete();
    });
    function Delete(){
        const url='https://crudcrud.com/api/e2d2374207e24af991f66505068a8a76/appointmentData/';
        axios.delete(url+userDetails._id)
            .then(response=>console.log(response))
            .catch(err=>console.log(err))
    }
    editBtn.addEventListener("click", function (event) {
      userList.removeChild(event.target.parentElement);
      Delete();
      document.getElementById("username").value = userDetails.username;
      document.getElementById("email").value = userDetails.email;
      document.getElementById("phone").value = userDetails.phone;
    });
  }
  
  // Do not touch code below
  module.exports = handleFormSubmit;
  
  