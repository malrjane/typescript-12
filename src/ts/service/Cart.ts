import Buyable from "../domain/Buyable";

export default class Cart {
  items: Buyable[] = [];

  add(item: Buyable): void {
    this.items.push(item);
  }

  getAll(): Buyable[] {
    return [...this.items];
  }
}