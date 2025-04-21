const form = document.getElementById("loginForm");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  // Clear old error messages
  emailError.textContent = "";
  passwordError.textContent = "";

  const email = document.getElementById("mail").value;
  const password = document.getElementById("password").value;
  const button = form.querySelector("button");
  button.textContent = "Logging in...";

  await new Promise((resolve) => setTimeout(resolve, 3000));

  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  if (storedEmail === email) {
    if (storedPassword === password) {
      localStorage.setItem("token", "fake-jwt-token-123");
      form.style.display = "none";
      document.getElementById("welcomeSection").style.display = "block";
      document.getElementById("userEmail").textContent = email;
    } else {
      passwordError.textContent = "❌ Incorrect password!";
    }
  } else {
    // New user
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("token", "fake-jwt-token-123");

    form.style.display = "none";
    document.getElementById("welcomeSection").style.display = "block";
    document.getElementById("userEmail").textContent = email;
  }

  button.textContent = "Login";
});
