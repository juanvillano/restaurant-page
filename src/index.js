import "./styles.css";
import homePage from "./home.js";
import menuPage from "./menu.js";
import contactPage from "./contact.js";

const homeTab = document.querySelector('#home');
const menuTab = document.querySelector('#menu');
const contactTab = document.querySelector('#contact');

const mainContainer = document.querySelector('#content');

homeTab.classList.add('active');


function showMenu() {
    mainContainer.replaceChildren(menuPage());

    menuTab.classList.add('active');

    homeTab.classList.remove('active');
    contactTab.classList.remove('active');
}

homeTab.addEventListener('click', (e) => {

    mainContainer.replaceChildren(homePage(showMenu));

    homeTab.classList.add('active');

    menuTab.classList.remove('active');
    contactTab.classList.remove('active')

});

menuTab.addEventListener('click', (e) => {
    showMenu();
});

contactTab.addEventListener('click', (e) => {

    mainContainer.replaceChildren(contactPage());

    contactTab.classList.add('active');

    menuTab.classList.remove('active');
    homeTab.classList.remove('active')
});


mainContainer.append(homePage(showMenu));

