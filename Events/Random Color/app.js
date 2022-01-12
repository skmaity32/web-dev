const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');
btn.addEventListener('click', () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = newColor;
    h1.textContent = newColor;
    if (r+g+b < 250)
        h1.style.color = 'white';
    else
        h1.style.color = 'black';
})

// const randomColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     const newColor = `rgb(${r}, ${g}, ${b})`;
//     return newColor;
// }