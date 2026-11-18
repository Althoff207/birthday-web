const CONFIG = {
  type: "birthday",
  // "birthday" | "anniversary"

  name: "Aca",
  from: "Aen",

  age: 19, // 👉 GANTI UMUR DI SINI

  title: {
    birthday: "happy birthday, now you're turn",
    anniversary: "Another year with you"
  },

  subtitle: {
    birthday: "A little scrapbook made with love",
    anniversary: "Memories, love, and us"
  },

  backgroundMusic: {
    enabled: true,
    src: "assets/audio/bg-music.mp3",
    autoplay: true
  }
};

CONFIG.photos = [
  {
    src: "assets/images/photo1.jpg",
    caption: "First memory 🤍",
    rotate: -4
  },
  {
    src: "assets/images/photo2.jpg",
    caption: "Always you",
    rotate: 3
  },
  {
    src: "assets/images/photo3.jpg",
    caption: "My favorite smile",
    rotate: -2
  },
  {
    src: "assets/images/photo4.jpg",
    caption: "Us ✨",
    rotate: 5
  }
];

CONFIG.photos.push({
  src: "assets/images/photo5.jpeg",
  caption: "New memory 💫",
  rotate: -3
});

CONFIG.video = {
  src: "assets/images/vid.mov",
  enabled: true
};


CONFIG.letter = {
  birthday: {
    title: "The first on my mind",
    paragraphs: [
      "Happy birthday, my little baby. 🤍 Hari ini adalah tentang merayakan kamu dan semua hal luar biasa yang ada di dalam dirimu.",
      "Aku bangga sekali sama kamu dan setiap langkah kecil ataupun besar yang sudah kamu lewati sampai titik ini.",
      "Terima kasih sudah hadir dan bikin hidupku terasa jauh lebih utuh. Having you by my side is truly my greatest blessing.",
      "Selamat bertambah usia, sayangku. Let’s keep growing and shining together."
    ]
  },

  anniversary: {
    title: "Another year with you",
    paragraphs: [
      "Gak kerasa ya, kita sudah sejauh ini. Banyak hal yang kita lewati bersama.",
      "Terima kasih sudah tetap ada, di saat senang maupun sulit.",
      "Semoga ke depannya, kita bisa terus tumbuh, belajar, dan saling menguatkan."
    ]
  }
};

CONFIG.letter.birthday.paragraphs.push(
  "I do really love you 🤍"
);


CONFIG.ageSection = {
  enabled: true, // 👉 false kalau mau disembunyikan manual

  message: {
    birthday: "A beautiful chapter begins",
    anniversary: ""
  }
};

CONFIG.closing = {
  birthday: {
    message: "No matter where life takes you, I hope you always feel loved darling.",
    from: "With love,"
  },

  anniversary: {
    message: "Still you. Still us. Still my favorite person.",
    from: "Always,"
  }
};

CONFIG.theme = {
  background: "#f8f5f2",
  accent: "#e4b1ab",
  text: "#333"
};

if (typeof window !== "undefined") {
  window.CONFIG = CONFIG;
}

