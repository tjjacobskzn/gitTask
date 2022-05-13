// adding an event listener on the input element and logging/printing user input.
let input = document.getElementById("input");
input.addEventListener("input", function () {
  console.log(input.value);
});
