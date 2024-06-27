import { ce } from "./home.js";
import adobo from './img/adobo.jpg'
import lechon from './img/lechon.jpg'
import halohalo from './img/halo-halo.jpg'
import sinigang from './img/sinigang.jpg'

export function aboutContent() {
    const div = document.createElement('div');
    div.classList.add('home-content')

    const aboutContent = ce('div');
    aboutContent.classList.add('about-content');

    const h1 = ce('h1');
    h1.textContent = 'About Us';

    const history = ce('p');
    history.textContent = `Founded in 2024 by Maria Santos, Filipino Restaurant brings the authentic flavors of the Philippines to our local community. Inspired by her grandmother's traditional recipes, Maria has created a menu that celebrates the rich culinary heritage of her homeland. From hearty Adobo to savory Sinigang, every dish is prepared with love and the freshest ingredients. Despite our growth, we remain committed to preserving the authenticity of our dishes and providing a warm, welcoming dining experience.`

    const anotherH1 = ce('h1');
    anotherH1.textContent = 'Mission Statement';
    const mission = ce('p');
    mission.textContent = `At Filipino Restaurant, our mission is to offer an exceptional dining experience with authentic Filipino cuisine in a welcoming environment. We strive to honor the rich culinary traditions of the Philippines using authentic recipes and methods, use the freshest and highest quality ingredients for the best flavors, create a space where people can come together to enjoy delicious food and share meaningful moments, and promote sustainable practices by supporting local suppliers and minimizing waste.`;

    const image = ce('div')
    image.classList.add('img-container');

    const img1 = ce('img');
    img1.classList.add('about-img')
    img1.src = adobo;

    const img2 = ce('img');
    img2.classList.add('about-img')
    img2.src = sinigang;

    const img3 = ce('img');
    img3.classList.add('about-img')
    img3.src = lechon;

    const img4 = ce('img');
    img4.classList.add('about-img')
    img4.src = halohalo;

    
    aboutContent.appendChild(h1);
    aboutContent.appendChild(history)
    aboutContent.appendChild(anotherH1)
    aboutContent.appendChild(mission)
    aboutContent.appendChild(image)
    image.appendChild(img1)
    image.appendChild(img2)
    image.appendChild(img3)
    image.appendChild(img4)
    div.appendChild(aboutContent);
    return div;
}