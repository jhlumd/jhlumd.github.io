const scriptURL =
  "https://script.google.com/macros/s/AKfycbxTcK-uHgVqrLRixCrRoK9PzYcPzIElsjTfF77EdlaPSjvHolE/exec";
const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => {
      form.reset();
      alert("Message sent sucessfully!");
    })
    .catch(err => {
      console.error("Error!", err.message);
      alert("Message was unable to be sent.");
    });
});
