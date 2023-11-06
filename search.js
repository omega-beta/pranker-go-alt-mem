function open(ele) {
  if (event.keyCode == 13) {
    window.open("https://omega-beta.github.io", "_blank");
  } else {
    alert(ele.value + "was not found.");
  }
}
