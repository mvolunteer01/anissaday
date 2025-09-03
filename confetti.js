// confetti.js

// Pastikan canvas-confetti sudah dimuat sebelum file ini
function confettiLove() {
  if (!window.confetti) {
    console.warn("canvas-confetti belum dimuat!");
    return;
  }

  const heart = new Image();
  heart.src = 'heart.png'; // pastikan heart.png ada di folder yang sama

  heart.onload = () => {
    confetti({
      particleCount: 700,
      spread: 1000,
      origin: { y: 0.6 },
      shapes: ['image'],
      shapeOptions: {
        image: heart
      },
      scalar: 0.7
    });
  };
}

// Bisa juga confetti default
function confettiRain() {
  if (!window.confetti) return;
  confetti({
    particleCount: 300,
    spread: 200,
    origin: { x: Math.random(), y: 0 }
  });
}

// Contoh untuk salju/hujan confetti terus menerus
function confettiSnow(duration = 5000) {
  if (!window.confetti) return;

  const end = Date.now() + duration;
  const frame = () => {
    confetti({
      particleCount: 5,
      startVelocity: 0,
      ticks: 200,
      gravity: 0.5,
      origin: { x: Math.random(), y: 0 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };
  frame();
}
