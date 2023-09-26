/******************** ARRAYS ********************/

let arraySongs = [];
let arrayArtists = [];

// URL del archivo JSON
const jsonURL = '../js/data.json'; // Reemplaza 'tu_archivo.json' con la ruta correcta

// Función para cargar y trabajar con los datos del JSON
function loadJSON() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(jsonURL); // Cargar el archivo JSON
      const data = await response.json(); // Convertir la respuesta a JSON

      // Acceder a los datos de los artistas y las canciones
      arrayArtists = data.artists;
      arraySongs = data.songs;

      console.log(arrayArtists);
      console.log(arraySongs);

      resolve(); // Resuelve la promesa cuando los datos se han cargado correctamente
    } catch (error) {
      console.error('Error al cargar el JSON:', error);
      reject(error); // Rechaza la promesa en caso de error
    }
  });
}


/******************** ARRAYS ********************/

/******************** CONSTRUCTORS ********************/

// class Song {
//   constructor(id, name, genre, streams, position, url, date) {
//     this.id = id;
//     this.name = name;
//     this.artists = [];
//     this.genre = genre;
//     this.streams = streams;
//     this.position = position;
//     this.url = url;
//     this.date = date;
//     arraySongs.push(this);
//   }

//   addArtist(artist) {
//     this.artists.push(artist);
//     artist.addSong(this);
//   }
// }

// class Artist {
//   constructor(id, name, genre, streams, position, icon) {
//     this.id = id;
//     this.name = name;
//     this.songs = [];
//     this.genre = genre;
//     this.streams = streams;
//     this.position = position;
//     this.icon = icon;
//     arrayArtists.push(this);
//   }

//   addSong(song) {
//     this.songs.push(song);
//   }
// }

// class Genre {
//   constructor(name, song, artist, streams, position) {
//     this.name = name;
//     this.song = song;
//     this.artist = artist;
//     this.streams = streams;
//     this.position = position;
//     arrayGenres.push(this);
//   }
// }

// /******************** CONSTRUCTORS ********************/

// /******************** OBJECTS ********************/

// /***** Songs *****/

// const raiseTheBar = new Song(
//   1,
//   "Raise the Bar",
//   "Pop",
//   1000,
//   1,
//   "https://www.youtube.com/embed/XqvEdUfmXXU",
//   2016
// );
// const howToLove = new Song(
//   2,
//   "How to Love",
//   "Pop",
//   980,
//   2,
//   "https://www.youtube.com/embed/PQocCi6j_mk",
//   2011
// );
// const pinkChampagne = new Song(
//   3,
//   "Pink Champagne",
//   "Pop",
//   300,
//   5,
//   "https://www.youtube.com/embed/kbp3Rlscn50",
//   2013
// );
// const goOutTonight = new Song(
//   4,
//   "Go Out Tonight",
//   "Rap",
//   450,
//   4,
//   "https://www.youtube.com/embed/nRdUGMm68zY",
//   2015
// );
// const permanentMarker = new Song(
//   5,
//   "Permanent Marker",
//   "Pop",
//   700,
//   3,
//   "https://www.youtube.com/embed/iBLJR3VDbnY",
//   2009
// );
// const mamiNoSe = new Song(
//   6,
//   "Mami No Se",
//   "Reggaeton",
//   900,
//   6,
//   "https://www.youtube.com/embed/5-rr3sEfySM",
//   2018
// );
// const badCover = new Song(
//   7,
//   "Bad (cover)",
//   "Pop",
//   300,
//   8,
//   "https://www.youtube.com/embed/dL9TK-OnH-g",
//   2018
// );
// const everythingYouAre = new Song(
//   8,
//   "Everything You Are",
//   "Pop",
//   800,
//   10,
//   "https://www.youtube.com/embed/o_ez1-zIUR8",
//   2014
// );
// const easier = new Song(
//   9,
//   "Easier",
//   "Rap",
//   660,
//   7,
//   "https://www.youtube.com/embed/RqKfcfit0t4",
//   2020
// );
// const enemy = new Song(
//   10,
//   "Enemy",
//   "R&B",
//   490,
//   8,
//   "https://www.youtube.com/embed/kFdhPWKAu58",
//   2015
// );

