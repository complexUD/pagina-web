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
});

function onSubmit() {
  const form = document.getElementById("suscription-form");
  form.submit();

  const iframe = document.getElementById("suscription-iframe");
  iframe.addEventListener("load", () => {
    // Open message
    /**
     * ¡Gracias por suscribirte!
     *   En breve recibirás un correo con instrucciones para la
     *   activación de tu cuenta.
     */

    alert("¡Gracias por suscribirte!");

    // Reset Recaptcha
    grecaptcha.reset();

    // Reset Form to accept news suscriptions
    emailInput.value = "";
    sendBtn.disabled = true;
  });
}
