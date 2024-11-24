var nameOfSite = document.getElementById("siteName");
var urlOfSite = document.getElementById("siteLink");
var sites = document.getElementById("sites");
var searchOf = document.getElementById("searchOf");
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
    printList += `
    <tr>
        <th>${i + 1}</th>
        <th>${arr[i].nameByUser}</th>
        <th>
            <a
              target="_blank"
              href="${arr[i].url}"
            >
              <button class="btn btn-outline-info fw-bold">
                <i class="fa-solid fa-eye"></i>
                Visit
              </button>
            </a>
        </th>
    <th>
        <button class="btn btn-outline-danger fw-bold" onclick="deleteSite(${i})"
            <i class="fa-solid fa-trash-can"></i>
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
  // console.log("indexToDelete = " + indexToDelete);
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

