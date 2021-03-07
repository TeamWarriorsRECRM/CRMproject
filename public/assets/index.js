async function sendLogIn(event) {
  event.preventDefault();
  console.log("working");
  data = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
  };
  console.log(data);
  let logInResult = await fetch("/api/index", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((r) => r.json());
  location.href = "/clients.html";
}
