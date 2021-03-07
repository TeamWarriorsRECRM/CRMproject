//To allow user to edit input
async function edit_row(no) {
  console.log("this works");
  document.querySelector("#edit_button" + no).classList.add("disappear");
  document.getElementById("save_button" + no).classList.remove("disappear");

  var firstName = document.getElementById("firstName_row" + no);
  var lastName = document.getElementById("lastName_row" + no);
  var budget = document.getElementById("budget_row" + no);
  var downPay = document.getElementById("downpayment_row" + no);
  var interest = document.getElementById("areaOfInterest_row" + no);
  var email = document.getElementById("email_row" + no);
  var status = document.getElementById("status_row" + no);
  var notes = document.getElementById("note_row" + no);

  var firstName_data = firstName.innerHTML;
  var lastName_data = lastName.innerHTML;
  var budget_data = budget.innerHTML;
  var downPay_data = downPay.innerHTML;
  var interest_data = interest.innerHTML;
  var email_data = email.innerHTML;
  var status_data = status.innerHTML;
  var notes_data = notes.innerHTML;

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
    "<select id='select''>' '<option value='1'> Actively looking </option>' '<option value='2'> Passively Looking </option>' '<option value='3'> Not Interested </option>' </select " +
    no +
    "' value='" +
    status_data +
    "'>";
  notes.innerHTML =
    "<input type='text' id='notes_text" + no + "' value='" + notes_data + "'>";
}

