import Buyable from "./Buyable";
export default class Movie implements Buyable {
  constructor(
    readonly id: number, 
    readonly name: string, 
    readonly releaseDate: number, 
    readonly country: string, 
    readonly slogan: string, 
    readonly genre: string, 
    readonly duration: number | string, 
    readonly price: number) {}
}