let clear = document.getElementById("clear-todos");

value = clear.id;
value = clear.innerText;
value = clear.textContent;
value = clear.title;
value = clear.style;
value = clear.href;

clear.className = "btn btn-primary";

clear.style.color = "#000";

clear.style.marginLeft = "99px";

clear.href = "www.google.com.tr";

clear.target = "_blank";

clear.textContent = "Siliniz";
clear.innerHTML = "<span> SİL </span>";
// value = clear.classList;
// value = clear.classList[1];
// console.log(value);

// let listGroup = document.querySelectorAll(".list-group-item");

// console.log(listGroup);

// let todo = document.querySelector(".list-group-item:nth-child");

const element = document.querySelectorAll(".list-group-item");

element.forEach(function (el) {
  el.style.color = "green";
  el.style.background = "Gray";
});

const element2 = document.querySelectorAll(".list-group-item:nth-child(2)");
element2[0].style.color = "yellow";

const elementDouble = document.querySelectorAll(
  ".list-group-item:nth-child(odd)"
);

elementDouble.forEach(function (el) {
  el.textContent = "Erzincan";
  el.style.color = "purple";
});

let element34 = document.querySelector(".list-group-item:nth-child(3)");
element34.innerHTML = "<button class='btn btn-danger'> HATA </button>";

let elements = document.querySelectorAll(".list-group-item:nth-child(even)");

elements.forEach(function (el) {
  console.log(el);
});
