const available_singers = [
  { name: "Pritam", img: "images/pritam.jfif" },
  { name: "Arijit Singh", img: "images/arijit.jfif" },
  { name: "Selena Gomez", img: "images/selena.jfif" },
  { name: "Billie Eplish", img: "images/eilish.jfif" },
  { name: "Sanam Puri", img: "images/sanam.jfif" },
  { name: "Imran Hassan", img: "images/IMRAN.jfif" },
  { name: "Zain Malik", img: "images/zain.jfif" },
];
const available_keywords = [
  "kalank",
  "kedarnath",
  "fighter",
  "dhadak",
  "dil bechara",
  "dunki",
  
];
const input = document.getElementById("input");
const resultBox = document.querySelector(".resultBox");

input.addEventListener("keyup", function () {
  
  let inputValue = input.value.toLowerCase();
 
    
    let keywordResult = available_keywords.filter((keyword) => {
      return keyword.toLowerCase().includes(inputValue);
    });
  

    let singerResult = available_singers.filter(singer => {
      return singer.name.toLowerCase().includes(inputValue);
    })
  
 
  display(keywordResult , singerResult)
});

function display(keywords,singerss) {
  
     let keywordHtml = keywords.map((item) => {
         return "<li onclick = selectItem(this)>" + item + "</li>";
       })
       .join("");

  let singerHtml = singerss.map(singer => {
   
    return "<li onclick=selectItem(this)>" + singer.name + "</li>";
  }).join();
  resultBox.innerHTML = `
    <ul>
      ${keywordHtml}
      ${singerHtml}
    </ul>
  `;
}

function selectItem(list) {

  input.value = list.innerHTML;
}

//singers display



// songs display

const songs = [
  { title: "kalank song", artist: "Arijit Singh", img: "images/kalank.jfif" },
  {
    title: "Dil Bechara",
    artist: "Arijit Singh",
    img: "images/Dil bechara  Sushant singh rajput.jfif",
  },
  { title: "Fighter song", artist: "Arijit Singh", img: "images/Fighter.jfif" },
  {
    title: "Kedarnath song",
    artist: "Arijit Singh",
    img: "images/Kedarnath Movie Photo.jfif",
  },
  { title: "Dhadak song", artist: "Arijit Singh", img: "images/dhadak.jfif" },
  {
    title: "Dunki song",
    artist: "Arijit Singh",
    img: "images/Dunki (2023).jfif",
  },
];

const slider = document.querySelector(".slider");

function renderSongs(data) {
  slider.innerHTML = "";

  data.forEach((song) => {
    slider.innerHTML += `
                <div class="cards">
               <div class="image">
                 <img src="${song.img}" alt="kalank">
               </div>
               <div class="image_detail">
                 <h4>"${song.title}"</h4>
                 <p>"${song.artist}"</p>
                 <a href="#">
                   <i class="fa-solid fa-play" onclick="openPop('${song.img}')"></i>
                 </a>
               </div>
             </div>
        `;
  });
}
renderSongs(songs);
const songTitle = document.getElementById('song_title');
const right = document.querySelector('.right');

input.addEventListener("keyup", function () {
  let filtered = [];
  let input_value = input.value.toLowerCase();
  if (input_value === "") {
    renderSongs(songs);
    return;
  }
    filtered = songs.filter((song) => {
      return song.title.toLowerCase().includes(input_value);
    });
  
  if (filtered.length > 0) {
     renderSongs(filtered);
  } else {
    
    renderSongs([]);
   
   }
});

// render singers
const sliders = document.querySelector('.sliders');

function renderSingers(available_singers){
  sliders.innerHTML = '';
  available_singers.forEach((singer) => {
       sliders.innerHTML += `<div class="singer">
              <img src="${singer.img}" alt="">
              <div class="singer_detail">
                <h4>${singer.name}</h4>
                <p>Artist</p>
                <a href="#">
                  <i class="fa-solid fa-play" onclick="openPop('${singer.img}')"></i>
                </a>
              </div>

            </div>`;
  })
}
renderSingers(available_singers);

input.addEventListener('keyup', function() {
  let filtered_singers = [];
  let input_value = input.value.toLowerCase();
  if (input_value === "") {
    renderSingers(available_singers);
    return;
  }
  filtered_singers = available_singers.filter((singer) => {
    return singer.name.toLowerCase().includes(input_value);
  });
  if (filtered_singers.length > 0) {
    renderSingers(filtered_singers);
  } else {
    renderSingers([]);
  }
  
})

// popupjs

function closePop() {
  document.querySelector(".popup").classList.remove("active");
}
function openPop(img) {
  document.getElementById("popup_img").src = img;
  document.querySelector(".popup").classList.add("active");
}

function signPop(btn) {
  const message = btn.nextElementSibling;
  console.log(message);
  message.classList.remove("hidden");
}
function downloadd(btn) {
  const message = btn.nextElementSibling;
  message.classList.remove("hidden");
}
function loginPop(btn) {
  const message = btn.nextElementSibling;
  message.classList.remove("hidden");
}

// toast js
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.style.fontWeight = "bold";
  toast.style.fontSize = "12px";
  toast.innerText = message;
  toast.classList.remove("hidden");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.classList.add("hidden");
    }, 3000);
  }, 2500);
}

// toggle


const sideBox = document.querySelector('.side-box');
const icon = document.getElementById('icon')
function toggleEvent(event) {
 sideBox.classList.toggle("hidden");
  if (!sideBox.classList.contains('hidden')) {
      icon.style.transform = "rotate(45deg)";
      icon.style.transition = "0.4s ease";
  } else {
     icon.style.transform = "rotate(0)";
     icon.style.transition = "0.4s ease";
  }
    
}
document.addEventListener('click', function (e) {
 if (!sideBox.contains(e.target) && !icon.contains(e.target)) {
   sideBox.classList.add("hidden");
   icon.style.transform = "rotate(0deg)";
 }
})

//for create playlist
const play = document.getElementById('play');
const message = document.querySelector('.message')
function togglePlay(event) {
  event.stopPropagation();
  message.classList.toggle('hidden');
}
document.addEventListener('click', function (e) {
  if (!message.contains(e.target)) {
    message.classList.add('hidden');
    }
})
  
