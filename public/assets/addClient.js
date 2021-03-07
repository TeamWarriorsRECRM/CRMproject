// ADDS NEW CLIENT TO DATABASE
async function insertClient() {
  const clients = await fetch("/api/database")
    .then((res) => res.json())
    .catch((err) => console.log(err));

  let id = clients.length + 1;

  let firstName_val = document.getElementById("firstNameNew").value;
  let lastName_val = document.getElementById("lastNameNew").value;
  let budget_val = document.getElementById("budgetNew").value;
  let downPay_val = document.getElementById("downpaymentNew").value;
  let interest_val = document.getElementById("areaOfInterestNew").value;
  let email_val = document.getElementById("emailNew").value;
  let dropdown = document.getElementById("select");
  let index = dropdown.value;
  let status_val = dropdown.options[index - 1].innerText;
  let notes_val = document.getElementById("notesNew").value;

  addEntry(
    firstName_val,
    lastName_val,
    budget_val,
    downPay_val,
    interest_val,
    email_val,
    status_val,
    notes_val,
    id
  );
}
