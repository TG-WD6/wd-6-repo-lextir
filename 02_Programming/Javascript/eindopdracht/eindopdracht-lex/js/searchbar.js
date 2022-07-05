
function saveData() {
  let searchInput = document.getElementById("searchbar__input").value;
  localStorage.setItem("searchbar__input", searchInput);
}
function loadData() {
  let searchInput = localStorage.getItem("searchbar__input");
  document.getElementById("searchbar__input").value = searchInput;
}

