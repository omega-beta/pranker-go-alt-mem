var searchup = document.getElementsByName("search");
var results = document.getElementById("result");
var display = document.getElementById("display-result");
if (searchup.length > 0) {
  results.toggle.classList("results-valid");
  display.innerHTML = searchup.value;
}
