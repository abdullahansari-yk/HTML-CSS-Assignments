const cards = document.querySelector("#cards");
// first get the number from the input field
const input = document.querySelector("#numberOfCards");

// second get the selected category
const type = document.querySelector("#category");

const button = document.querySelector("button");
button.addEventListener("click", () => {
  cards.innerHTML = "";
  const numberOfCards = input.value;
  const typeValue = type.value;

  fetch(`https://pokeapi.co/api/v2/type/${typeValue}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      const pokemonArray = data.pokemon; // pokemondata contains pokemon array with that same category.
      // console.log(pokemonArray);

      const selectedPokemon = pokemonArray.slice(0, numberOfCards);
      // console.log(selectedPokemon);

      selectedPokemon.forEach((item) => {
        fetch(item.pokemon.url)
          .then((response) => response.json())
          .then((pokeomData) => {
            // console.log(pokeomData.name);
            // console.log(pokeomData.height);
            // console.log(pokeomData.weight);

            // name field
            const spanForName = document.createElement("span");
            spanForName.id = "nameSpan";
            spanForName.textContent = pokeomData.name;

            const divForName = document.createElement("div");
            divForName.id = "name";
            divForName.textContent = "Name : ";
            divForName.appendChild(spanForName);

            // type
            const spanForType = document.createElement("span");
            spanForType.id = "typeSpan";
            spanForType.textContent = pokeomData.types[0].type.name;

            const divForType = document.createElement("div");
            divForType.id = "type";
            divForType.textContent = "Type : ";
            divForType.appendChild(spanForType);

            // height
            const spanForheight = document.createElement("span");
            spanForheight.id = "heightSpan";
            spanForheight.textContent = pokeomData.height / 10;

            const divForheight = document.createElement("div");
            divForheight.id = "height";
            divForheight.textContent = "Height (m) : ";
            divForheight.appendChild(spanForheight);

            // weight
            const spanForweight = document.createElement("span");
            spanForweight.id = "weightSpan";
            spanForweight.textContent = pokeomData.weight / 10;

            const divForWeight = document.createElement("div");
            divForWeight.id = "Weight";
            divForWeight.textContent = "Weight (kg) : ";
            divForWeight.appendChild(spanForweight);

            const divFordetail = document.createElement("div");
            divFordetail.id = "detailsOfPokemon";
            divFordetail.append(
              divForName,
              divForType,
              divForheight,
              divForWeight,
            );

            const image = document.createElement("img");
            image.setAttribute(
              "src",
              pokeomData.sprites.other["official-artwork"].front_default,
            );

            const imgPokemon = document.createElement("div");
            imgPokemon.id = "imageOfPokemon";
            imgPokemon.appendChild(image);

            const divForCard = document.createElement("div");
            divForCard.classList.add("card");

            divForCard.append(imgPokemon, divFordetail);

            cards.appendChild(divForCard);
          });
      });
    });
});

// to do .

// data.sprites.front_default => get image
// for types;
// data.types[0].type.name
// or
// data.types.forEach(...) => if pokemon has more than 1 types
// h / 10
// w / 10
// create elements and put all the data over there.
