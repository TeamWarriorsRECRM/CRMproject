async function register(event) {
  event.preventDefault();
  data = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
  };
  let result = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((r) => r.json());
  location.href = "/index.html";
}
