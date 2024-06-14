import Cart from "./service/Cart";
import Movie from "./domain/Movie";

const cart = new Cart();
console.log(cart.items);

cart.add(new Movie(111, "The Avengers", 2012, "USA", "Avengers Assemble!", "fantasy, action, adventyre", "137 мин. / 02:17", 100));

console.log(cart.items);

