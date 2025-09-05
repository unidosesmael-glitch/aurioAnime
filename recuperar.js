document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const emailInput = form.querySelector("input[type='email']");
  const button = form.querySelector("button");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
      alert("Por favor, insira um email válido.");
      return;
    }

    button.disabled = true;
    button.innerText = "Enviando...";

    // Simulação de envio (2 segundos)
    setTimeout(() => {
      alert(`Um link de recuperação foi enviado para ${email}.`);
      button.disabled = false;
      button.innerText = "Enviar";
      emailInput.value = "";
    }, 2000);
  });

  function validateEmail(email) {
    // Regex simples de validação de email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
