const header = document.getElementById('header');
const logo = document.getElementById('logo');
const navItems = document.querySelector('nav ul').childNodes;
const main = document.querySelector('main');
const prof = document.getElementById('prof-pic');
const email = document.getElementById('email');
const footer = document.querySelector('footer');
const footerText = document.querySelector('footer p');

var navElements = [];

for (var i = 0; i<navItems.length; i++) {
  if (navItems[i].nodeType === Node.ELEMENT_NODE) {
    navElements.push(navItems[i].firstChild);
  }
}

var mode = "cool"

function changeMode() {
  if (mode === "cool") {
    mode = "warm";
    header.style.backgroundColor = "#7f0000";
    header.style.borderBottom = "3px solid #fbc02d";
    logo.style.color = "#fbc02d";
    for (var i = 0; i<navElements.length; i++) {
      navElements[i].style.color = "#fbc02d";
    }
    main.style.backgroundColor = "#b71c1c";
    prof.style.border = "4px solid #fbc02d";
    email.style.backgroundColor = "#fbc02d";
    footer.style.backgroundColor = "#f05545";

  } else {
    mode = "cool";
    header.style.backgroundColor = "#002171";
    header.style.borderBottom = "3px solid #a5d6a7";
    logo.style.color = "#a5d6a7";
    for (var i = 0; i<navElements.length; i++) {
        navElements[i].style.color = "#a5d6a7";
    }
    main.style.backgroundColor = "#0d47a1";
    prof.style.border = "4px solid #a5d6a7";
    email.style.backgroundColor = "#a5d6a7";
    footer.style.backgroundColor = "#5472d3";
  }
}

prof.addEventListener("click", changeMode)

logo.addEventListener("mouseenter", e => {
  logo.style.textShadow = "0px 0px 5px #aaa";
  if (mode === "cool") {
    logo.style.color = "#d7ffd9";
  } else {
    logo.style.color = "#fff263";
  }
})

logo.addEventListener("mouseleave", e => {
  logo.style.textShadow = "none";
  if (mode === "cool") {
    logo.style.color = "#a5d6a7";
  } else {
    logo.style.color = "#fbc02d";
  }
})

navElements.forEach(el => {
  el.addEventListener("mouseenter", e => {
    if (mode === "cool") {
      el.style.color = "#75a478";
    } else {
      el.style.color = "#c49000";
    }
  })

  el.addEventListener("mouseleave", e => {
    if (mode === "cool") {
      el.style.color = "#a5d6a7";
    } else {
      el.style.color = "#fbc02d";
    }
  })
})

email.addEventListener("mouseenter", e => {
  if (mode === "cool") {
    email.style.backgroundColor = "#75a478";
  } else {
    email.style.backgroundColor = "#c49000";
  }
})

email.addEventListener("mouseleave", e => {
  if (mode === "cool") {
    email.style.backgroundColor = "#a5d6a7";
  } else {
    email.style.backgroundColor = "#fbc02d";
  }
})

footer.addEventListener("mouseenter", e => {
    footerText.innerHTML = "Made with &#127774;, &#127958, and &#10084 in Oxnard, CA.";
})

footer.addEventListener("mouseleave", e => {
  footerText.innerHTML = "Made with sun, sand, and love in Oxnard, CA.";
})
