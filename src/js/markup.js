import dishes from "../menu.json";
import makeTemplate from "../templates/menu-items.hbs";

const markup = makeTemplate(dishes);
const galleryRef = document.querySelector('.js-menu');
galleryRef.insertAdjacentHTML('beforeend', markup);