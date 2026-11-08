function createInfoBlock(tagline, copy) {
    const containerSection = document.createElement("section");
    containerSection.classList.add('contact-item');
    const sectionTagline = document.createElement("span");
    sectionTagline.textContent = tagline;
    const sectionCopy = document.createElement("p");
    sectionCopy.textContent = copy;

    containerSection.append(sectionTagline, sectionCopy);

    return containerSection;
}

export default function contactPage() {
    const contactWrapper = document.createElement("div");
    contactWrapper.id = "contact-content";

    const contactTagline = document.createElement("span");
    contactTagline.textContent = "contacto";
    contactTagline.classList.add('contact-tagline');

    const contactHeadline = document.createElement('h1');
    contactHeadline.textContent = "Sazón Casera";
    contactHeadline.classList.add('contact-title');

    const contactDescription = document.createElement("p");
    contactDescription.textContent = "Escríbenos para reservar, hacer un pedido para celebraciones o resolver cualquier duda.";
    contactDescription.classList.add('contact-description');


    contactWrapper.append(contactTagline, contactHeadline, contactDescription, createInfoBlock("Horario", "Lun - Vie | 12-11 PM "), createInfoBlock("Dirección", "C. Casimiro de Moya, Santo Domingo, Rep. Dom."), createInfoBlock("Teléfono / WhatsApp", "(809) 234-4567"), createInfoBlock("Correo", "info@sazoncasera.com"));

    return contactWrapper;
}
