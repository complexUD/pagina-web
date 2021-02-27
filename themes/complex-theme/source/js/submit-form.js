document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("suscription-form");
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    // Validate Inputs

    grecaptcha.execute();
    return false;
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

    // Reset Form to accept news suscriptions
    form.reset();
    grecaptcha.reset();
  });
}
