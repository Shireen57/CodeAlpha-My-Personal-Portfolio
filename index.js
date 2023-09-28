const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility)
//another auto typing
var i = 0;
var txt = 'Hi! i am shireen Ansari.I am currently enrolled in Bachelor of Computer Science from Quaid-e-awam university of engineering science and technology nawabshah. Currently I am learning about the web development and designing and related frameworks including laravel react etc . This website is designed by me using pure HTML,CSS Javascript. I want to become a full stack web developer.I loved to learn new technologies that helps me to enhance my skills.';
var speed = 40;

// Function to automatically start typing when the page loads
function autoTypeWriter() {
    if (i < txt.length) {
        document.getElementById("typing-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(autoTypeWriter, speed);
    }
}

// Call the autoTypeWriter function when the document is ready
document.addEventListener("DOMContentLoaded", autoTypeWriter);
//another auto type
var j = 0;
var txt2 = 'Hi I am!';
var speed2 = 70;

// Function to automatically start typing when the page loads
function autoTypeWriter2() {
    if (j < txt2.length) {
        document.getElementById("hello").innerHTML += txt2.charAt(j);
        j++;
        setTimeout(autoTypeWriter2, speed);
    }
}

// Call the autoTypeWriter function when the document is ready
document.addEventListener("DOMContentLoaded", autoTypeWriter2);
//another 
var k = 0;
var txt3 = 'Shireen Ansari!';
var speed3 = 60;

// Function to automatically start typing when the page loads
function autoTypeWriter3() {
    if (k < txt3.length) {
        document.getElementById("name").innerHTML += txt3.charAt(k);
        k++;
        setTimeout(autoTypeWriter3, speed);
    }
}

// Call the autoTypeWriter function when the document is ready
document.addEventListener("DOMContentLoaded", autoTypeWriter3);
//another