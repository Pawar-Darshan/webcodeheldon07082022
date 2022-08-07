//Adding Web Page Icon (favicon)
let webPageIcon = document.createElement("link");
webPageIcon.setAttribute("rel", "Web Page Icon");
webPageIcon.setAttribute("href", "favicon.png");
webPageIcon.setAttribute("type", "image/png");
document.head.appendChild(webPageIcon);

//Adding title to the Web Page Title
let webPageTitle = document.createElement("title");
webPageTitle.innerText = "Pokemon API";
document.head.appendChild(webPageTitle);

//Adding Title
let pageTitle = document.createElement("h1");
pageTitle.innerText = "Pokemon API";
document.body.appendChild(pageTitle);

//Adding image to the page
let pokImage = document.createElement("img");
pokImage.setAttribute("class", "pokemonImage");
pokImage.setAttribute("src", "Pokemon.jpg");
pokImage.setAttribute("alt", "Its a Pokemon");
document.body.appendChild(pokImage);

//Adding Section for Search and Pokemon Info
let pokInfoSection = document.createElement("section");
pokInfoSection.setAttribute("id", "pokInfoSection");
pokInfoSection.setAttribute("class", "pokInfoSection");
document.body.appendChild(pokInfoSection);

//Adding div in pokInfoSection for search option
let divSearch = document.createElement("div");
divSearch.setAttribute("class", "searchBox");
pokInfoSection.append(divSearch);

//Adding search input
let inputSearch = document.createElement("input");
inputSearch.setAttribute("id", "pokemonName");
inputSearch.setAttribute("type", "text");
inputSearch.setAttribute("placeholder", "Pokemon Name ex. Ditto");
divSearch.appendChild(inputSearch);

//Adding search button
let buttonSearch = document.createElement("button");
buttonSearch.setAttribute("id", "search");
let buttonText = document.createTextNode("🔍");
buttonSearch.appendChild(buttonText);
divSearch.appendChild(buttonSearch);

//Addign div for pokemon image and info
let divInfo = document.createElement("div");
divInfo.setAttribute("class", "pokemonBox");
pokInfoSection.append(divInfo);

document.querySelector("#search").addEventListener("click", getPokemon);

// //Adding for Pagination and List of Items
// //Adding Section for Search and Pokemon Info
// let paginationListSection = document.createElement("section");
// paginationListSection.setAttribute("id", "paginationListSection");
// paginationListSection.setAttribute("class", "paginationListSection");
// document.body.appendChild(paginationListSection);

// //h2 in paginationListSection
// let pokh2 = document.createElement("h2");
// pokh2.setAttribute("id", "Pokh2");
// pokh2.innerText = "Pokemon List";
// paginationListSection.appendChild(pokh2);

// //div for list in paginationListSection
// let listDiv = document.createElement("div");
// listDiv.setAttribute("id", "list");
// listDiv.setAttribute("class", "list");
// paginationListSection.appendChild(listDiv);

// //div for pagenumbers
// let pagenumberDiv = document.createElement("div");
// pagenumberDiv.setAttribute("id", "pagination");
// pagenumberDiv.setAttribute("class", "pagenumbers");
// paginationListSection.appendChild(pagenumberDiv);

//Actual Functioning
function capitelizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}
function getPokemon(e) {
  const name = document.querySelector("#pokemonName").value;
  const pokemonName = lowerCaseName(name);
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((responce) => responce.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".pokemonBox").innerHTML = `
    <div>
        <img id="mainImage" src="${
          data.sprites.other["official-artwork"].front_default
        }" alt="${capitelizeFirstLetter(data.name)}">
    </div>
    <div class="pokemonInfo">
        <h2>${capitelizeFirstLetter(data.name)}</h2>
        <p><b>Ability:</b> ${data.abilities[0].ability.name}</p>
        <p><b>Moves:</b> ${data.moves[0].move.name}</p>
        <p><b>Weight:</b> ${data.weight}</p>
    </div>
      `;
    })
    .catch((err) => {
      console.log("Pokemon not found", err);
    });

  e.preventDefault();
}

// //List and pagination table code

// //api url:
// const api_url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

// //Defining async function

// async function getDataFromApi(url) {
//   try {
//     //stroing responce
//     const response = await fetch(url);

//     //Stroing data in the form of JSON

//     var list_items = await response.json();
//     console.log(list_items);
//     if (response) {
//       DisplayList(list_items, list_element, rows, current_page);
//       SetupPagination(list_items, pagination_element, rows);
//     } else {
//       response.status;
//     }
//   } catch (error) {
//     alert(`Error: ${error}`);
//   }
// }

// //Calling that async function
// getDataFromApi(api_url)
//   .then(() => {
//     console.log("Successfully Fetched Data");
//   })
//   .catch((error) => {
//     console.log(error.status);
//   })
//   .finally(() => {
//     console.log("Function Ran Successfully");
//   });

// const list_element = document.getElementById("list");
// const pagination_element = document.getElementById("pagination");

// let current_page = 1;
// let rows = 5;

// function DisplayList(items, wrapper, rows_per_page, page) {
//   wrapper.innerHTML = "";
//   page--;

//   let start = rows_per_page * page;
//   let end = start + rows_per_page;
//   let paginatedItems = items.slice(start, end);

//   for (let i = 0; i < paginatedItems.length; i++) {
//     let item = paginatedItems[i];

//     let item_element = document.createElement("div");
//     item_element.classList.add("item");
//     item_element.innerText = `Name: ${item.name}`;

//     wrapper.appendChild(item_element);
//   }
// }

// function SetupPagination(items, wrapper, rows_per_page) {
//   wrapper.innerHTML = "";

//   let page_count = Math.ceil(items.length / rows_per_page);
//   for (let i = 1; i < page_count + 1; i++) {
//     let btn = PaginationButton(i, items);
//     wrapper.appendChild(btn);
//   }
// }

// function PaginationButton(page, items) {
//   let button = document.createElement("button");
//   button.innerText = page;

//   if (current_page == page) button.classList.add("active");

//   button.addEventListener("click", function () {
//     current_page = page;
//     DisplayList(items, list_element, rows, current_page);

//     let current_btn = document.querySelector(".pagenumbers button.active");
//     current_btn.classList.remove("active");

//     button.classList.add("active");
//   });

//   return button;
// }
