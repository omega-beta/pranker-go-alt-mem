var results = document.getElementById("result");
var display = document.getElementById("display-result");
$(document).on("keypress", "input", function(e){
  if(e.which == 13){
      var inputVal = $(this).val();
        alert("Search success!");
        results.classList.toggle("results-valid");
        display.innerHTML = searchup.value;
      }
  });
