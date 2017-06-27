(() => {
  'use strict';

  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {

    const num = Math.random();

    if (num < 0.01) {
      btn.textContent = '大吉';
    } else if (num < 0.1) {
      btn.textContent = '末吉';
    } else {
      btn.textContent = '中吉';
    }
  });

  btn.addEventListener('mousedown', () => {
    btn.classList.add('pushed');
  });

  btn.addEventListener('mouseup', () => {
    btn.classList.remove('pushed');
  });
})();
