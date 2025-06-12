// const { response } = require("../app");

console.log("Frontend js ishga tushdi");

function itemTemplate(item) {
  return `<li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
          <item.reja class="item-text">${item.reja}</span>
          <div>
            <button
              data-id="${item._id}"
              class="edit-me btn btn-secondary btn-sm mr-1"
            >
              Ozgartirish
            </button>

            <button
              data-id="${item._id}"
              class="delete-me btn btn-danger btn-sm"
            >
              Ochirish
            </button>
          </div>
        </li>`;
}

let createField = document.getElementById("create-field");

//hozir biz buyerda reja.ejs fayldagi formni shu js faylga chaqirib olish uchun quyidagi amalni bajaryapmiz
document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault(); // boshqa sahifaga otib ketmasligi uchun shu kodni kiritdik
  axios //modern request
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("iltimos qaytadan harakat qiling");
    });
});

document.addEventListener("click", function (e) {
  console.log(e.target);

  //delete operations
  if (e.target.classList.contains("delete-me")) {
    // alert("siz delete tugmasini bosdingiz");
    // if (confirm("aniq ochirmoqchimisz?")) {
    //   alert("yes deb javob berildi");
    // } else {
    //   alert("no deb javob berildi");
    // }
    if (confirm("aniq ochirmoqchimisz?")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("iltimos qaytadan harakat qiling");
        });
    }
  }

  //edit operations
  if (e.target.classList.contains("edit-me")) {
    // alert("siz edit tugmasini bosdingiz");
    // if (confirm("aniq edit ochirmoqchimisz?")) {
    //   alert("yes deb javob berildi");
    // } else {
    //   alert("no deb javob berildi");
    // }
  }
});
