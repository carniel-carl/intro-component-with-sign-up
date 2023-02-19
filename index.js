const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const submited = document.getElementById("submited");
const allInput = document.querySelectorAll("input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (firstName.value.trim() === "") {
    errorFunc(firstName, "First Name can not be empty");
    document.getElementById("fname-icon").style.display = "block";
  } else {
    successFunc(firstName, "");
    document.getElementById("fname-icon").style.display = "none";
  }

  if (lastName.value.trim() === "") {
    errorFunc(lastName, "Last Name can not be empty");
    document.getElementById("lname-icon").style.display = "block";
  } else {
    successFunc(lastName, "");
    document.getElementById("lname-icon").style.display = "none";
  }

  if (email.value.trim() === "") {
    errorFunc(email, "Email can not be empty");
    document.getElementById("email-icon").style.display = "block";
  } else {
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!re.test(email.value)) {
      errorFunc(email, "Looks like this is not an email");
      email.style.color = "red";
      return;
    } else {
      successFunc(email, "");
      document.getElementById("email-icon").style.display = "none";
    }
  }

  if (password.value.trim() === "") {
    errorFunc(password, "Password can not be empty");
    document.getElementById("password-icon").style.display = "block";
  } else {
    successFunc(password, "");
    document.getElementById("password-icon").style.display = "none";
  }

  if (
    firstName.value.trim().length > 1 &&
    lastName.value.trim().length > 1 &&
    email.value.trim().length > 1 &&
    password.value.trim().length > 1
  ) {
    submited.innerText = "Signed Up Successfully";
    submited.style.display = "block";
    setTimeout(() => (submited.style.display = "none"), 5000);
    setTimeout(() => clearField(form), 50);
    setTimeout(
      () => allInput.forEach((input) => input.classList.remove("sucess")),
      50
    );
  }
});

const clearField = (field) => {
  field.reset();
};

const errorFunc = (inputField, message) => {
  const formControl = inputField.parentElement;
  const span = formControl.querySelector("span");

  span.innerText = message;
  inputField.classList.add("error");
};

const successFunc = (inputField, message) => {
  const formControl = inputField.parentElement;
  const span = formControl.querySelector("span");

  span.innerText = message;
  inputField.className += "sucess";
};
