(() => {
  'use strict';

  const btn = document.getElementById('btn');

  btn.addEventListener('click', function() {

    const n = Math.random();
    if (n < 0.01) {
      this.textContent = '大吉';
    } else if (n < 0.1) {
      this.textContent = '末吉';
    } else {
      this.textContent = '中吉';
    }

  });

  btn.addEventListener('mousedown', function() {
    this.className = 'pushed';
  });
  btn.addEventListener('mouseup', function() {
    this.className = '';
  });
})();
