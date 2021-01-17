// handling input-field

const inputField = document.querySelector(".input-field");

inputField.addEventListener("keydown", (e) => {
  const listContainer = document.querySelector(".list-items");
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
  }

  //   Delete list items
  clearButton.addEventListener("click", (e) => {
    e.target.parentElement.remove();
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
    filterSection.style.background = "hsl(0, 0%, 98%)";
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
