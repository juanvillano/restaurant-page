import polloGuisado from "../assets/pollo-guisado.avif";
import sancocho from "../assets/sancocho.avif";
import pescado from "../assets/pescado-tostones.avif";

const dishes = [
    { name: "Pollo guisado", description: "Con arroz blanco, habichuelas y ensalada fresca.", price: 8.99, image: polloGuisado },
    { name: "Sancocho del domingo", description: "Siete carnes, víveres y aguacate, como en casa.", price: 15.99, image: sancocho },
    { name: "Pescado frito con tostones", description: "Pescado del día, tostones crujientes y ensalada.", price: 10.99, image: pescado },
];

const menuTitle = document.createElement('h1');
menuTitle.textContent = "Los favoritos de la casa";
menuTitle.classList.add("menu-title");

function createMenuItem(dish) {
    const menuItem = document.createElement('article');

    const menuItemPic = document.createElement('img');
    menuItemPic.src = dish.image;
    menuItemPic.alt = dish.description;

    const menuItemTitle = document.createElement('h2');
    menuItemTitle.textContent = dish.name;

    const menuItemPrice = document.createElement('span');
    menuItemPrice.textContent = `$${dish.price.toFixed(2)}`;

    const menuItemDes = document.createElement('p');
    menuItemDes.textContent = dish.description;

    menuItem.append(menuItemPic, menuItemTitle, menuItemDes, menuItemPrice);

    return menuItem;
}


export default function menuPage() {
    const menuWrapper = document.createElement('section');
    menuWrapper.id = "menu-content";

    const itemsContainer = document.createElement('div');
    itemsContainer.classList.add('menu-list');

    for (const dish of dishes) {
        itemsContainer.append(createMenuItem(dish));
    }

    menuWrapper.append(menuTitle, itemsContainer);

    return menuWrapper;
}