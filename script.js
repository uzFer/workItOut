// displaying the mobile menu
const hamburgerMenu = document.querySelector(".navbar__toggle");
const menuLinks = document.querySelector(".navbar__menu");

const mobileMenu = () => {
  menu.classList.toggle("active");
  menuLinks.classList.toggle("active");
};

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  menuLinks.classList.toggle("active");
})

document.querySelectorAll(".navbar__links").forEach(n => n.addEventListener("click", () => {
  hamburgerMenu.classList.remove("active");
  menuLinks.classList.remove("active");
}))

function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-border-red";
}


/*tanuah trying to figure out calculator */
const Q1Dropdown = document.querySelector('.Q1__content');
const Q2Dropdown = document.querySelector('.Q2__content');
const Q3Dropdown = document.querySelector('.Q3__content');
const Q4Dropdown = document.querySelector('.Q4__content');
const Q5Checklist = document.querySelector('.Q5__content');
const submitButton = document.querySelector('.submit__button');
const resultPDF = document.querySelector(".results-description");
// const printQ1 = document.querySelector(".printDis");
Q1Result = sessionStorage.getItem("Q1");
Q2Result = sessionStorage.getItem("Q2");
Q3Result = sessionStorage.getItem("Q3");
Q4Result = sessionStorage.getItem("Q4");
var current = 0;
console.log("yes");
document.getElementById("Q3").style.display = 'none';
document.getElementById("Q4").style.display = 'none';
document.getElementById("Q5").style.display = 'none';
document.getElementById("Q6").style.display = 'none';
document.getElementById("result").style.display = 'none';

