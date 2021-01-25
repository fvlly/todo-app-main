// handling input-field

const inputField = document.querySelector(".input-field");
const listContainer = document.querySelector(".list-items");

inputField.addEventListener("keydown", (e) => {
  const itemsContainer = document.createElement("div");
  const checkBox = document.createElement("span");
  const listItem = document.createElement("p");
  const clearButton = document.createElement("span");

  if (inputField.value.trim() && e.keyCode === 13) {
    console.log(inputField.value);
    checkBox.className = "checkbox";
    itemsContainer.classList.add("item-container");
    itemsContainer.appendChild(checkBox);
    itemsContainer.appendChild(listItem);
    itemsContainer.appendChild(clearButton);

    listItem.append(inputField.value);
    clearButton.append("X");
    clearButton.classList.add("clear");
    listContainer.appendChild(itemsContainer);
    countItems();
  }

  // line thorugh list items
  checkBox.addEventListener("click", () => {
    checkBox.classList.toggle("checked");
    countItems();
  });

  //   Delete list items
  clearButton.addEventListener("click", (e) => {
    e.target.parentElement.remove();
    countItems();
  });
});

// Handling the background-change
const toggleBackground = document.querySelector(".material-icons");

toggleBackground.addEventListener("click", () => {
  const darkTheme = document.querySelectorAll(".dark-theme");
  const lightTheme = document.querySelectorAll(".light-theme");
  const filterSection = document.querySelector(".space");
  console.log(darkTheme);
  if (
    toggleBackground.innerText === "brightness_7"
    // darkTheme.forEach((element) => element.classList.contains("dark-theme")
  ) {
    toggleBackground.innerText = "brightness_3";
    filterSection.style.background = "#f0f0f0";
    darkTheme.forEach((element) => {
      element.classList.toggle("light-theme");
    });
  } else {
    toggleBackground.innerText = "brightness_7";
    filterSection.style.background = "hsl(235, 21%, 11%)";
    lightTheme.forEach((element) => {
      element.classList.toggle("dark-theme");
    });
  }
});

// count list items
function countItems() {
  let counter = listContainer.childElementCount;
  let checkedList = document.querySelectorAll(".checked").length;

  itemsCounter.innerHTML = `${counter - checkedList} items left`;
}

// Handling item filter

const itemsCounter = document.querySelector(".items-counter");
const filterAll = document.querySelector(".filter-all");
const filterActive = document.querySelector(".filter-active");
const filterCompleted = document.querySelector(".filter-completed");
const clearItems = document.querySelector(".clear-items");

// display all list items
filterAll.addEventListener("click", () => {
  document
    .querySelectorAll(".checkbox")
    .forEach((item) => (item.parentElement.style.display = "flex"));
});

// display checked items
filterCompleted.addEventListener("click", () => {
  document.querySelectorAll(".checked").forEach((item) => {
    item.parentElement.style.display = "flex";
  });
  document.querySelectorAll(".checkbox:not(.checked)").forEach((item) => {
    item.parentElement.style.display = "none";
  });
});

// display unchecked items
filterActive.addEventListener("click", () => {
  document
    .querySelectorAll(".checked")
    .forEach((item) => (item.parentElement.style.display = "none"));

  document.querySelectorAll(".checkbox:not(.checked)").forEach((item) => {
    item.parentElement.style.display = "flex";
  });
});

// erase completed list items
clearItems.addEventListener("click", () => {
  document.querySelectorAll(".checked").forEach((item) => {
    item.parentElement.remove();
  });
});
