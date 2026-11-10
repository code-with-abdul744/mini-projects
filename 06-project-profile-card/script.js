const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const main = document.querySelector('#main');

form.addEventListener('submit',function(evt){
    evt.preventDefault();

    console.log(
        inputs[0].value,
        inputs[1].value,
        inputs[2].value,
        inputs[3].value,
    );
    
    const card = document.createElement('div');
    card.classList.add("card");

    const profile = document.createElement('div');
    profile.classList.add("profile");

    const img = document.createElement('img');
    img.setAttribute("src", inputs[0].value);

    const h3 = document.createElement('h3');
    h3.textContent = 'Name: ' + inputs[1].value

    const h5 = document.createElement('h5');
    h5.textContent = 'Student-id: ' + inputs[2].value

    const p = document.createElement('p');
    p.textContent = 'Roll-no: ' + inputs[3].value


    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);
    main.appendChild(card);


});