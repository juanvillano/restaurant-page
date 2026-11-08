import "./styles.css";
import homePage from "./home.js";
import menuPage from "./menu.js";
import contactPage from "./contact.js";

const homeTab = document.querySelector('#home');
const menuTab = document.querySelector('#menu');
const contactTab = document.querySelector('#contact');

const mainContainer = document.querySelector('#content');


homeTab.addEventListener('click', (e) => {
    e.preventDefault();

    mainContainer.replaceChildren();
    mainContainer.append(homePage());

});

menuTab.addEventListener('click', (e) => {
    e.preventDefault();

    mainContainer.replaceChildren()
    mainContainer.append(menuPage());
});

contactTab.addEventListener('click', (e) => {
    e.preventDefault();

    mainContainer.replaceChildren()
    mainContainer.append(contactPage());
});

mainContainer.append(homePage());

