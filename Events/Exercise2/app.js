const form = document.querySelector('form');
const lists = document.querySelector('#list');

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const prod = form.elements.product;
    const qty = form.elements.qty;
    createNewLi(prod.value, qty.value);
    form.reset();
})

const createNewLi = function(prod, qty) {
    const li = document.createElement('li');
    li.append(`Product: ${prod}, Quantity: ${qty}`);
    lists.append(li);
}
