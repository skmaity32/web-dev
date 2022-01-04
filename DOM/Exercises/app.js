// const image = document.getElementById('unicorn');
// const heading = document.getElementById('mainheading');

// ------------------------------------------------------------------------------

// const doneTodos = document.querySelectorAll('.done');
// const checkbox = document.querySelector('input[type = "checkbox"]');

// ------------------------------------------------------------------------------
// const span = document.querySelector('h1 span');
// span.textContent = 'Disgusting'; 

// ------------------------------------------------------------------------------

// const img = document.querySelector('#egg');
// img.setAttribute('src', 'https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg');
// img.setAttribute('alt', 'chicken');

// alt
// img.src = 'https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg';
// img.alt = 'chicken';

// ------------------------------------------------------------------------------

// const container = document.querySelector('#container');
// container.style.textAlign = 'center';

// const image = document.querySelector('img');
// image.style.width = '150px';
// image.style.borderRadius = '50%';

// ------------------------------------------------------------------------------

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// const spans = document.querySelectorAll('h1 span');

// for (let i = 0; i < spans.length; i++) {
//     spans[i].style.color = colors[i];
// }

// -----------------------------------------------------------------------------

// const lis = document.querySelectorAll('li');
// for (let li of lis) {
//     li.classList.toggle('highlight');
// }

// -----------------------------------------------------------------------------

const container = document.querySelector('#container');
for (let i = 0; i < 100; i++) {
    let button = document.createElement('button');
    button.textContent = 'Hey!';
    container.append(button);
}

