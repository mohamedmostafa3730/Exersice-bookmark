var nameOfSite = document.getElementById("siteName");
var urlOfSite = document.getElementById("siteLink");
var websites = [];
if (localStorage.getItem("sites info") != null) {
  productsList = JSON.parse(localStorage.getItem("sites info"));
  display(productsList);
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
    printList += `<tr>
                <th>${i + 1}</th>
                <th>${arr[i].nameByUser}</th>
                <th>
                  <button class="btn btn-outline-info fw-bold">
                    <i class="fa-solid fa-eye"></i>
                    Visit
                  </button>
                </th>
                <th>
                  <button class="btn btn-outline-danger fw-bold">
                    <i class="fa-solid fa-trash-can"></i>
                    Delete
                  </button>
                </th>
              </tr>
   `;
    sites.innerHTML = printList;
  }
}
