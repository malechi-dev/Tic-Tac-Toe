const passwordLengthInput = document.getElementById("password-length");
const generatePasswordButton = document.getElementById("generate-password-button");
const generatedPassword = document.getElementById("generated-password");

generatePasswordButton.addEventListener("click", () => {
  const passwordLength = passwordLengthInput.value;
  const password = generatePassword(passwordLength);
  generatedPassword.textContent = password;
});

function generatePassword(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;':\",./<>?";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}