function open(ele) {
  if (event.key === "Enter") {
    window.open(ele.value, "_blank");
  } else {
    alert(ele.value + "was not found.");
  }
}
