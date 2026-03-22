const tabs = document.querySelectorAll('.screen-tab');
const screens = document.querySelectorAll('.app-screen');
const detailCards = document.querySelectorAll('.detail-card');

function setActiveScreen(screenName) {
  tabs.forEach((tab) => {
    const isActive = tab.dataset.screen === screenName;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });

  screens.forEach((screen) => {
    screen.classList.toggle('active', screen.dataset.screen === screenName);
  });

  detailCards.forEach((card) => {
    card.classList.toggle('active', card.dataset.screen === screenName);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    setActiveScreen(tab.dataset.screen);
  });
});
