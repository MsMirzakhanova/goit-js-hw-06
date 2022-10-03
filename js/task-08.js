const formRef = document.querySelector(".login-form");

formRef.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
  //console.log(event.currentTarget.elements.email.value);
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {});
}
