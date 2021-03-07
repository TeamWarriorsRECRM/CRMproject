// POPULATES QUICKVIEW TAB WITH DATABASE ENTRIES
async function getQuickView() {
  const clients = await fetch("/api/clients")
    .then((res) => res.json())
    .catch((err) => console.log(err));

  document.querySelector("#quickView").innerHTML = "";

  clients.forEach((el) => {
    document.querySelector("#quickView").innerHTML += `
  <tr id="row${el.id}">
        <td  id="firstName_row${el.id}" style="text-align: center;">${el.firstname}</td>
        <td  id="lastName_row${el.id}"style="text-align: center;">${el.lastname}</td>
        <td id="budget_row${el.id}"style="text-align: center;">${el._status}</td>
        <td style="text-align: center;">
          <div class="form-check">
            <label class="btn btn-outline-secondary" for="btnradio3"><a target="_blank" class="fa fa-envelope"
                href="mailto:${el.email}"></a></label>
            </label>
          </div>
        </td>
      </tr>
  `;
  });
}
getQuickView();
