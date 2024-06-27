import imgCover from "./img/cover.jpg";


export function ce(e) {
    return document.createElement(e);
}

export function homeContent() {
    const homeDiv = ce('div');
    homeDiv.classList.add('home-content');
    
    const section = ce('section');
    section.classList.add('home-section');

    
    const h2 = ce('h2');
    h2.textContent = 'Experience the Taste of the Philippines';

    const p = ce('p');
    p.textContent = 'Delicious, authentic Filipino dishes made with love.';

    const img = ce('img');
    img.classList.add('img-cover')
    img.src = imgCover;
    img.alt = 'Cover Picture';
    
    section.appendChild(h2);
    section.appendChild(p);
    section.appendChild(img);
    homeDiv.appendChild(section)

    return homeDiv;
}