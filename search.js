var results = document.getElementById("result");
var display = document.getElementById("display-result");
$(document).on("keypress", "input", function(e){
  if(e.which == 13){
      var inputVal = $(this).val();
        results.toggle.classList("results-valid");
        display.innerHTML = searchup.value;
        alert("Search success!");
      }
  });
