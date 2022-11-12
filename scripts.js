var settingmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

// Anytime we click the settings-menu div, add the settings-menu-height, and when we click it again, remove it

function settingsMenuToggle() {
  settingmenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-mode");

  //Recall we are toggling i.e swithching a class

  if (localStorage.getItem("mode") == "light") {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
};

// Localstorage key, value pairs with setitem and getitem

if (localStorage.getItem("mode") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-mode");
} else if (localStorage.getItem("mode") == "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-mode");
} else {
  localStorage.setItem("mode", "light");
}

// The entry point is line 32. It is linked to line 16. Here we set localstorage mode to "light" initially. When the user clicks the dark button,
// 3 things happen
// (1) dark-btn-on class is added
// (2) dark-mode class is added
// (3) local storage is set/updated to a value of dark (line 17)

// When the user clicks again (toggle), 3 things happen again
// (1) dark-btn-on class is removed
// (2) dark-mode class is removed
// (3) local storage is set/updated to a value of light (line 19)

// Now we refresh or come back later (line 25 -30)

// What this means is that, whenever localstorage is returning light, the two dark classes were just removed and now we not use just use toggle but actually use the remove method to remove the dark mode classes and vice versa.
