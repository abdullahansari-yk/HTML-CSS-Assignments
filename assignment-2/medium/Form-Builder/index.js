/* To do
 1. ADDD listener on btn
 2. take input and label from form.
 3. create label and input field in form preview section and put extracted value here.
 4. display them on preview when click on btn.
 5. reset input and label .
*/
const right = document.querySelector("#right");
const btn = document.querySelector("button");
// console.log(btn);
btn.addEventListener("click", (e) => {
  //   console.log(e.target);

  const select = document.querySelector("select");
  //   console.log(select.value);

  const label = document.querySelector("input");
  //   console.log(label.value);

  // creating label for form preview
  const newlabel = document.createElement("label");
  newlabel.innerText = label.value;
  right.appendChild(newlabel);

  // creating input field for form  preview
  const input = document.createElement("input");
  input.type = select.value;
  right.appendChild(input);

  //   creating preview div
  const div = document.createElement("div");
  div.classList.add("preview");
  right.appendChild(div);

  //   append label and input in div(preview)
  div.appendChild(newlabel);
  div.appendChild(input);

  // reset the input and label
  select.selectedIndex = 0;
  label.value = " ";
});
