import { ce } from "./home.js";
export function contactInfo() {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('home-content');
    
    const contactInfo = ce('div');
    contactInfo.classList.add('contact-section')
    const h1 = ce('h1');
    h1.textContent = 'Get in Touch';

    const num = ce('p')
    num.innerHTML = '<span>Phone :</span> 0965 438 3346';
    const email = ce('p');
    email.innerHTML = '<span>Email :</span> filipino.retaurant@gmail.com.ph'
    const add = ce('p');
    add.innerHTML = '<span>Address :</span> Brgy. Agos, Gloria, Oriental Mindoro, Philippines'

    const cForm = ce('div');
    cForm.classList.add('contact-form');
    const h2 = ce('h2');
    h2.textContent = 'Contact Form';

    const form = ce('form');
    form.classList.add('form')
    const nameLabel = ce('label');
    nameLabel.textContent = 'Name:';
    const nInput = ce('input');
    nInput.type = 'text';
    nInput.placeholder = 'Name';

    const emailLabel = ce('label');
    emailLabel.textContent = 'Email:';
    const emailInput = ce('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Email';

    const mesLabel = ce('label');
    mesLabel.textContent = 'Message:';
    const textarea = ce('textarea');
    textarea.placeholder = 'Short message';

    const submit = ce('button');
    submit.textContent = 'Submit'
    
    contactInfo.appendChild(h1);
    contactInfo.appendChild(num);
    contactInfo.appendChild(email);
    contactInfo.appendChild(add);

    cForm.appendChild(h2);
    cForm.appendChild(form);
    form.appendChild(nameLabel)
    form.appendChild(nInput);
    form.appendChild(emailLabel)
    form.appendChild(emailInput);
    form.appendChild(mesLabel)
    form.appendChild(textarea);
    form.appendChild(submit)

    contactDiv.appendChild(contactInfo);
    contactDiv.appendChild(cForm);
    return contactDiv;
}