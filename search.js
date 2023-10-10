var results = document.getElementById("result");
var display = document.getElementById("display-result");
$(document).on("keypress", "input", function(e){
  if(e.which == 13){
      var inputVal = $(this).value;
      results.classList.add("results-valid");
      display.innerHTML = inputVal.value;
  }
});
