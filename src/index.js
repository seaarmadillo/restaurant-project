import "./styles.css";
import { loadInitialPage, loadMenuSection, loadAboutPage, loadHomePage } from "./pageLoad.js";

// Load the initial page
loadInitialPage();

// Add event listeners to buttons
document.getElementById("home").addEventListener("click", loadHomePage);
document.getElementById("menu").addEventListener("click", loadMenuSection);
document.getElementById("about").addEventListener("click", loadAboutPage);