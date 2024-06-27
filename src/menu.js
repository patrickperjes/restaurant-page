import { ce } from './home.js'
import adobo from './img/adobo.jpg'
import lechon from './img/lechon.jpg'
import halohalo from './img/halo-halo.jpg'
import sinigang from './img/sinigang.jpg'

const nextBtn = ce('button');
const prevBtn = ce('button');
const title = ce('p');
const price = ce('p');
const des = ce('p');
const img1 = ce('img');



export function menuContent() {
    const menuDiv = ce('div');
    menuDiv.classList.add('home-content');

    const section = ce('div');
    section.classList.add('menu-section');
    
    const h1 = ce('h1');
    h1.textContent = 'Menu';
    // grid
    const grid = ce('div');
    grid.classList.add('grid');
    // grid-item1
    const menu1 = ce('div');
    menu1.classList.add('menu1');

    img1.src = adobo;
    img1.classList.add('img1')

    title.textContent = 'Adobo';

    price.textContent = 'Best Food: $30';

    des.innerHTML = 'A savory stew of chicken or pork marinated <br> in vinegar, soy sauce, garlic, and spices.';

    const btns = ce('btns');
    btns.classList.add('btns')
    prevBtn.classList.add('prev-btn');
    prevBtn.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z">
                        </path>
                        </svg>`;

    nextBtn.classList.add('next-btn');
    nextBtn.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>`;


    
    // item 
    menu1.appendChild(img1)
    menu1.appendChild(title)
    menu1.appendChild(price)
    menu1.appendChild(des)
    //  button
    menu1.appendChild(btns)
    btns.appendChild(prevBtn)
    btns.appendChild(nextBtn)

    grid.appendChild(menu1)
    section.appendChild(h1)
    section.appendChild(grid)
    menuDiv.appendChild(section)
    return menuDiv;
}


const menus = [
  {
    id : 1,
    img : adobo,
    title : 'ADOBO',
    price : 'Best Food: $20',
    description : 'A savory stew of chicken or pork marinated <br> in vinegar, soy sauce, garlic, and spices.'
  },
  {
    id : 2,
    img : lechon,
    title : 'LECHON',
    price : 'Best Food: $80',
    description : 'Whole roasted pig with crispy skin and juicy, flavorful meat, <br> often served with liver sauce.'
  },
  {
    id : 3,
    img : sinigang,
    title : 'SINIGANG',
    price : 'Best Food: $15',
    description : 'A sour tamarind soup with a choice of meat, <br> fish, or shrimp, and a variety of vegetables.'
  },
  {
    id : 4,
    img : halohalo,
    title : 'HALO-HALO',
    price : 'Best Food: $10',
    description : 'A popular dessert made with crushed ice, evaporated milk, <br> and a variety of sweet ingredients.'
  }
]


let currMenu = 1;
function showMenu(menuIndex) {
  let menu = menus[menuIndex];

  img1.src = menu.img;
  title.textContent = menu.title;
  price.textContent = menu.price;
  des.innerHTML = menu.description;
}

nextBtn.addEventListener('click', () => {
  currMenu++;
  if (currMenu > menus.length-1){
    currMenu = 0;
  }
  showMenu(currMenu);
});
prevBtn.addEventListener('click', () => {
  currMenu--;
  if (currMenu < 0) {
    currMenu = menus.length-1;
  }
  showMenu(currMenu)
})