//To save user input
async function save_row(no) {
  console.log("this works fam");
  document.getElementById("save_button" + no).classList.add("disappear");
  document.querySelector("#edit_button" + no).classList.remove("disappear");

  var firstName_val = document.getElementById("firstName_text" + no).value;
  var lastName_val = document.getElementById("secondName_text" + no).value;
  var budget_val = document.getElementById("budget_text" + no).value;
  var downPay_val = document.getElementById("downPay_text" + no).value;
  var interest_val = document.getElementById("interest_text" + no).value;
  var email_val = document.getElementById("email_text" + no).value;

  const e = document.getElementById("select");
  const index = e.value;
  var status_val = e.options[index - 1].innerText;

  var notes_val = document.getElementById("notes_text" + no).value;

  console.log(lastName_val, "    LASTNAME");

  document.getElementById("firstName_row" + no).innerHTML = firstName_val;
  document.getElementById("lastName_row" + no).innerHTML = lastName_val;
  document.getElementById("budget_row" + no).innerHTML = budget_val;
  document.getElementById("downpayment_row" + no).innerHTML = downPay_val;
  document.getElementById("areaOfInterest_row" + no).innerHTML = interest_val;
  document.getElementById("email_row" + no).innerHTML = email_val;
  document.getElementById("status_row" + no).innerHTML = status_val;
  document.getElementById("note_row" + no).innerHTML = notes_val;

  let findId = await fetch(
    `/database.html/${firstName_val}/${lastName_val}/${email_val}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((res) => {
      const result = res.json();
      // console.log(result, "  WTF!!!!"); //////response
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

async function insertClient() {
  const clients = await fetch("/api/database")
    .then((res) => res.json())
    .catch((err) => console.log(err));
  // document.querySelector("#edit_button" + no).classList.remove("disappear");
  let id = clients.length + 1;

  console.log(id, "   NUMBER");
  //////////////////////DOESN'T READ VALUES
  var firstName_val = document.getElementById("firstNameNew").value;
  var lastName_val = document.getElementById("lastNameNew").value;
  var budget_val = document.getElementById("budgetNew").value;
  var downPay_val = document.getElementById("downpaymentNew").value;
  var interest_val = document.getElementById("areaOfInterestNew").value;
  var email_val = document.getElementById("emailNew").value;

  const e = document.getElementById("select");
  const index = e.value;
  var status_val = e.options[index - 1].innerText;

  var notes_val = document.getElementById("notesNew").value;

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

//To Delete full Row
async function delete_row(no) {
  console.log("this works eh");
  var firstName_val = document.getElementById("firstName_row" + no).innerHTML;
  var lastName_val = document.getElementById("lastName_row" + no).innerHTML;
  document.getElementById("row" + no + "").outerHTML = "";

  const deletion = await fetch(
    `/database.html/${firstName_val}/${lastName_val}`,
    {
      method: "DELETE",
    }
  );
  // console.log(deletion, "  DELETION ");
}

//to Add a row
function add_client() {
  document.getElementById("newEntry").classList.remove("disappear");
}

let x;
// This is to add rows
async function add_row(no) {
  document.getElementById("newEntry").classList.add("disappear");
  var new_firstName = document.getElementById("new_firstName");
  var new_lastName = document.getElementById("new_lastName");
  var new_budget = document.getElementById("new_budget");
  var new_downPayment = document.getElementById("new_downPayment");
  var new_areaOfInterest = document.getElementById("new_areaOfInterest");
  var new_email = document.getElementById("new_email");
  var new_status = document.getElementById("new_status");
  var new_note = document.getElementById("new_note ");

  //   if (!new_firstName) new_firstName.innerHTML += "";

  // // This is to add the User entries from the form, to the table
  // var userFirstName = document.getElementById("firstNameNew").value;
  // var userLastName = document.getElementById("lastNameNew").value;
  // var userBudget = document.getElementById("budgetNew").value;
  // var userDownpayment = document.getElementById("downpaymentNew").value;
  // var userAreaInterest = document.getElementById("areaOfInterestNew").value;
  // var userEmail = document.getElementById("emailAdressNew").value;
  // // var userStatus = document.getElementById('lastNameNew').value
  // var userNotes = document.getElementById("myNotesNew").value;

  var table = document.getElementById("tableInfo");
  var table_len = table.rows.length;
  var row = (table.insertRow(table_len).outerHTML =
    "<tr id='row" +
    table_len +
    "'><td id='firstNameNew" +
    table_len +
    "'>" +
    userFirstName +
    "</td><td placeholder='value here' id='lastName_row" +
    table_len +
    "'>" +
    userLastName +
    "</td><td placeholder='value here' id='budget_row" +
    table_len +
    "'>" +
    userBudget +
    "</td><td placeholder='value here' id='downpayment_row" +
    table_len +
    "'>" +
    userDownpayment +
    "</td><td placeholder='value here' id='areaOfInterest_row" +
    table_len +
    "'>" +
    userAreaInterest +
    "</td><td placeholder='value here' id='email_row" +
    table_len +
    "'>" +
    userEmail +
    "</td><td placeholder='value here' id='status_row" +
    "'>" +
    x +
    "</td><td placeholder='value here' id='note_row" +
    table_len +
    "'>" +
    userNotes +
    "</td><td><input type='button' id='edit_button" +
    no +
    "' value= 'Edit' class='btn btn-primary'  onclick='edit_row(" +
    table_len +
    ")'> <input type='button' ' value='Save' class='btn btn-primary' onclick='save_row(" +
    table_len +
    ")'> <input type='button' value='Delete' class='btn btn-secondary' onclick='delete_row(" +
    table_len +
    ")'></td></tr>");

  //to clear all inputs
  document.getElementById("firstNameNew").value = "";
  document.getElementById("lastNameNew").value = "";
  document.getElementById("budgetNew").value = "";
  document.getElementById("downpaymentNew").value = "";
  document.getElementById("areaOfInterestNew").value = "";
  document.getElementById("emailAdressNew").value = "";
  document.getElementById("myNotesNew").value = "";
}

// Client js

function mySelect() {
  var d = document.getElementById("select");
  var displaytext = d.options[d.selectedIndex].text;
  document.getElementById("textvalue").value = displaytext;
}

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
  ////////if entry exists update
  // console.log(id, "   findID");
  //if entry exists update
  const result = await fetch(
    `/database.html/${firstName_val}/${lastName_val}/${email_val}`,
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
  //////ELSE ADD
  const result = await fetch(`/database.html`, {
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

  document.getElementById("firstNameNew").value = "";
  document.getElementById("lastNameNew").value = "";
  document.getElementById("budgetNew").value = "";
  document.getElementById("downpaymentNew").value = "";
  document.getElementById("areaOfInterestNew").value = "";
  document.getElementById("emailNew").value = "";
  document.getElementById("notesNew").value = "";
}

// AUTH CODE --------------------------------------------------------------------------

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
