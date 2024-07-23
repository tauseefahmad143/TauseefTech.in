
let dateObj = new Date();
let month = String(dateObj.getMonth() + 1).padStart(2, '0');
document.querySelector("#month span").textContent = month;

let day = String(dateObj.getDate()).padStart(2, '0');
document.querySelector("#day span").textContent = day;

let year = dateObj.getFullYear();
document.querySelector("#year span").textContent = year;