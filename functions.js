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
function onHoverAnchor(id) {
  let tagName = document.getElementById(`${id}`).text;

  document.getElementById(
    `img${tagName === "PIX" ? "Pix" : tagName}`
  ).style.display = "flex";
  document
    .getElementById(`img${tagName === "PIX" ? "Pix" : tagName}`)
    .classList.add("fade-in");
}

function offHoverAnchor(id) {
  let tagName = document.getElementById(`${id}`).text;

  document.getElementById(
    `img${tagName === "PIX" ? "Pix" : tagName}`
  ).style.display = "none";
}
