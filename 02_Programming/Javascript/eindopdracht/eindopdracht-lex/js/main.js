//*  CLOCK

setInterval(setClock, 1000);

const hourHand = document.querySelector(`.clock__face--hour`);
const minuteHand = document.querySelector(`.clock__face--minute`);
const secondHand = document.querySelector(`.clock__face--second`);

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(hourHand, hoursRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(secondHand, secondsRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty(`--rotation`, rotationRatio * 360);
}

setClock();

//* CAROUSEL

const items = document.querySelectorAll(`.carousel .carousel__item`);
const dots = document.querySelectorAll(`.carousel__indicators li`);
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;
}

function nextItem(n) {
  hideItem(`to-left`);
  changeCurrentItem(n + 1);
  showItem(`from-right`);
}

function previousItem(n) {
  hideItem(`to-right`);
  changeCurrentItem(n - 1);
  showItem(`from-left`);
}

function goToItem(n) {
  if (n < currentItem) {
    hideItem(`to-right`);
    currentItem = n;
    showItem(`from-left`);
  } else {
    hideItem(`to-left`);
    currentItem = n;
    showItem(`from-right`);
  }
}

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  dots[currentItem].classList.remove(`active`);
  items[currentItem].addEventListener(`animationend`, function () {
    this.classList.remove(`active`, direction);
  });
}

function showItem(direction) {
  items[currentItem].classList.add(`next`, direction);
  dots[currentItem].classList.add(`active`);
  items[currentItem].addEventListener(`animationend`, function () {
    this.classList.remove(`next`, direction);
    this.classList.add(`active`);
    isEnabled = true;
  });
}

document
  .querySelector(`.carousel__control--left`)
  .addEventListener(`click`, function () {
    if (isEnabled) {
      previousItem(currentItem);
    }
  });

document
  .querySelector(`.carousel__control--right`)
  .addEventListener(`click`, function () {
    if (isEnabled) {
      nextItem(currentItem);
    }
  });

document
  .querySelector(`.carousel__indicators`)
  .addEventListener(`click`, function (e) {
    const target = [].slice
      .call(e.target.parentNode.children)
      .indexOf(e.target);
    if (target !== currentItem && target < dots.length) {
      goToItem(target);
    }
  });


// * SEARCH-BAR

const searchInput = document.querySelector(`#searchInput`);

// Voeg zoekterm toe aan array
function searchSubmit() {
  searchStorage.push(searchInput.value);
  localStorage.setItem(`searchTerms`, JSON.stringify(searchStorage));
}

let searchStorage = localStorage.getItem(`searchTerms`)
  ? JSON.parse(localStorage.getItem(`searchTerms`))
  : [];

// Verwijder duplicates uit array
function removeDuplicatesInStorage(searchStorage) {
  let tmp = [];
  for (let i = 0; i < searchStorage.length; i++) {
    if (tmp.indexOf(searchStorage[i]) == -1) {
      tmp.push(searchStorage[i]);
    }
  }
  return tmp;
}

// Sla nieuwe array op in een variabele
let filteredStorage = removeDuplicatesInStorage(searchStorage);
console.log(filteredStorage);

// Autocomplete functie
function autocompleteSearch(inp, arr) {
  let currentFocus;
  // Functie wanneer gebruiker begint te typen
  inp.addEventListener("input", function (e) {
    let a,
      b,
      i,
      val = this.value;
    //  Begin met gesloten autocomplete-lijst
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    // Div voor de autocomplete-lijst
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    // Voeg de div toe aan de input
    this.parentNode.appendChild(a);
    // Loop door elk item in de array
    for (i = 0; i < arr.length; i++) {
      // Check of de input matched met de zoekterm
      if (arr[i].toUpperCase().indexOf(val.toUpperCase()) != -1) {
        //  Zoja creeer een div element voor elke match
        b = document.createElement("DIV");
        let pos = arr[i].toUpperCase().indexOf(val.toUpperCase()),
          str1 = arr[i].substring(pos, pos + val.length);
        // Toon matches in de lijst
        b.innerHTML = arr[i].replace(str1, "<strong>" + str1 + "</strong>");
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        //  Functie wanneer gebruiker de suggestie selecteert
        b.addEventListener("click", function (e) {
          // Voeg selectie toe aan input
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });

  // Functionaliteit voor toetsenbord
  inp.addEventListener(`keydown`, function (e) {
    let x = document.getElementById(this.id + `autocomplete-list`);
    if (x) x = x.getElementsByTagName(`div`);
    if (e.keyCode == 40) {
      //  Arrow down key verandert de focus naar beneden en toont de 'active'-opmaak (blauw)
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      // Arrow up key
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      //  Voorkom dat enter-key de selectie automatisch verstuurd
      e.preventDefault();
      if (currentFocus > -1) {
        // Selecteert de geselecteerde suggestie
        if (x) x[currentFocus].click();
      }
    }
  });

  // Functie voor toevoegen active-class aan autocomplete item
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    x[currentFocus].classList.add(`autocomplete-active`);
  }

  //  Functie voor verwijderen van active-class bij alle items
  function removeActive(x) {
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove(`autocomplete-active`);
    }
  }

  // Functie voor sluiten autocomplete-lijst
  function closeAllLists(elmnt) {
    let x = document.getElementsByClassName(`autocomplete-items`);
    for (let i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  // Klik ergens in het scherm om de lijst te sluiten
  document.addEventListener(`click`, function (e) {
    closeAllLists(e.target);
  });
}

// Reset functie
function clearStorage() {
  localStorage.clear();
}

autocompleteSearch(document.querySelector(`#searchInput`), filteredStorage);
