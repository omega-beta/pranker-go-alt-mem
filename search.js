function open(ele) {
  if (event.keyCode === 13) {
    window.open(ele.value, "_blank");
  } else {
    alert(ele.value + "was not found.");
  }
}
