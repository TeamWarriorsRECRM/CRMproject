// TO ALLOW USER TO EDIT INPUT
async function edit_row(no) {
  document.querySelector("#edit_button" + no).classList.add("disappear");
  document.getElementById("save_button" + no).classList.remove("disappear");

  let firstName = document.getElementById("firstName_row" + no);
  let lastName = document.getElementById("lastName_row" + no);
  let budget = document.getElementById("budget_row" + no);
  let downPay = document.getElementById("downpayment_row" + no);
  let interest = document.getElementById("areaOfInterest_row" + no);
  let email = document.getElementById("email_row" + no);
  let status = document.getElementById("status_row" + no);
  let notes = document.getElementById("note_row" + no);

  let firstName_data = firstName.innerHTML;
  let lastName_data = lastName.innerHTML;
  let budget_data = budget.innerHTML;
  let downPay_data = downPay.innerHTML;
  let interest_data = interest.innerHTML;
  let email_data = email.innerHTML;
  let status_data = status.innerHTML;
  let notes_data = notes.innerHTML;

  firstName.innerHTML =
    "<input type='text' id='firstName_text" +
    no +
    "' value='" +
    firstName_data +
    "'>";
  lastName.innerHTML =
    "<input type='text' id='secondName_text" +
    no +
    "' value='" +
    lastName_data +
    "'>";
  budget.innerHTML =
    "<input type='text' id='budget_text" +
    no +
    "' value='" +
    budget_data +
    "'>";
  downPay.innerHTML =
    "<input type='text' id='downPay_text" +
    no +
    "' value='" +
    downPay_data +
    "'>";
  interest.innerHTML =
    "<input type='text' id='interest_text" +
    no +
    "' value='" +
    interest_data +
    "'>";
  email.innerHTML =
    "<input type='text' id='email_text" + no + "' value='" + email_data + "'>";
  status.innerHTML =
    "<select id='select''>' '<option value='1'>Actively looking </option>' '<option value='2'>Passively Looking </option>' '<option value='3'>Not Interested </option>' </select " +
    no +
    "' value='" +
    status_data +
    "'>";
  notes.innerHTML =
    "<input type='text' id='notes_text" + no + "' value='" + notes_data + "'>";
}

//SAVE EDITED CLIENT INFORMATION FUNCTION
async function save_row(no) {
  document.getElementById("save_button" + no).classList.add("disappear");
  document.querySelector("#edit_button" + no).classList.remove("disappear");

  let firstName_val = document.getElementById("firstName_text" + no).value;
  let lastName_val = document.getElementById("secondName_text" + no).value;
  let budget_val = document.getElementById("budget_text" + no).value;
  let downPay_val = document.getElementById("downPay_text" + no).value;
  let interest_val = document.getElementById("interest_text" + no).value;
  let email_val = document.getElementById("email_text" + no).value;
  let e = document.getElementById("select");
  let index = e.value;
  let status_val = e.options[index - 1].innerText;
  let notes_val = document.getElementById("notes_text" + no).value;

  document.getElementById("firstName_row" + no).innerHTML = firstName_val;
  document.getElementById("lastName_row" + no).innerHTML = lastName_val;
  document.getElementById("budget_row" + no).innerHTML = budget_val;
  document.getElementById("downpayment_row" + no).innerHTML = downPay_val;
  document.getElementById("areaOfInterest_row" + no).innerHTML = interest_val;
  document.getElementById("email_row" + no).innerHTML = email_val;
  document.getElementById("status_row" + no).innerHTML = status_val;
  document.getElementById("note_row" + no).innerHTML = notes_val;

  let findId = await fetch(
    `/api/database/${firstName_val}/${lastName_val}/${email_val}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((res) => {
      const result = res.json();
      return result;
    })
    .then((res) => {
      editEntry(
        firstName_val,
        lastName_val,
        budget_val,
        downPay_val,
        interest_val,
        email_val,
        status_val,
        notes_val,
        res
      );
    });
}

// TO DELETE FULL ROW
async function delete_row(no) {
  console.log("this works eh");
  let firstName_val = document.getElementById("firstName_row" + no).innerHTML;
  let lastName_val = document.getElementById("lastName_row" + no).innerHTML;
  document.getElementById("row" + no + "").outerHTML = "";

  const deletion = await fetch(
    `/api/database/${firstName_val}/${lastName_val}`,
    {
      method: "DELETE",
    }
  );
}

// DATABASE HTML EDIT ENTRY FUNCTION
async function editEntry(
  firstName_val,
  lastName_val,
  budget_val,
  downPay_val,
  interest_val,
  email_val,
  status_val,
  notes_val,
  id
) {
  // IF ENTRY EXISTS UPDATE THE ENTRY
  const result = await fetch(
    `/api/database/${firstName_val}/${lastName_val}/${email_val}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstName_val,
        lastName: lastName_val,
        budget: budget_val,
        downPay: downPay_val,
        interest: interest_val,
        email: email_val,
        status: status_val,
        notes: notes_val,
        id: id,
      }),
    }
  );
}

// SENDS NEW CLIENT INFORMATION TO DATABASE FUNCTION
async function addEntry(
  firstName_val,
  lastName_val,
  budget_val,
  downPay_val,
  interest_val,
  email_val,
  status_val,
  notes_val,
  id
) {
  const result = await fetch(`/database`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: firstName_val,
      lastName: lastName_val,
      budget: budget_val,
      downPay: downPay_val,
      interest: interest_val,
      email: email_val,
      status: status_val,
      notes: notes_val,
      id: id,
    }),
  });
}
