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
  let result = [];
  let inputValue = input.value;
  if (inputValue.length) {
    result = available_keywords.filter((keyword) => {
      return keyword.toLowerCase().includes(inputValue);
    });
  }
  display(result);
});

function display(result) {
  const content = result
    .map((item) => {
      return "<li onclick = selectItem(this)>" + item + "</li>";
    })
    .join("");

  resultBox.innerHTML = "<ul>" + content + "</ul>";
}

function selectItem(list) {
  input.value = list.innerHTML;
}

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

input.addEventListener("keyup", function () {
  let filtered = [];
  let input_value = input.value.toLowerCase();
  if (input_value.length) {
    filtered = songs.filter((song) => {
      return song.title.toLowerCase().includes(input_value);
    });
  }
  renderSongs(filtered);
});

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
  console.log(message)
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

