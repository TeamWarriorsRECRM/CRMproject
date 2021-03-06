async function getList() {
  const clients = await fetch("/api/database")
    .then((res) => res.json())
    .catch((err) => console.log(err));
  console.log(clients);
  document.querySelector("#tableRows").innerHTML = "";

  // console.log(clients, "  LIST FROM SCRIPT");

  clients.forEach((el) => {
    // console.log(el.firstname);
    document.querySelector("#tableRows").innerHTML += `
      <tr id="row${el.id}">
      <td id="firstName_row${el.id}">${el.firstname}</td>
      <td id="lastName_row${el.id}">${el.lastname}</td>
      <td id="budget_row${el.id}">${el.totalbudget}</td>
      <td id="downpayment_row${el.id}">${el.downpayment}</td>
      <td id="areaOfInterest_row${el.id}">${el.area}</td>
      <td id="email_row${el.id}">${el.email}</td>
      <td id="status_row${el.id}">${el._status}</td>
      <td id="note_row${el.id}">${el.note}</td>
      <td>
        <input type="button" id="edit_button${el.id}" value="Edit" class="btn btn-primary" onclick="edit_row(${el.id})">
        <input type="button" id="save_button${el.id}" value="Save" class="disappear btn btn-primary" onclick="save_row(${el.id})">
        <input type="button" id="delete_button${el.id}" value="Delete" class="btn btn-secondary" onclick="delete_row(${el.id})">
      </td>
    </tr>
      `;
  });
}
getList();
