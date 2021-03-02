
  // Database js 
  
  //To allow user to edit input 
  function edit_row(no) {
    console.log('this works')

    var firstName = document.getElementById('firstName_row' + no);
    var lastName = document.getElementById('lastName_row' + no);
    var budget = document.getElementById('budget_row' + no);
    var downPay = document.getElementById('downpayment_row' + no);
    var interest = document.getElementById('areaOfInterest_row' + no);
    var notes = document.getElementById('note_row' + no);

    var firstName_data = firstName.innerHTML;
    var lastName_data = lastName.innerHTML;
    var budget_data = budget.innerHTML;
    var downPay_data = downPay.innerHTML;
    var interest_data = interest.innerHTML;
    var notes_data = notes.innerHTML;

    firstName.innerHTML = "<input type='text' id='firstName_text" + no + "' value='" + firstName_data + "'>";
    lastName.innerHTML = "<input type='text' id='secondName_text" + no + "' value='" + lastName_data + "'>";
    budget.innerHTML = "<input type='text' id='budget_text" + no + "' value='" + budget_data + "'>";
    downPay.innerHTML = "<input type='text' id='downPay_text" + no + "' value='" + downPay_data + "'>";
    interest.innerHTML = "<input type='text' id='interest_text" + no + "' value='" + interest_data + "'>";
    notes.innerHTML = "<input type='text' id='notes_text" + no + "' value='" + notes_data + "'>";

  }

  //To save user input
  function save_row(no) {

    console.log('this works fam')


    var firstName_val = document.getElementById('firstName_text' + no).value;
    var lastName_val = document.getElementById('secondName_text' + no).value;
    var budget_val = document.getElementById('budget_text' + no).value;
    var downPay_val = document.getElementById('downPay_text' + no).value;
    var interest_val = document.getElementById('interest_text' + no).value;
    var notes_val = document.getElementById('notes_text' + no).value;

    document.getElementById("firstName_row" + no).innerHTML = firstName_val;
    document.getElementById("lastName_row" + no).innerHTML = lastName_val;
    document.getElementById("budget_row" + no).innerHTML = budget_val;
    document.getElementById("downpayment_row" + no).innerHTML = downPay_val;
    document.getElementById("areaOfInterest_row" + no).innerHTML = interest_val;
    document.getElementById("note_row" + no).innerHTML = notes_val;

  }

  //To Delete full Row 

  function delete_row(no) {
    console.log('this works eh')
    document.getElementById('row' + no + "").outerHTML = '';
  }

  //to Add a row 
  function add_row(no) {
    var new_firstName = document.getElementById("new_firstName")
    var new_lastName = document.getElementById("new_lastName")
    var new_budget = document.getElementById("new_budget")
    var new_downPayment = document.getElementById('new_downPayment')
    var new_areaOfInterest = document.getElementById("new_areaOfInterest")
    var new_note = document.getElementById("new_note ")

    var table = document.getElementById("tableInfo");
    var table_len = (table.rows.length);
    var row = table.insertRow(table_len).outerHTML =
      "<tr id='row" + table_len + "'><td id='firstName_row" + table_len + "'>" + new_firstName + "</td><td id='lastName_row" + table_len + "'>" + new_lastName + "</td><td id='budget_row" + table_len + "'>" + new_budget + "</td><td id='downpayment_row" + table_len + "'>" + new_downPayment + "</td><td id='areaOfInterest_row" + table_len + "'>" + new_areaOfInterest + "</td><td id='note_row" + table_len + "'>" + new_note + "</td><td><input type='button' value= 'Edit' class='btn btn-primary'  onclick='edit_row(" + table_len + ")'> <input type='button' ' value='Save' class='btn btn-primary' onclick='save_row(" + table_len + ")'> <input type='button' value='Delete' class='btn btn-secondary' onclick='delete_row(" + table_len + ")'></td></tr>";



    document.getElementById("new_firstName").value = "";
    document.getElementById("new_lastName").value = "";
    document.getElementById('new_downPayment').value = "";
    document.getElementById('new_areaOfInterest').value = "";
    document.getElementById('new_note').value = "";

  }

  
//To show current 
// document.getElementById("time").onload = function timeShow() {timeShow()};a

// function timeShow() {
//   var x = new Date(document.lastModified);
//   document.getElementById("time").innerHTML = x;
// }



// Client js 

function add_row(no) {
    var new_firstName = document.getElementById("new_firstName")
    var new_lastName = document.getElementById("new_lastName")
    var new_budget = document.getElementById("new_budget")
    var new_downPayment = document.getElementById('new_downPayment')
    var new_areaOfInterest = document.getElementById("new_areaOfInterest")
    var new_note = document.getElementById("new_note ")

    var table = document.getElementById("tableInfo");
    var table_len = (table.rows.length);
    var row = table.insertRow(table_len).outerHTML =
      "<tr id='row" + table_len + "'><td id='firstName_row" + table_len + "'>" + new_firstName + "</td><td id='lastName_row" + table_len + "'>" + new_lastName + "</td><td id='budget_row" + table_len + "'>" + new_budget + "</td><td id='downpayment_row" + table_len + "'>" + new_downPayment + "</td><td id='areaOfInterest_row" + table_len + "'>" + new_areaOfInterest + "</td><td id='note_row" + table_len + "'>" + new_note + "</td><td><input type='button' value= 'Edit' class='btn btn-primary'  onclick='edit_row(" + table_len + ")'> <input type='button' ' value='Save' class='btn btn-primary' onclick='save_row(" + table_len + ")'> <input type='button' value='Delete' class='btn btn-secondary' onclick='delete_row(" + table_len + ")'></td></tr>";



    document.getElementById("new_firstName").value = "";
    document.getElementById("new_lastName").value = "";
    document.getElementById('new_downPayment').value = "";
    document.getElementById('new_areaOfInterest').value = "";
    document.getElementById('new_note').value = "";

  }

  function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("infoTable");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;

      // loop through all table rows except headers
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementByTagName("TD")[0];
        y = rows[i + 1].getElementByTagName("TD")[0];

        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
