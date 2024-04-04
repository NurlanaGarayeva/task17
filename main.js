const key = "4cc43c9591f08a993e37d3de55e50a72";



// let film = prompt("İzləmək istədiyiniz filmi daxil edin: ")


fetch(
  `https://api.themoviedb.org/3/tv/popular?&${film}&language=en-US&page=1&api_key=${key}`
).then((res) =>

  res.json().then((data) => data.results.map((film) =>
  console.log(`${film.name} | IMDB: ${film.vote_average.toFixed(1)}`)))
);

fetch(
  `https://api.themoviedb.org/3/movie/popular?language=tr-TR&page=1&api_key=${key}`
).then((res) => res.json().then((data) => console.log(data.results)));


console.log(`Daxil etdiyiniz film: `)


