import Buyable from "../domain/Buyable";

class NewMovie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly releaseDate: number,
    readonly country: string,
    readonly slogan: string,
    readonly genre: string,
    readonly duration: number | string,
  ) { }
};

const Movie: Buyable = new NewMovie(111, "The Avengers", 100, 2012, "USA", "Avengers Assemble!", "fantasy, action, adventyre", "137 мин. / 02:17");

test('interface has 3 parameters', async () => {
  console.log(Movie)
  await expect(Movie).toMatchObject(
    {
      id: 111,
      name: "The Avengers",
      price: 100,
      releaseDate: 2012,
      country: "USA",
      slogan: "Avengers Assemble!",
      genre: "fantasy, action, adventyre",
      duration: "137 мин. / 02:17",
    });
});

