/******************** ARRAYS ********************/

const arraySongs = [];
const arrayArtists = [];
const arrayGenres = [];

/******************** ARRAYS ********************/










/******************** CONSTRUCTORS ********************/

class Song{
  constructor(name, genre, streams, position, url, date){
      this.name = name;
      this.artists = [];
      this.genre = genre;
      this.streams = streams;
      this.position = position;
      this.url = url;
      this.date = date;
      arraySongs.push(this);
  }

  addArtist(artist){
    this.artists.push(artist);
  }
}





class Artist{
  constructor(name, genre, streams, position) {
    this.name = name;
    this.songs = [];
    this.genre = genre;
    this.streams = streams;
    this.position = position;
    arrayArtists.push(this);
  }

  addSongs(song){
    this.songs.push(song);
  }

  addStreams() {
    this.streams++;
  }
}





class Genre{
  constructor(name, song, artist, streams, position){
      this.name = name;
      this.song = song;
      this.artist = artist;
      this.streams = streams;
      this.position = position;
      arrayGenres.push(this);
  }
}

/******************** CONSTRUCTORS ********************/










/******************** OBJECTS ********************/

/***** Songs *****/

const raiseTheBar = new Song("Raise the Bar", "Pop", 1000, 1, "https://www.youtube.com/embed/XqvEdUfmXXU", 2016);
const howToLove = new Song("How to Love", "Pop", 980, 2, "https://www.youtube.com/embed/PQocCi6j_mk", 2011);
const pinkChampagne = new Song("Pink Champagne", "Pop", 300, 5, "https://www.youtube.com/embed/kbp3Rlscn50", 2013);
const goOutTonight = new Song("Go Out Tonight", "Rap", 450, 4, "https://www.youtube.com/embed/nRdUGMm68zY", 2015);
const permanentMarker = new Song("Permanent Marker", "Pop", 700, 3, "https://www.youtube.com/embed/kFdhPWKAu58", 2009);

/***** Songs *****/





/***** Artists *****/

const arianaGrande = new Artist("Ariana Grande", "Pop", 500, 4);
const drake = new Artist("Drake", "Rap", 18000, 2);
const justinBieber = new Artist("Justin Bieber", "Pop", 20000, 1);
const taylorSwift = new Artist("Taylor Swift", "Pop", 19000, 3);

/***** Artists *****/





/***** Genres *****/

//proximamente

/***** Genres *****/

/******************** OBJECTS ********************/










/******************** ASSIGNATIONS ********************/

/***** Songs *****/

pinkChampagne.addArtist(arianaGrande);
goOutTonight.addArtist(drake);
howToLove.addArtist(justinBieber);
raiseTheBar.addArtist(justinBieber);
permanentMarker.addArtist(taylorSwift);

/***** Songs *****/





/***** Artist *****/

arianaGrande.addSongs(pinkChampagne);
drake.addSongs(goOutTonight);
justinBieber.addSongs(howToLove);
justinBieber.addSongs(raiseTheBar);
taylorSwift.addSongs(permanentMarker);

/***** Artist *****/

//codigo a corregir
// const artistsToSongs = {   //assignates artists to songs
//   arianaGrande: [pinkChampagne], 
//   drake: [goOutTonight], 
//   justinBieber: [howToLove, raiseTheBar], 
//   taylorSwift: [permanentMarker]

// };

// for (const artist in artistsToSongs) {
//   artistsToSongs[artist].forEach(song => song.addArtist(artist));
// }



// const songsToArtists = {   //assignates songs to artists
//   pinkChampagne: [arianaGrande], 
//   goOutTonight: [drake], 
//   howToLove: [justinBieber],
//   raiseTheBar: [justinBieber],
//   permanentMarker: [taylorSwift] 
  
// };

// for (const song in songsToArtists){
//   songsToArtists[song].forEach(artist => artist.addSongs(song))
// }

/********************ASSIGNATIONS********************/










/********************FUNCTIONS********************/

function checkAge() {
  let age = prompt("How old are you?");
  if (age >= 18) {
    alert("Access granted");
  } else {
    let permission = confirm("Do you have permission from your parents?");
    if (permission) {
      alert("Access granted");
    } else {
      alert("Access denied");
      window.close();
    }
  }
}



function findArtist() {
  let artista = prompt("Search artist").toLowerCase();
  let foundArtist = false;

  for (const artist of arrayArtists) {
    if (artist.name.toLowerCase() === artista) {
      foundArtist = true;
      artista = artist;
    }
  }
  console.log(artista)

  if (foundArtist) {
    let songNames = [];
    artista.songs.forEach(song => songNames.push(song.name));
    alert(`
    Artist: ${artista.name}
    Songs: ${songNames.join(`, `)}
    Streams: ${artista.streams}
    Position: ${artista.position}
    `);
  } else {
    alert("No encontramos al artista");
  }
}



function request() {
  let artists = prompt(
    "Request any artists you would like to hear, when you're done type ESC"
  );
  let numbArt = 0;
  while (artists != "ESC") {
    numbArt++;
    artists = prompt(
      "Request any artists you would like to hear, when you're done type ESC"
    );
  }
  alert(`We will make sure to add these ${numbArt} new artists in the future.`);
}

/********************FUNCTIONS********************/


checkAge();
findArtist();
request();