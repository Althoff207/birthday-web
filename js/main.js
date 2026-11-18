/* ============================================================
   HAPPY BIRTHDAY SCRAPBOOK (DENIM & COQUETTE JUNK JOURNAL)
   Authentic Canva aesthetic: Instant Camera Prints & TV Video
   ============================================================ */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const musicDisc = document.getElementById("musicDisc");
const musicStatus = document.getElementById("musicStatus");

const heroSubtitle = document.getElementById("heroSubtitle");
const ovalCoverImg = document.getElementById("ovalCoverImg");

const polaroidImg = document.getElementById("polaroidImg");
const polaroidCaption = document.getElementById("polaroidCaption");
const heartPhotoImg = document.getElementById("heartPhotoImg");
const heartLocketWrapper = document.getElementById("heartLocketWrapper");

const letterTitle = document.getElementById("letterTitle");
const letterBody = document.getElementById("letterBody");

const cameraPhotoStack = document.getElementById("cameraPhotoStack");
const tvScreenArea = document.getElementById("tvScreenArea");
const tvVideo = document.getElementById("tvVideo");
const tvDate = document.getElementById("tvDate");

const closingMessage = document.getElementById("closingMessage");
const closingFrom = document.getElementById("closingFrom");
const closingName = document.getElementById("closingName");

const loveBtn = document.getElementById("loveBtn");
const loveCountEl = document.getElementById("loveCount");
const replayBtn = document.getElementById("replayBtn");

let loveCount = 0;
let audioStarted = false;

/* =========================
   IMAGE FALLBACK HANDLER
========================= */
function setupImageFallback(imgEl) {
  if (!imgEl) return;
  imgEl.addEventListener("error", function () {
    const src = this.src;
    if (src.endsWith(".jpg")) {
      this.src = src.replace(/\.jpg$/, ".jpeg");
    } else if (src.endsWith(".jpeg")) {
      this.src = src.replace(/\.jpeg$/, ".jpg");
    }
  });
}

