const btns = document.querySelectorAll(".AddBtn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(e.target);

    //  when user click on add btn

    // create label and input for todo name
    // const label = document.createElement("label");
    // label.innerText = "Todo name :";
    const input1 = document.createElement("input");
    input1.type = "text";
    input1.id = "input1";
    input1.placeholder = "Todo Name";

    // const div = document.createElement("div");
    // div.id = "takingInput1";
    // div.append(label, input);

    // create label and input for todo description
    // const label2 = document.createElement("label");
    // label2.innerText = "Todo description :";
    const input2 = document.createElement("input");
    input2.type = "text";
    input2.id = "input2";
    input2.placeholder = "Todo description";

    const div = document.createElement("div");
    div.id = "takingInputs";
    div.append(input1, input2);

    // append
    const btnParent = btn.parentElement;
    btnParent.append(div);
    console.log(btnParent);

    // taking input values to make new card

    const inputField = document.querySelector("#input1");
    // console.log(inputField.value);

    // adding listerner on inputField
    inputField.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        console.log(e.target.value);

        // where to render the card element? to its respective parent
        if (btnParent.id == "inProgress") {

          
          // create title div
          // const title = document.createElement("div");
          // title.innerHTML = e.target.value;
          // title.classList.add("title");
          // // console.log("Yes");
          // const card = document.createElement("div");
          // card.classList.add("card");
          // card.appendChild(title);
          // // card.appendChild(title);
          // const cards = document.querySelector(".inProgressCards");
          // cards.appendChild(card);
        }

        // remove the inputField
        inputField.parentElement.removeChild(inputField);
      }
    });

    // const inputField2 = document.querySelector("#input2");
    // console.log(inputField2.value);
    // inputField2.addEventListener("keydown", (e) => {
    //   if (e.key == "Enter") {
    //     console.log(e.target.value);

    //     if (btnParent.id == "inProgress") {
    //       // create description element
    //       const description = document.createElement("div");
    //       description.innerHTML = e.target.value;
    //       description.classList.add("description");
    //       // create card to put dec element inside it.

    //       // const card = document.querySelector(".card");

    //       const card = document.createElement("div");
    //       card.classList.add("description");
    //       card.appendChild(description);
    //       //
    //       const cards = document.querySelector(".inProgressCards");
    //       cards.appendChild(card);
    //     }

    //     // remove the inputField
    //     inputField2.parentElement.removeChild(inputField2);
    //   }
    // });
  });
});
