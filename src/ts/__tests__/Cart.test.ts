import Cart from "../service/Cart";

test('new cart should be empty', () => {
  const cart = new Cart();
  expect(cart.getAll().length).toBe(0);
});

test('add item to cart', () => {
  const cart = new Cart();
  cart.add({
    id: 1,
    name: 'test',
    price: 100
  });
  expect(cart.getAll().length).toBe(1);
});

test('getAll returns a list of Cart objects', () => {
  const cart = new Cart();
  cart.add({
    id: 1,
    name: 'test',
    price: 100
  });
  cart.add({
    id: 2,
    name: 'test',
    price: 100
  });
  cart.add({
    id: 3,
    name: 'test',
    price: 100
  });
  expect(cart.getAll().length).toBe(3);
})