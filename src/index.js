import './style.css'
import { homeContent } from "./home.js";
import { menuContent } from './menu.js';
import { contactInfo } from './contact.js';
import { aboutContent } from './about.js';

const contentDiv = document.querySelector('#content');
const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');
const aboutBtn = document.querySelector('#about');

class ClassHandle {
    removeClass(e){
        e.classList.remove('hover');
    }
    addClass(e){
        e.classList.add('hover');
    }
}
const c = new ClassHandle();


// default display
function loadHome() {
    
    contentDiv.innerHTML = '';
    contentDiv.appendChild(homeContent());
    c.addClass(homeBtn);
    c.removeClass(menuBtn);
    c.removeClass(contactBtn);
    c.removeClass(aboutBtn);
}


homeBtn.addEventListener('click', () => {
    loadHome();
});

menuBtn.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    contentDiv.appendChild(menuContent());
    c.addClass(menuBtn);
    c.removeClass(homeBtn);
    c.removeClass(contactBtn);
    c.removeClass(aboutBtn);

})
contactBtn.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    contentDiv.appendChild(contactInfo());
    c.removeClass(homeBtn)
    c.addClass(contactBtn);
    c.removeClass(menuBtn);
    c.removeClass(aboutBtn);

})
aboutBtn.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    contentDiv.appendChild(aboutContent());
    c.addClass(aboutBtn);
    c.removeClass(homeBtn);
    c.removeClass(menuBtn);
    c.removeClass(contactBtn);
})
window.addEventListener('DOMContentLoaded', loadHome);