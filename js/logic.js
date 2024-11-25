var nameOfSite = document.getElementById("siteName");
var urlOfSite = document.getElementById("siteLink");
var sites = document.getElementById("sites");
var searchOf = document.getElementById("searchOf");
var btnAdd = document.getElementById("Submit");
var btnUpd = document.getElementById("update");
var temp;
var websites = [];
if (localStorage.getItem("sites info") != null) {
  websites = JSON.parse(localStorage.getItem("sites info"));
  display(websites);
}
function setSite() {
  var site = {
    nameByUser: nameOfSite.value,
    url: urlOfSite.value,
  };
  websites.push(site);
  localStorage.setItem("sites info", JSON.stringify(websites));
  clear();
  display(websites);
}

function clear() {
  nameOfSite.value = "";
  urlOfSite.value = "";
}
function display(arr) {
  var printList = ``;
  for (var i = 0; i < arr.length; i++) {
    // index = i;
    printList += `
    <tr>
        <th>${i + 1}</th>
        <th>${arr[i].nameByUser}</th>
        <th>
            <a
              target="_blank"
              href="${arr[i].url}"
            >
              <button class="btn btn-sm btn-outline-info">
                <i class="fa-solid fa-eye"></i>
                Visit
              </button>
            </a>
        </th>
    <th>
        <button
          class="btn btn-sm btn-outline-secondary"
          onclick="setValuesToUpdate(${i})"
        >
          <i class="fa-solid fa-pen-to-square"></i>
          Update
        </button>
      </th>
      <th>
        <button
          class="btn btn-sm btn-outline-danger"
          onclick="deleteSite(${i})"
        >
          <i class="fa-solid fa-trash"></i>
          Delete
        </button>
      </th>
    </tr>
    `;
    rowData.innerHTML = printList;
  }
}
function deleteSite(indexToDelete) {
  websites.splice(indexToDelete, 1);
  localStorage.setItem("sites info", JSON.stringify(websites));
  display(websites);
}

function search() {
  var searchArr = [];
  for (var i = 0; i < websites.length; i++) {
    if (
      websites[i].nameByUser
        .toLowerCase()
        .includes(searchOf.value.toLowerCase())
    ) {
      searchArr.push(websites[i]);
    }
  }
  display(searchArr);
}

function setValuesToUpdate(indexToUpdate) {
  nameOfSite.value = websites[indexToUpdate].nameByUser;
  urlOfSite.value = websites[indexToUpdate].url;
  btnUpd.classList.remove("d-none");
  btnAdd.classList.add("d-none");
  temp = indexToUpdate;
}
function updateItem() {
  websites[temp].nameByUser = nameOfSite.value;
  websites[temp].url = urlOfSite.value;
  localStorage.setItem("sites info", JSON.stringify(websites));
  display(websites);
  clear();
  btnUpd.classList.add("d-none");
  btnAdd.classList.remove("d-none");
}
