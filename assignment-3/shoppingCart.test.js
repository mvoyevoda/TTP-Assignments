const Shopping = require('./shoppingCart.js');
let session1;

beforeEach(() => {
    session1 = new Shopping();
});

let item = 'keyboard';
let quant = 3;
test('Add ' + quant + ' ' + item + 's', () => {
  session1.addToCart(item, quant);
  expect(session1.cart[item]).toEqual(quant);
});

quant = 2;
test('Delete ' + quant + ' ' + item + 's', () => {
    session1.addToCart(item, 10);
    const goal = session1.cart[item] - quant;
    session1.removeFromCart(item, quant);
    expect(session1.cart[item]).toEqual(goal);
});

test('CalculateTotal()', () => {
    session1.addToCart('mouse', 3);
    session1.addToCart('monitor', 1);
    session1.addToCart('cable', 5);

    const correctTotal = 330;
    expect(session1.calculateTotal()).toEqual(correctTotal);
});


