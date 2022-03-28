function addNumbers() {
  var value;
  var result = "";
  const inputBox = document.getElementById("number");

  value = Number(inputBox.value);

  if (inputBox.value !== "") {
    for (var i = 1; i <= 20; i++) {
      result = result + "<p>" + value + " x " + i + " = " + value * i + " </p>";
    }
    inputBox.value = " ";
  }
  document.getElementById("result").innerHTML = result;
}
