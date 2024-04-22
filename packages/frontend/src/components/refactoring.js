let fistName = "";
let lastName = "";
let isEdit = false;

function setEdit() {
  isEdit = !isEdit;
}

function setFirstName(targetValue) {
  firstName = targetValue;
}

function setLastName(targetValue) {
  lastName = targetValue;
}

function handleFormSubmit(e) {
  e.preventDefault();
  if (isEdit) {
    editButton.textContent = "Save Profile";
    hide(firstNameText);
    hide(lastNameText);
    show(firstNameInput);
    show(lastNameInput);
    setEdit(isEdit);
  } else {
    editButton.textContent = "Edit Profile";
    hide(firstNameInput);
    hide(lastNameInput);
    show(firstNameText);
    show(lastNameText);
    setEdit(isEdit);
  }
}

function handleFirstNameChange(e) {
  setFirstName(e.target.value);
  firstNameText.textContent = firstName;
  updateDom();
}

function handleLastNameChange(e) {
  setLastName(e.target.value);
  lastNameText.textContent = lastName;
  updateDom();
}

function updateDom() {
  helloText.textContent =
    "Hello " + firstNameInput.value + " " + lastNameInput.value + "!";
}

function hide(el) {
  el.style.display = "none";
}

function show(el) {
  el.style.display = "";
}

let form = document.getElementById("form");
let editButton = document.getElementById("editButton");
let firstNameInput = document.getElementById("firstNameInput");
let firstNameText = document.getElementById("firstNameText");
let lastNameInput = document.getElementById("lastNameInput");
let lastNameText = document.getElementById("lastNameText");
let helloText = document.getElementById("helloText");
form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
lastNameInput.oninput = handleLastNameChange;
