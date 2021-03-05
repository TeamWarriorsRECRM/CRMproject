// To save client input into database

// const { async } = require("rxjs");

// Database js

//To allow user to edit input
async function edit_row(no) {
  console.log("this works");
  // document.querySelector("#edit_button" + no).classList.add("disappear");

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

  console.log(firstName_data);
  console.log(lastName_data);
  console.log(budget_data);

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
    "<input type='text' id='email_text" +
    no +
    "' value='" +
    interest_data +
    "'>";
  status.innerHTML =
    "<input type='text' id='status_text" +
    no +
    "' value='" +
    status_data +
    "'>";
  notes.innerHTML =
    "<input type='text' id='notes_text" + no + "' value='" + notes_data + "'>";

  ////////if entry exists update
  const findId = await fetch(
    `/database.html/${firstName_data}/${lastName_data}/${email_data}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
}

//To save user input
async function save_row(no) {
  console.log("this works fam");
  // document.querySelector("#edit_button" + no).classList.remove("disappear");

  var firstName_val = document.getElementById("firstName_text" + no).value;
  var lastName_val = document.getElementById("secondName_text" + no).value;
  var budget_val = document.getElementById("budget_text" + no).value;
  var downPay_val = document.getElementById("downPay_text" + no).value;
  var interest_val = document.getElementById("interest_text" + no).value;
  var email_val = document.getElementById("email_text" + no).value;
  var status_val = document.getElementById("status_text" + no).value;
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

  //////if entry exists update
  // const findId = await fetch(`/database.html`, {
  //   method: "PUT",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     firstName: firstName_val,
  //     lastName: lastName_val,
  //     budget: budget_val,
  //     downPay: downPay_val,
  //     interest: interest_val,
  //     email: email_val,
  //     status: status_val,
  //     notes: notes_val,
  //   }),
  // }).then((res) => console.log(res.statusText));
  //////ELSE ADD
  const res = await fetch(`/database.html`, {
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
    }),
  });
}

//To Delete full Row
async function delete_row(no) {
  console.log("this works eh");
  var firstName_val = document.getElementById("firstName_row" + no).innerHTML;
  var lastName_val = document.getElementById("lastName_row" + no).innerHTML;
  // console.log(firstName_val, lastName_val, "   INPUT");
  document.getElementById("row" + no + "").outerHTML = "";

  const deletion = await fetch(
    `/database.html/${firstName_val}/${lastName_val}`,
    {
      method: "DELETE",
    }
  );
  // console.log(deletion, "  DELETION ");
}

////EDIT ROW
//////////NOT READY YET
async function editRow(...inputs) {
  const result = await fetch("/database.html", {
    method: "PUT",
    body: {},
  });
}

//to Add a row
function add_client(){
    document.getElementById('newEntry').classList.remove('disappear')
}


let x;
// This is to add rows 
async function add_row(no) {
document.getElementById('newEntry').classList.add('disappear')
  var new_firstName = document.getElementById("new_firstName");
  var new_lastName = document.getElementById("new_lastName");
  var new_budget = document.getElementById("new_budget");
  var new_downPayment = document.getElementById("new_downPayment");
  var new_areaOfInterest = document.getElementById("new_areaOfInterest");
  var new_email = document.getElementById("new_email");
  var new_status = document.getElementById("new_status");
  var new_note = document.getElementById("new_note ");

//   if (!new_firstName) new_firstName.innerHTML += "";

  // This is to add the User entries from the form, to the table
    var userFirstName = document.getElementById('firstNameNew').value
    var userLastName = document.getElementById('lastNameNew').value
    var userBudget = document.getElementById('budgetNew').value
    var userDownpayment = document.getElementById('downpaymentNew').value
    var userAreaInterest = document.getElementById('areaOfInterestNew').value
    var userEmail = document.getElementById('emailAdressNew').value
    // var userStatus = document.getElementById('lastNameNew').value
    var userNotes = document.getElementById('myNotesNew').value



  var table = document.getElementById("tableInfo");
  var table_len = table.rows.length;
  var row = (table.insertRow(table_len).outerHTML =
    "<tr id='row" +
    table_len +
    "'><td id='firstNameNew"  +
    table_len +
    "'>"+ userFirstName +
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
    table_len +
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

//   new_firstName.innerHTML = "";
//   document.getElementById("firstName_row").innerHTML += "jhgyk";
//   document.getElementById("lastName_row").innerText += "ffff";
//   document.getElementById("downPayment_row").value = "ffff";
//   document.getElementById("areaOfInterest_row").innerText = "ffff";
//   document.getElementById("email_row").innerText = "ffff";
//   document.getElementById("status_row").innerText = "ffff";
//   document.getElementById("note_row").innerText = "ffff";
//   document.getElementById("edit_button" + no).classList.add("disappear");

//to clear all inputs
  document.getElementById('firstNameNew').value=''
document.getElementById('lastNameNew').value=''
document.getElementById('budgetNew').value=''
document.getElementById('downpaymentNew').value=''
document.getElementById('areaOfInterestNew').value=''
document.getElementById('emailAdressNew').value=''
document.getElementById('myNotesNew').value=''


  await function myFunction(){
    var x = document.getElementById('selection').options.item[0].text;
    document.getElementById('status_row').innerHTML =x
}
}



// moment function working,

// To show current
// document.getElementById("time").onload = function timeShow() {timeShow()};a

// function timeShow() {
//    var x= ((moment().format("MMM Do YY"))
//    var x = new Date(moment().format("MMM Do YY")) 
//   var x = new Date(document.lastModified);
//   document.getElementById("time").innerHTML = x;
// }

// Client js

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("infoTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;

    // loop through all table rows except headers
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementByTagName("TD")[0];
      y = rows[i + 1].getElementByTagName("TD")[0];

      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
  }
  if (shouldSwitch) {
    /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    switching = true;
  }
}
