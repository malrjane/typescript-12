import Movie from "../domain/Movie";

const NewMovie = new Movie(111, "The Avengers", 2012, "USA", "Avengers Assemble!", "fantasy, action, adventyre", "137 мин. / 02:17", 100);

test('correct work of class Movie', async () => {
  await expect(NewMovie).toMatchObject(
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
})