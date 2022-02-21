const baseString = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const container = document.querySelector('#container');

for (let i = 1; i <= 151; i++) {
    const div = document.createElement('div');
    const span = document.createElement('span');
    const newImg = document.createElement('img');

    span.append(`#${i}`);
    newImg.src = `${baseString}${i}.png`;
    div.append(newImg, span);
    div.classList.add('pokemon');
    container.appendChild(div);
}