const saveCurrentInfo = () => {
  if (current == 0) {
    sessionStorage.setItem("Q1", Q1Dropdown.options[Q1Dropdown.selectedIndex].textContent);
    Q1Result = sessionStorage.getItem("Q1");

    sessionStorage.setItem("Q2", Q2Dropdown.options[Q2Dropdown.selectedIndex].textContent);
    Q2Result = sessionStorage.getItem("Q2");

    document.getElementById("Q1").style.display = 'none';
    document.getElementById("Q2").style.display = 'none';
    if (Q2Result == "Cardio") {
      document.getElementById("Q3").style.display = 'block';
      current = 1;
    }
    else if (Q2Result == "Weightlifting") {
      document.getElementById("Q4").style.display = 'block';
      current = 2;
    }

  }
  //Cardio
  else if (current == 1) {
    sessionStorage.setItem("Q3", Q3Dropdown.options[Q3Dropdown.selectedIndex].textContent);
    Q3Result = sessionStorage.getItem("Q3");
    sessionStorage.setItem("Q4", null);
    Q4Result = null;

    document.getElementById("Q3").style.display = 'none';
    current = 99;

  }
  //Weightlifting
  else if (current == 2) {
    sessionStorage.setItem("Q4", Q4Dropdown.options[Q4Dropdown.selectedIndex].textContent);
    Q4Result = sessionStorage.getItem("Q4");
    sessionStorage.setItem("Q3", null);
    Q3Result = null;

    document.getElementById("Q4").style.display = 'none';

    if (Q4Result == "Upper body") {
      document.getElementById("Q5").style.display = 'block';
      current = 3;
    }
    if (Q4Result == "Lower body") {
      document.getElementById("Q6").style.display = 'block';
      current = 4;
    }
    if (Q4Result == "Full body") {
      document.getElementById("Q5").style.display = 'block';
      document.getElementById("Q6").style.display = 'block';
      current = 5;
    }

  }

  // Upper only
  else if (current == 3) {

    sessionStorage.setItem("Chest", document.getElementById("Chest").checked);
    sessionStorage.setItem("Back", document.getElementById("Back").checked);
    sessionStorage.setItem("Triceps", document.getElementById("Triceps").checked);
    sessionStorage.setItem("Biceps", document.getElementById("Biceps").checked);
    sessionStorage.setItem("Shoulders", document.getElementById("Shoulders").checked);
    sessionStorage.setItem("Quads", false);
    sessionStorage.setItem("Hamstrings", false);
    sessionStorage.setItem("Glutes", false);
    sessionStorage.setItem("Calves", false);
    document.getElementById("Q5").style.display = 'none';
    current = 99;



  }

  //Lower only
  else if (current == 4) {
    sessionStorage.setItem("Chest", false);
    sessionStorage.setItem("Back", false);
    sessionStorage.setItem("Triceps", false);
    sessionStorage.setItem("Biceps", false);
    sessionStorage.setItem("Shoulders", false);
    sessionStorage.setItem("Quads", document.getElementById("Quads").checked);
    sessionStorage.setItem("Hamstrings", document.getElementById("Hamstrings").checked);
    sessionStorage.setItem("Glutes", document.getElementById("Glutes").checked);
    sessionStorage.setItem("Calves", document.getElementById("Calves").checked);
    document.getElementById("Q6").style.display = 'none';
    current = 99;
  }


  //Full Body 
  else if (current == 5) {
    sessionStorage.setItem("Chest", document.getElementById("Chest").checked);
    sessionStorage.setItem("Back", document.getElementById("Back").checked);
    sessionStorage.setItem("Triceps", document.getElementById("Triceps").checked);
    sessionStorage.setItem("Biceps", document.getElementById("Biceps").checked);
    sessionStorage.setItem("Shoulders", document.getElementById("Shoulders").checked);
    sessionStorage.setItem("Quads", document.getElementById("Quads").checked);
    sessionStorage.setItem("Hamstrings", document.getElementById("Hamstrings").checked);
    sessionStorage.setItem("Glutes", document.getElementById("Glutes").checked);
    sessionStorage.setItem("Calves", document.getElementById("Calves").checked);
    document.getElementById("Q5").style.display = 'none';
    document.getElementById("Q6").style.display = 'none';

    current = 99;
  }

  // End, all inputs recieved
  if (current == 99) {

    submitButton.style.display = 'none';
    var pdfName = "";

    if (sessionStorage.getItem("Chest") == "true") {
      console.log("Going in here");
      if (pdfName != "") {
        pdfName += "+"
      }
      pdfName += "Chest";

    }
    if (sessionStorage.getItem("Shoulders") == "true") {
      if (pdfName != "") {
        pdfName += "+"
      }
      pdfName += "Shoulder";
    }
    if (sessionStorage.getItem("Biceps") == "true") {
      if (pdfName != "") {
        pdfName += "+"
      }
      pdfName += "Biceps";
    }
    if (sessionStorage.getItem("Back") == "true") {
      if (pdfName != "") {
        pdfName += "+"
      }
      pdfName += "Back";
    }
    if (sessionStorage.getItem("Triceps") == "true") {
      if (pdfName != "") {
        pdfName += "+"
      }
      pdfName += "Triceps";
    }
    if (sessionStorage.getItem("Glutes") == "true") {
      if (pdfName != "") {
        pdfName += "+"
      }
      pdfName += "Glutes";
    }
    if (sessionStorage.getItem("Hamstrings") == "true") {
      if (pdfName != "") {
        pdfName += "+"
      }
      pdfName += "Hamstrings";
    }
    if (sessionStorage.getItem("Quads") == "true") {
      if (pdfName != "") {
        pdfName += "+"
      }
      pdfName += "Quads";
    }
    if (sessionStorage.getItem("Calves") == "true") {
      if (pdfName != "") {
        pdfName += "+"
      }
      pdfName += "Calves";
    }

    document.getElementById("pdf").src = "PDFS/" + pdfName + ".pdf#toolbar=0";
    document.getElementById("result").style.display = 'block';
  }
}

submitButton.addEventListener('click', saveCurrentInfo)


// if(Q1Result){
//   document.getElementById("printDis").innerHTML = Q1Result;
// }