// /***** Songs *****/

// /***** Artists *****/

// const arianaGrande = new Artist(
//   4,
//   "Ariana Grande",
//   "Pop",
//   500,
//   5,
//   "../assets/arianaLogoR.png"
// );
// const badBunny = new Artist(
//   2,
//   "Bad Bunny",
//   "Reggaeton",
//   18500,
//   2,
//   "../assets/bbLogo.png"
// );
// const drake = new Artist(
//   3,
//   "Drake", 
//   "Rap", 
//   18000, 
//   3,  
//   "../assets/drakeLogo.png"
// );
// const justinBieber = new Artist(
//   1,
//   "Justin Bieber",
//   "Pop",
//   20000,
//   1,
//   "../assets/jbLogo.png"
// );
// const taylorSwift = new Artist(
//   5,
//   "Taylor Swift",
//   "Pop",
//   19000,
//   4,
//   "../assets/taylorLogo.png"
// );
// const billieEilish = new Artist(
//   6,
//   "Billie Eilish",
//   "Pop",
//   16000,
//   8,
//   "../assets/billieLogo.png"
// );
// const edSheeran = new Artist(
//   7,
//   "Ed Sheeran",
//   "Pop",
//   12000,
//   6,
//   "../assets/edLogo.png"
// )
// const postMalone = new Artist(
//   8,
//   "Post Malone",
//   "Rap",
//   13000,
//   11,
//   "../assets/postLogo.png"
// )
// const theWeeknd = new Artist(
//   9,
//   "The Weeknd",
//   "R&B",
//   19500,
//   2,
//   "../assets/twLogo.webp"
// )


// /***** Artists *****/

// /***** Genres *****/

// //proximamente

// /***** Genres *****/

// /******************** OBJECTS ********************/

// /******************** ASSIGNATIONS ********************/

// pinkChampagne.addArtist(arianaGrande);
// goOutTonight.addArtist(drake);
// howToLove.addArtist(justinBieber);
// raiseTheBar.addArtist(justinBieber);
// permanentMarker.addArtist(taylorSwift);
// mamiNoSe.addArtist(badBunny);
// badCover.addArtist(billieEilish);
// everythingYouAre.addArtist(edSheeran);
// easier.addArtist(postMalone);
// enemy.addArtist(theWeeknd);

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
  console.log(artista);

  if (foundArtist) {
    let songNames = [];
    artista.songs.forEach((song) => songNames.push(song.name));
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

function alphabetical(array) {
  array.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    return nameA.localeCompare(nameB);
  });
}
/********************FUNCTIONS********************/

/******************** HTML ********************/
const header = document.getElementById("header");
header.innerHTML = `
<nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="../assets/logo.icoResized.png"
              alt="Unsic Logo"
              width="30px"
              height="35px"
            />
            Unsic</a
          >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              class="navbar-toggler-icon svg"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <a class="nav-link px-3" href="../index.html">Home</a>
              <a class="nav-link px-3" href="./artists.html">Artists</a>
              <a class="nav-link px-3" href="./genres.html">Genres</a>
              <a class="nav-link px-3" href="./songs.html">Songs</a>
              <a id="usernameNav" class="nav-link px-3" href="./login.html">Login</a>
            </div>
          </div>
        </div>
      </nav>
`;



