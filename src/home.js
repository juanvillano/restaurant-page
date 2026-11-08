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

const heroCTA = document.createElement('button');
heroCTA.textContent = 'Ver el menú';

export default function homePage() {
    const homeWrapper = document.createElement('section');
    homeWrapper.id = "home-content";
    homeWrapper.append(tagline, heroTitle, heroDescription, heroCTA);
    return homeWrapper;
};