function dados() {
  const email = document.getElementById("email").value;
  validaEmail(email);
  const password = document.getElementById("senha").value;
  console.log(email, password);
}

function validaEmail(email) {
  if (email) {
    const isValid = email.includes("@gmail.com");
    if (!isValid) {
      alert("Email invalido");
    }
  }
}
