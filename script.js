// ==== Slides Gabungan Foto & Video ====
const slides = [
  { type: "photo", src: "photos1.jpg", caption: "Akhirnyamenjemput bolaku berhasil" },
  { type: "photo", src: "photos2.jpg", caption: "HALOOOO!!! akhirnya kita berteman dengan baik kembali" },
  { type: "video", src: "vid1.mp4", caption: "🎬 Anissa KAKUUUU, gerakk ayooo!! narii" },
  { type: "photo", src: "photos3.jpg", caption: "ahahaha oot ala mba-mba virgo~" },
  { type: "photo", src: "photos4.jpg", caption: "One of my favoritoo PHOTOSSSS!!!" },
  { type: "video", src: "vid2.mp4", caption: "🎬 Nangis nama tengah mu kan, nisss" },
  { type: "photo", src: "photos5.jpg", caption: "BAGUSSS TAPIII PASTI U BILANG ENGGA KANNN!!! arghh" },
  { type: "photo", src: "photos6.jpg", caption: "Quesn of foto manyuunn!!!" },
  { type: "photo", src: "photos7.jpg", caption: "AZEKK ciaelahh candid bet candid (BAGOSS KANN!!)" },
  { type: "video", src: "vid3.mp4", caption: "🎬 mengunjungi TEMPAT KALIAN MEMUNGUTKU SEBAGAI TEMAN, I LOVED IT" },
  { type: "photo", src: "photos8.jpg", caption: "manyun teros manyunn (mengajariku foto menggunakan filter tiktok)" },
  { type: "photo", src: "photos9.jpg", caption: "gatau kenapa foto ootd ini lagi" },
  { type: "photo", src: "photos10.jpg", caption: "back tu basic (awal tapi pukan permulaan)" },
  { type: "video", src: "vid4.mp4", caption: "🎬 kayanya kesiangan lebih bosan ketemu kita daripada kita ketemu kesiangan"},
  { type: "video", src: "vid5.mp4", caption: "🎬 terima kasih sudah ada di bumi dan mau berteman denganku ya nunna nissa"}
];

let currentSlide = 0;
const photoElem = document.getElementById("photo");
const videoElem = document.getElementById("surpriseVideo");
const captionElem = document.getElementById("caption");

// Tampilkan slide sesuai tipe
function showSlide(index){
  const slide = slides[index];
  if(slide.type === "photo"){
    photoElem.src = slide.src;
    photoElem.classList.remove("hidden");
    videoElem.classList.add("hidden");
    videoElem.pause();
    captionElem.innerHTML = slide.caption;
  } else if(slide.type === "video"){
    videoElem.src = slide.src;
    videoElem.classList.remove("hidden");
    photoElem.classList.add("hidden");
    captionElem.innerHTML = slide.caption;
    videoElem.play();
    videoElem.onended = () => nextSlide(); // lanjut setelah video selesai
    return;
  }
}

// Lanjut ke slide berikutnya
function nextSlide(){
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
  if(slides[currentSlide].type === "photo"){
    setTimeout(nextSlide, 4000);
  }
}

// ==== Typewriter Effect ====
const message = "02 September 2025 \nHai Nissa! \nSampai juga kita di doa baik tahun lalu \nbertemu dan tetap berteman di ulangtahun berikutnya.";
let typeIndex = 0;

function typeEffect(){
  const target = document.getElementById("typingText");
  if(typeIndex < message.length){
    const char = message.charAt(typeIndex) === "\n" ? "<br>" : message.charAt(typeIndex);
    target.innerHTML += char;
    typeIndex++;
    setTimeout(typeEffect, 70);
  } else {
    document.getElementById("nextPart").style.display = "block";
  }
}

// ==== Tombol Next ====
let clickCount = 0;
const nextBtn = document.getElementById("nextBtn");
const buttonTexts = [
  "Ehh... belum, coba lagi 🤭",
  "Dikit lagi... klik sekali lagi 🫣",
  "Siap? Klik untuk buka kejutan! 🎉"
];

nextBtn.addEventListener("click", ()=>{
  clickCount++;
  if(clickCount < 3){
    nextBtn.textContent = buttonTexts[clickCount-1];
    nextBtn.style.marginLeft = Math.floor(Math.random()*200)+"px";
  } else {
    document.getElementById("nextPart").style.display = "none";
    document.getElementById("giftSection").style.display = "block";
    document.getElementById("hiddenWish").classList.remove("hidden");
    // document.getElementById("bgMusic").play();

    if(window.confetti){
      confetti({particleCount:3000, spread:800, origin:{x:0.5,y:0.5}});
    }

    setTimeout(startQuotes, 1000);
    setTimeout(()=>{ document.getElementById("hugSection").classList.remove("hidden"); }, 2000);
  }
});

// ==== Quotes Berganti Otomatis ====
const quotes = [
  "Jan suka sembunyi, just let people know Anissa yang sesungguhnya ✨",
  "Terima kasih sudah mencoba menjadi dirimu 💛",
  "Kalau capek, istirahat ya. Pelan-pelan aja, semua punya pacenya masing-masing 🤍",
  "Patah hati tidak seburuk itu kok, mari ubah pov dan fokusnya pada dirimu dulu🌷",
  "Just do it first, sisahnya biar yang punya dunia yang urus 🪄",
  "Jangan ngerasa sendirian yaa, every one loves you🎀"
];
let qIndex = 0;
function startQuotes(){
  const quoteText = document.getElementById("quoteText");
  document.getElementById("quoteSlide").classList.remove("hidden");
  quoteText.textContent = quotes[qIndex];
  setInterval(()=>{
    qIndex = (qIndex+1)%quotes.length;
    quoteText.textContent = quotes[qIndex];
  },4000);
}

// ==== Tombol Start ====
let clickStart = 0;
const startBtn = document.getElementById("startBtn");
const startMessages = [
  "Senyum duluuuu!! 😄",
  "Lebih lebarrrrr🌞",
  "Pake gigii!!!!😁😁😁",
  "YEAYYYY ITU DIAA!! Sekarang mari menari bersamaku 💃🕺"
];

startBtn.addEventListener("click", ()=>{
  clickStart++;
  if(clickStart<5){
    startBtn.textContent = startMessages[clickStart-1];
  } else {
    startBtn.style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    document.getElementById("bgMusic").play();
    typeEffect();
    showSlide(currentSlide);
    setTimeout(nextSlide, 4000);
  }
});
