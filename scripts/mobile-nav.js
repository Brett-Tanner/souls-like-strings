const mobileNavDialog = document.querySelector("dialog");
const mobileNavToggle = document.querySelector("button[commandfor=nav-dialog]");
mobileNavToggle.addEventListener("click", () => mobileNavDialog.showModal());