const footer = document.querySelector("footer");
footer.innerHTML = `
<div class="row">
  <p class="col-lg-6">
    © Unsic 2023. All rights reserved. The content of this website, including
    but not limited to text, images, logos, and music, is protected by copyright
    and other intellectual property laws. Reproduction, distribution,
    modification, or any other form of use without the prior written permission
    of the website owners is strictly prohibited. All music material featured on
    this website is the property of the respective artists and is used with
    their consent. Any unauthorized use of this content may be subject to legal
    action.
  </p>
  <div class="col-lg-6">
    <p class="d-flex justify-content-center">Contact us:</p>
    <ul class="d-flex justify-content-evenly">
      <!--Los href no redireccionan a ningun lugar en especifico-->
      <li>
        <a href="lnk" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
      </li>
      <li>
        <a href="ig" target="_blank"><i class="fa-brands fa-instagram"></i></a>
      </li>
      <li>
        <a href="mail" target="_blank"
          ><i class="fa-regular fa-envelope"></i
        ></a>
      </li>
      <li>
        <a href="wpp" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
      </li>
    </ul>
  </div>
</div>
`;



function listaArtistas() {
  currentTab = document.location.href;
  if (currentTab.includes("artists.html")) {
    const artistList = document.getElementById("artistList");
    alphabetical(arrayArtists);
    arrayArtists.forEach((artist) => {
      const listItem = document.createElement("li");
      listItem.classList.add("col", "d-flex", "flex-column", "align-items-center", "mb-5");

      const artistLink = document.createElement("a");
      artistLink.id = artist.id;
      artistLink.href = "songs.html"

      artistLink.innerHTML = `
        <img src="${artist.image}" alt="${artist.name}" width="150" height="150" />
        <p class="d-flex justify-content-center">${artist.name}</p>
      `;

      artistLink.addEventListener("click", () => {
        localStorage.setItem("artistId", artist.id);
        console.log(artist.id);
      });

      listItem.appendChild(artistLink);
      artistList.appendChild(listItem);
    });
  }
}




function listaCanciones() {
  currentTab = document.location.href;
  if (currentTab.includes("songs.html")) {
    const songList = document.getElementById("songList");
    alphabetical(arraySongs);
    const artistId = localStorage.getItem("artistId");

    function generateSongHTML(song, artist) {
      return `<li class="row d-flex justify-content-evenly py-4">
        <iframe
          class="col-lg-4 col-12"
          width="560"
          height="315"
          src="${song.url}"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <p class="col-lg-4 col-12 d-flex align-items-center">
          ${song.name} - ${artist.name} - ${song.year}
        </p>
      </li>`;
    }

    if (artistId) {
      const artist = arrayArtists.find((artist) => artist.id === parseInt(artistId));

      if (artist) {
        const songsByArtist = arraySongs.filter((song) =>
          song.artistId.includes(parseInt(artistId))
        );

        const songsHTML = songsByArtist.map((song) => generateSongHTML(song, artist)).join('');

        songList.innerHTML = songsHTML;

        localStorage.clear();
      }
    } else {
      const allSongsHTML = arraySongs.map((song) => {
        const artist = arrayArtists.find((artist) => artist.id === song.artistId[0]);
        return generateSongHTML(song, artist);
      }).join('');

      songList.innerHTML = allSongsHTML;
    }
  }
}





function login() {
  currentTab = document.location.href;
  if (currentTab.includes("login.html")) {
    const login = document.getElementById("login");
    login.addEventListener("submit", function (event) {
      event.preventDefault();
      const username = document.getElementById("username").value;
      Swal.fire({
        title: `Welcome, ${username}.`,
        text: `Enjoy the music! Enjoy the art!`,
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          sessionStorage.setItem("username", username);

          window.location.href = "../index.html";
        }
      });
    });
  }
}
login();






function checkLogin() {
  const storedUsername = sessionStorage.getItem("username");
  const usernameNav = document.getElementById("usernameNav");
  if (storedUsername) {
    usernameNav.innerHTML = `${storedUsername}`;
    usernameNav.addEventListener("click", function () {
      sessionStorage.removeItem("username");
    });
  }
}
checkLogin()

document.addEventListener('DOMContentLoaded', async () => {
  try {
    await loadJSON(); 
    listaArtistas();
    listaCanciones();
  } catch (error) {
    console.error('Error en el evento DOMContentLoaded:', error);
  }
});
