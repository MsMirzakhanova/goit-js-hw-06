const formRef = document.querySelector(".login-form");

formRef.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
  //console.log(event.currentTarget.elements.email.value);
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    email,
    password,
  };

  if (email === " " || password === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    console.log(formData);
  }
  formRef.reset();
}
