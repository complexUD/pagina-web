document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("suscription-form");
  const emailInput = document.getElementById("email");
  const sendBtn = document.getElementById("send");
  const emailTest = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/i;

  form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    if (emailTest.test(emailInput.value)) {
      grecaptcha.execute();
    }

    return false;
  });

  emailInput.addEventListener("input", () => {
    sendBtn.disabled = !emailTest.test(emailInput.value);
  });

  const notificationCloseBtn = document.getElementById(
    "suscription-notification-close"
  );
  notificationCloseBtn.addEventListener("click", () => {
    closeNotification();
  });
});

function onSubmit() {
  const form = document.getElementById("suscription-form");
  const emailInput = document.getElementById("email");
  const sendBtn = document.getElementById("send");
  const loader = document.getElementById("send-loader");

  form.submit();
  emailInput.readOnly = true;
  sendBtn.readOnly = true;
  loader.hidden = false;

  const iframe = document.getElementById("suscription-iframe");
  iframe.addEventListener("load", () => {
    loader.hidden = true;

    // Open Notification Popup
    openNotification();
    setTimeout(() => closeNotification(), 5000);

    // Reset Recaptcha
    grecaptcha.reset();

    // Reset Form to accept news suscriptions
    emailInput.readOnly = false;
    emailInput.value = "";
    sendBtn.readOnly = false;
    sendBtn.disabled = true;
  });
}

function openNotification() {
  const popUp = document.getElementById("suscription-notification");
  popUp.hidden = false;
  setTimeout(() => popUp.classList.add("fade-in"));
}

function closeNotification() {
  const popUp = document.getElementById("suscription-notification");
  popUp.classList.remove("fade-in");
  setTimeout(() => {
    if (popUp.classList.contains("fade-in")) {
      popUp.hidden = true;
    }
  }, 300);
}
