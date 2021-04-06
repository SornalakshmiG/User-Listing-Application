"use strict";

const add = () => {
  if (
    document.getElementById("first_name").checkValidity() &&
    document.getElementById("mobile_num").checkValidity() &&
    document.getElementById("last_name").checkValidity() &&
    document.getElementById("user_mail").checkValidity()
  ) {
    let userList = JSON.parse(localStorage.getItem("users")) || [];
    userList.push({
      userId: Math.trunc(Math.random() * 100 + 1),
      firstName: document.getElementById("first_name").value,
      lastName: document.getElementById("last_name").value,
      email: document.getElementById("user_mail").value,
      mobile: document.getElementById("mobile_num").value,
    });
    localStorage.setItem("users", JSON.stringify(userList));
  }
};

const update = () => {
  if (
    document.getElementById("first_name").checkValidity() &&
    document.getElementById("mobile_num").checkValidity() &&
    document.getElementById("last_name").checkValidity() &&
    document.getElementById("user_mail").checkValidity()
  ) {
    let userList = JSON.parse(localStorage.getItem("users")) || [];
    let userIndex = JSON.parse(
      userList.findIndex(
        (user) =>
          user.userId === parseInt(window.location.search.replace("?", ""))
      )
    );
    userList[userIndex].userId = parseInt(
      window.location.search.replace("?", "")
    );
    userList[userIndex].firstName = document.getElementById("first_name").value;
    userList[userIndex].lastName = document.getElementById("last_name").value;
    userList[userIndex].email = document.getElementById("user_mail").value;
    userList[userIndex].mobile = document.getElementById("mobile_num").value;
    localStorage.setItem("users", JSON.stringify(userList));
  }
};

const del = () => {
  let userList = JSON.parse(localStorage.getItem("users")) || [];
  localStorage.setItem(
    "users",
    JSON.stringify(
      userList.filter(
        (user) =>
          user.userId !== parseInt(window.location.search.replace("?", ""))
      )
    )
  );
};

window.onload = () => {
  if (!window.location.search) {
    let addButton = document.createElement("button");
    addButton.innerHTML = "Add";
    addButton.type = "submit";
    addButton.onclick = () => {
      add();
    };
    document.getElementById("form__input").append(addButton);
    document.getElementById("form-title").innerHTML = "Type Your Details";
  } else {
    let deleteButton = document.createElement("button");
    let updateButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    updateButton.innerHTML = "Update";
    deleteButton.onclick = () => {
      del();
    };
    updateButton.innerHTML = "Update";
    updateButton.onclick = () => {
      update();
    };
    document.getElementById("form__input").append(updateButton);
    document.getElementById("form__input").append(deleteButton);
    let user = JSON.parse(localStorage.getItem("users")).filter(
      (user) =>
        user.userId === parseInt(window.location.search.replace("?", ""))
    );
    document.getElementById("userId").value = user[0].userId;
    document.getElementById("first_name").value = user[0].firstName;
    document.getElementById("last_name").value = user[0].lastName;
    document.getElementById("user_mail").value = user[0].email;
    document.getElementById("mobile_num").value = user[0].mobile;
  }
};
