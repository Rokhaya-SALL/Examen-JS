const registerForm = document.querySelector("#register-form");

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(registerForm);

  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirm-password");

  const errorMessage = document.querySelector("#error-message");
  const successMessage = document.querySelector("#success-message");
  const spinner = document.querySelector("#spinner");

  errorMessage.style.display = "none";
  successMessage.style.display = "none";

  if (password.length < 8) {
    errorMessage.textContent = "Le mot de passe doit contenir au moins 8 caractères.";
    errorMessage.style.display = "block";
    return;
  }

  if (password !== confirmPassword) {
    errorMessage.textContent = "Les mots de passe ne correspondent pas.";
    errorMessage.style.display = "block";
    return;
  }

  try {
    spinner.style.display = "block"; 

    const res = await fetch("http://localhost:8000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    spinner.style.display = "none";

    if (!res.ok) {
      throw new Error("Échec de l'inscription");
    }

    successMessage.textContent = "Inscription réussie !";
    successMessage.style.display = "block";
  } catch (err) {
    errorMessage.textContent = "Une erreur est survenue. Veuillez réessayer.";
    errorMessage.style.display = "block";
    spinner.style.display = "none"; 
  }
});
