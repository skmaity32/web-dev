const btn1 = document.querySelector('#hello');
const btn2 = document.querySelector('#goodbye');

btn1.addEventListener('click', () => {
    console.log('Hello');
})
btn2.addEventListener('click', () => {
    console.log('Goodbye');
})