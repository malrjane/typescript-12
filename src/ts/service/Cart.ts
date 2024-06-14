import Buyable from "../domain/Buyable";

export default class Cart {
  items: Buyable[] = [];

  add(item: Buyable): void {
    this.items.push(item);
  }

  getAll(): Buyable[] {
    return [...this.items];
  }

  sumAll(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0)
  }

  sumWithDiscout(discount: number): number {
      let totalSum = this.sumAll();
      let discountPrice = (totalSum * discount) / 100;
      return totalSum - discountPrice;
  }

  deleteItem(item: Buyable): void {
    const index = this.items.findIndex(i => i.id === item.id);
    if(index !== -1) {
      this.items.splice(index, 1)
    }
  }
}