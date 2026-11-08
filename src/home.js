import imageSrc from "../assets/homemade-food.avif";

const tagline = document.createElement('p');
tagline.classList.add('home-tagline');
tagline.textContent = 'Somos Sazón Casera';

const heroTitle = document.createElement('h1');
heroTitle.classList.add('home-title');
heroTitle.textContent = 'Comida de casa para todos';

// const heroImage = document.createElement('img');
// heroImage.src = imageSrc;
// heroImage.alt = 'Home made food';

const heroDescription = document.createElement('p');
heroDescription.textContent = 'Recetas de familia, ingredientes frescos y una mesa donde grandes y chicos se sienten en casa.';


export default function homePage(showMenu) {
    const homeWrapper = document.createElement('section');
    homeWrapper.id = "home-content";
    const heroCTA = document.createElement('button');
    heroCTA.textContent = 'Ver el menú';
    heroCTA.addEventListener('click', showMenu);
    homeWrapper.append(tagline, heroTitle, heroDescription, heroCTA);
    return homeWrapper;
};