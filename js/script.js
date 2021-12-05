const input = document.querySelector("#input");
const addInputs = document.querySelectorAll(".addInput");
const addInputsAction = document.querySelectorAll(".addInputsAction");

addInputs.forEach((addinput) => {
  addinput.addEventListener("click", (e) => {
    input.value += e.target.getAttribute("data-value");
  });
});

addInputsAction.forEach((addinput) => {
  addinput.addEventListener("click", (e) => {
    if (input.value && input.value[0] !== "-") {
      const result = input.value.replace(/\+$|-$|\*$|=$|\/$|\.$/, "");

      input.value = result + e.target.getAttribute("data-value");
    } else if (
      e.target.getAttribute("data-value") === "-" &&
      input.value[input.value.length - 1] !== "-"
    ) {
      input.value += e.target.getAttribute("data-value");
    }
  });
});

function result() {
  if (input.value) {
    input.value = eval(input.value);
  }
}
