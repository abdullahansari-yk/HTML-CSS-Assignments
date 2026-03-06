const container = document.querySelector("#container");
const buttons = document.querySelectorAll(".colorButton");
const addBtn = document.querySelector("#add");
const controlPanel = document.querySelector("#colorPanel");

controlPanel.addEventListener("click", (e) => {
  if (e.target.classList.contains("colorButton")) {
    container.style.backgroundColor = e.target.id;
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    container.style.backgroundColor = e.target.id;
  });
});

addBtn.addEventListener("click", (e) => {
  //creatng input to get the button(color) name.
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.classList.add("inputfield");
  controlPanel.appendChild(inputField);

  // button will created once user done typing name and hit enter.
  inputField.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      console.log(e.target.value);

      const div = document.createElement("div");
      div.classList.add("colorButton");
      div.id = e.target.value;
      div.textContent =
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
      div.style.backgroundColor = e.target.value;

      div.addEventListener("click", (e) => {
        container.style.backgroundColor = e.target.id;
      });
      controlPanel.appendChild(div);

      // this will remove the inputfiled
      controlPanel.removeChild(inputField);
    }
  });
});
