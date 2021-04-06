"use strict";

let userlist = JSON.parse(localStorage.getItem("users")) || [];

window.onload = () => {
  if (userlist.length > 0) return displayCards(userlist);
  let noDetails = document.createElement("div");
  document.body.append(noDetails);
};

const displayCards = (userlist) => {
  userlist.forEach((user) => {
    let card = document.createElement("div");
    card.id = user.userId;
    card.className = "card";
    card.innerHTML = `<img src=${"./img1.jpg"} >
                        <div class="container">
                        <h4><b>${user.userId}</b></h4> 
                        <p>${user.firstName}</p> 
                        </div>`;
    card.onclick = () => {
      window.location.href = `./user_form.html?${card.id}`;
    };
    document.getElementById("container").append(card);
  });
};
