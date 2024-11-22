var nameOfSite = document.getElementById("siteName");
var urlOfSite = document.getElementById("siteLink");
var websites = [];
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