/* =========================
   STRIP EMOJI HELPER
========================= */
function stripEmoji(str) {
  return (str || '').replace(/[\u{1F300}-\u{1FFFF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{FE00}-\u{FE0F}]|[\u{1F900}-\u{1F9FF}]|[\u{231A}-\u{231B}]|[\u{23E9}-\u{23F3}]|[\u{23F8}-\u{23FA}]|[\u{25AA}-\u{25AB}]|[\u{25B6}]|[\u{25C0}]|[\u{25FB}-\u{25FE}]|[\u{2614}-\u{2615}]|[\u{2648}-\u{2653}]|[\u{267F}]|[\u{2693}]|[\u{26A1}]|[\u{26AA}-\u{26AB}]|[\u{26BD}-\u{26BE}]|[\u{26C4}-\u{26C5}]|[\u{26CE}]|[\u{26D4}]|[\u{26EA}]|[\u{26F2}-\u{26F3}]|[\u{26F5}]|[\u{26FA}]|[\u{26FD}]|[\u{2702}]|[\u{2705}]|[\u{2708}-\u{270D}]|[\u{270F}]|[\u{2712}]|[\u{2714}]|[\u{2716}]|[\u{271D}]|[\u{2721}]|[\u{2728}]|[\u{2733}-\u{2734}]|[\u{2744}]|[\u{2747}]|[\u{274C}]|[\u{274E}]|[\u{2753}-\u{2755}]|[\u{2757}]|[\u{2763}-\u{2764}]|[\u{2795}-\u{2797}]|[\u{27A1}]|[\u{27B0}]|[\u{27BF}]|[\u{2934}-\u{2935}]|[\u{2B05}-\u{2B07}]|[\u{2B1B}-\u{2B1C}]|[\u{2B50}]|[\u{2B55}]|[\u{3030}]|[\u{303D}]|[\u{3297}]|[\u{3299}]/gu, '').trim();
}

/* =========================
   INITIALIZATION
========================= */
function initContent() {
  if (typeof CONFIG === "undefined") return;

  // Setup fallbacks
  setupImageFallback(ovalCoverImg);
  setupImageFallback(polaroidImg);
  setupImageFallback(heartPhotoImg);

  // 1. Hero Subtitle
  if (heroSubtitle && CONFIG.subtitle) {
    heroSubtitle.textContent =
      CONFIG.subtitle[CONFIG.type] ||
      "Wishing you endless happiness, success, and beautiful moments ahead";
  }

  // 2. Photos Assignment
  const photos = CONFIG.photos || [];

  // Polaroid 1 (Photo 1 di Section 2)
  if (photos.length > 0 && polaroidImg) {
    polaroidImg.src = photos[0].src;
    // Update the caption span inside the div (not textContent of div)
    const captionSpan = document.querySelector('#polaroidCaption span');
    if (captionSpan) {
      captionSpan.textContent = stripEmoji(photos[0].caption) || "First memory";
    }
  }

  // Heart Locket (Photo 2 di Section 2)
  if (photos.length > 1 && heartPhotoImg) {
    heartPhotoImg.src = photos[1].src;
  }

  // 3. NOSTALGIC MEMORIES: FOTO DARI KAMERA JADUL (Photo 3, 4, 5, dst.)
  if (cameraPhotoStack && photos.length > 2) {
    cameraPhotoStack.innerHTML = "";
    const remainingPhotos = photos.slice(2);

    remainingPhotos.forEach((photo, idx) => {
      const card = document.createElement("div");
      const rot = photo.rotate || (idx % 2 === 0 ? -2.5 : 3);
      card.className =
        "relative bg-[#faf7f2] p-3 pb-7 rounded-sm shadow-[0_15px_35px_rgba(0,0,0,0.65)] border border-stone-300/80 w-64 md:w-72 transform hover:rotate-0 hover:scale-105 transition-all duration-300 group cursor-pointer";
      card.style.transform = `rotate(${rot}deg)`;

      const cleanCaption = stripEmoji(photo.caption) || 'Sweet memory';

      card.innerHTML = `
        <!-- Bagian Foto Glossy Kamera Jadul -->
        <div class="w-full h-56 md:h-64 overflow-hidden rounded-[2px] bg-stone-900 relative shadow-inner">
          <img src="${photo.src}" alt="${cleanCaption}" class="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition duration-500" loading="lazy">
        </div>

        <!-- Caption dengan Canva Charm Icons -->
        <div class="mt-3 flex items-center justify-center gap-2">
          <img src="assets/decorations/white_rose.png" alt="" class="w-5 h-5 object-contain filter drop-shadow-sm flex-shrink-0">
          <p class="text-center text-stone-800 font-handwritten text-xl font-bold leading-tight">${cleanCaption}</p>
          <img src="assets/decorations/ruby_heart.png" alt="" class="w-5 h-5 object-contain filter drop-shadow-sm flex-shrink-0">
        </div>
      `;

      // Set fallback on newly created image
      const img = card.querySelector("img");
      setupImageFallback(img);

      cameraPhotoStack.appendChild(card);
    });
  }

  // 4. Ripped Letter Note
  const letterData = CONFIG.letter ? CONFIG.letter[CONFIG.type] : null;
  if (letterData && letterBody) {
    if (letterTitle && letterData.title) {
      // Set title text without emoji, charm images are already in HTML
      const titleTextNode = letterTitle.querySelector('.title-text');
      if (titleTextNode) {
        titleTextNode.textContent = stripEmoji(letterData.title);
      } else {
        letterTitle.innerHTML = `
          <img src="assets/decorations/flower_gold.png" alt="" class="inline w-5 h-5 object-contain filter drop-shadow-sm align-middle mr-1">
          <span class="title-text">${stripEmoji(letterData.title)}</span>
          <img src="assets/decorations/ruby_heart.png" alt="" class="inline w-5 h-5 object-contain filter drop-shadow-sm align-middle ml-1">
        `;
      }
    }
    const paras = letterData.paragraphs || [];
    if (paras.length > 0) {
      letterBody.innerHTML = paras
        .map(p => `<p class="leading-relaxed">${stripEmoji(p)}</p>`)
        .join("");
    }
  }

  // 5. VIDEO DI BAWAH SEMUA FOTO DI NOSTALGIC MEMORIES
  if (tvVideo) {
    const videoSrc = (CONFIG.video && CONFIG.video.src) ? CONFIG.video.src : "assets/images/vid.mov";
    tvVideo.src = videoSrc;
    tvVideo.muted = true;
    tvVideo.play().catch(() => { });
  }

  // 6. Closing Section
  const closingData = CONFIG.closing ? CONFIG.closing[CONFIG.type] : null;
  if (closingData) {
    if (closingMessage) closingMessage.textContent = closingData.message || "";
    if (closingFrom) closingFrom.textContent = closingData.from || "With love,";
  }
  if (closingName) {
    closingName.textContent = CONFIG.from || "Aen";
  }
}

// Click TV screen area to toggle video pause / play
if (tvScreenArea && tvVideo) {
  tvScreenArea.addEventListener("click", () => {
    if (tvVideo.paused) {
      tvVideo.play().catch(() => { });
    } else {
      tvVideo.pause();
    }
  });
}

/* =========================
   HEART LOCKET INTERACTION
========================= */
if (heartLocketWrapper) {
  heartLocketWrapper.addEventListener("click", () => {
    const rect = heartLocketWrapper.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    for (let i = 0; i < 7; i++) {
      setTimeout(() => {
        spawnHeart(x + (Math.random() - 0.5) * 60, y + (Math.random() - 0.5) * 40);
      }, i * 70);
    }
  });
}

/* =========================
   AUDIO CONTROLS (AUTOPLAY ON SCROLL / TOUCH)
========================= */
function initMusic() {
  if (!CONFIG.backgroundMusic || !CONFIG.backgroundMusic.enabled) {
    if (musicBtn) musicBtn.style.display = "none";
    return;
  }
  music.src = CONFIG.backgroundMusic.src;
  music.playsInline = true;
}

function updateMusicUI(isPlaying) {
  if (!musicBtn) return;
  if (isPlaying) {
    if (musicDisc) {
      musicDisc.textContent = "💿";
      musicDisc.classList.add("spin-slow");
    }
    if (musicStatus) musicStatus.textContent = "Playing ♫";
  } else {
    if (musicDisc) {
      musicDisc.textContent = "🎵";
      musicDisc.classList.remove("spin-slow");
    }
    if (musicStatus) musicStatus.textContent = "Play Music";
  }
}

function toggleMusic() {
  if (!CONFIG.backgroundMusic || !CONFIG.backgroundMusic.enabled) return;

  if (music.paused) {
    music
      .play()
      .then(() => {
        audioStarted = true;
        updateMusicUI(true);
      })
      .catch(err => {
        console.log("Audio play prevented:", err);
      });
  } else {
    music.pause();
    updateMusicUI(false);
  }
}

if (musicBtn) {
  musicBtn.addEventListener("click", e => {
    e.stopPropagation();
    toggleMusic();
  });
}

// Trigger audio as soon as user touches or scrolls on phone / computer
function tryStartAudio() {
  if (audioStarted) return;
  if (!CONFIG.backgroundMusic || !CONFIG.backgroundMusic.enabled) return;

  music
    .play()
    .then(() => {
      audioStarted = true;
      updateMusicUI(true);
      // Clean up event listeners once playing
      gestureEvents.forEach(evt => {
        window.removeEventListener(evt, tryStartAudio);
        document.removeEventListener(evt, tryStartAudio);
      });
    })
    .catch(() => {
      // Waiting for valid gesture
    });
}

const gestureEvents = ["touchstart", "touchmove", "pointerdown", "scroll", "click"];
gestureEvents.forEach(evt => {
  window.addEventListener(evt, tryStartAudio, { passive: true });
  document.addEventListener(evt, tryStartAudio, { passive: true });
});

/* =========================
   INTERACTIVE ORGANIC CHARMS (CANVA PHYSICAL ASSETS)
========================= */
function spawnHeart(x, y) {
  const container = document.createElement("div");
  container.className = "floating-heart pointer-events-none select-none";

  // Real Canva physical charm images
  const charmList = [
    "assets/decorations/ruby_heart.png",
    "assets/decorations/metal_flower.png",
    "assets/decorations/white_rose.png",
    "assets/decorations/flower_gold.png",
    "assets/decorations/ruby_heart.png"
  ];

  const chosenCharm = charmList[Math.floor(Math.random() * charmList.length)];
  const img = document.createElement("img");
  img.src = chosenCharm;
  img.alt = "Charm";
  img.className = "w-7 h-7 object-contain filter drop-shadow-md";

  container.appendChild(img);
  container.style.left = `${x}px`;
  container.style.top = `${y}px`;

  const dx = (Math.random() - 0.5) * 130 + "px";
  const rot = (Math.random() - 0.5) * 70 + "deg";
  container.style.setProperty("--dx", dx);
  container.style.setProperty("--rot", rot);

  document.body.appendChild(container);
  setTimeout(() => container.remove(), 1600);
}

if (loveBtn) {
  loveBtn.addEventListener("click", () => {
    loveCount++;
    if (loveCountEl) loveCountEl.textContent = loveCount;

    const rect = loveBtn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    for (let i = 0; i < 7; i++) {
      setTimeout(() => {
        spawnHeart(
          x + (Math.random() - 0.5) * 50,
          y + (Math.random() - 0.5) * 30
        );
      }, i * 65);
    }
  });
}

/* =========================
   CONFETTI CELEBRATION
========================= */
function launchConfetti() {
  const canvas = document.createElement("canvas");
  canvas.id = "confettiCanvas";
  canvas.className = "fixed inset-0 pointer-events-none z-50 w-full h-full";
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const colors = [
    "#f472b6",
    "#fb7185",
    "#fde047",
    "#a78bfa",
    "#38bdf8",
    "#4ade80",
    "#fda4af",
    "#ffffff"
  ];

  for (let i = 0; i < 80; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.3 - 40,
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedY: Math.random() * 3 + 2,
      speedX: (Math.random() - 0.5) * 4,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10
    });
  }

  const startTime = Date.now();
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotSpeed;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    });

    if (Date.now() - startTime < 3500) {
      requestAnimationFrame(draw);
    } else {
      canvas.remove();
    }
  }
  requestAnimationFrame(draw);
}

if (replayBtn) {
  replayBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (CONFIG.backgroundMusic && CONFIG.backgroundMusic.enabled) {
      music.currentTime = 0;
      music.play().then(() => updateMusicUI(true)).catch(() => { });
    }
    if (tvVideo) {
      tvVideo.currentTime = 0;
      tvVideo.play().catch(() => { });
    }
    setTimeout(() => launchConfetti(), 400);
  });
}

/* =========================
   START
========================= */
initContent();
initMusic();
