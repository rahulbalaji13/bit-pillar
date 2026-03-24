/* ── Clone hero phone screens into the simulator frame ───────────────────────── */
(function cloneScreens() {
  const heroScreens = document.querySelectorAll('.hero .app-screen');
  const simPhone = document.querySelector('.sim-frame .phone-screen');
  if (!simPhone || !heroScreens.length) return;

  heroScreens.forEach(screen => {
    const clone = screen.cloneNode(true);
    simPhone.appendChild(clone);
  });
})();

/* ── Tab / screen switching ──────────────────────────────────────────────────── */
const tabs       = document.querySelectorAll('.screen-tab');
const detailCards = document.querySelectorAll('.detail-card');

function setActiveScreen(screenName) {
  tabs.forEach(tab => {
    const isActive = tab.dataset.screen === screenName;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });

  // Update ALL app-screen elements (hero + simulator clone)
  document.querySelectorAll('.app-screen').forEach(screen => {
    screen.classList.toggle('active', screen.dataset.screen === screenName);
  });

  detailCards.forEach(card => {
    card.classList.toggle('active', card.dataset.screen === screenName);
  });
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => setActiveScreen(tab.dataset.screen));
});

/* ── APK download + toast + confetti + counter ───────────────────────────── */
const toast = document.getElementById('dlToast');

function triggerDownload(e) {
  // Let the native <a download> do its job — we just show the toast
  showToast();
  
  // Confetti celebration
  if (window.confetti) {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#5a3eff', '#00d4b4', '#ffc94d']
    });
  }

  // Lively update counter immediately
  if (currentCount) {
    currentCount += 1;
    updateCounterUI();
  }
}

function showToast() {
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 4200);
}

// Expose to inline onclick handlers
window.triggerDownload = triggerDownload;

/* ── Floating widget parallax (subtle mouse tracking combined with CSS) ────── */
const widgets = document.querySelectorAll('.fw');
document.addEventListener('mousemove', e => {
  const cx = window.innerWidth  / 2;
  const cy = window.innerHeight / 2;
  const dx = (e.clientX - cx) / cx;
  const dy = (e.clientY - cy) / cy;

  widgets.forEach((w, i) => {
    const depth = 0.4 + (i % 3) * 0.18;
    const tx = dx * 16 * depth;
    const ty = dy * 14 * depth;
    w.style.translate = `${tx}px ${ty}px`;
  });
});

/* ── Live Download / Visitor Counter Simulation ──────────────────────────── */
const countEl = document.getElementById('live-dl-count');
let currentCount = 1204;

function initCounter() {
  if (!countEl) return;
  const savedCount = localStorage.getItem('codecore_dl_count');
  if (savedCount) {
    currentCount = parseInt(savedCount, 10);
  } else {
    // Generate a plausible starting number
    currentCount = 1200 + Math.floor(Math.random() * 50);
  }
  
  // Real-time ticking simulation to make it lively
  setInterval(() => {
    if (Math.random() > 0.65) {
      currentCount += Math.floor(Math.random() * 2) + 1;
      updateCounterUI();
    }
  }, 4500);
  
  updateCounterUI();
}

function updateCounterUI() {
  if (countEl) {
    countEl.innerText = currentCount.toLocaleString();
    localStorage.setItem('codecore_dl_count', currentCount);
  }
}

initCounter();

/* ── Intersection-observer card reveals ─────────────────────────────────────── */
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.hl-card').forEach((card, i) => {
  card.style.animationDelay = `${i * 90}ms`;
  card.style.animation = 'revealUp 0.7s cubic-bezier(.22,1,.36,1) both paused';
  io.observe(card);
});
