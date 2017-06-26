(function() {
  'use strict';

  var btn = document.getElementById('btn');

  btn.addEventListener('click', function() {
    var n = Math.random();
    if (n < 0.05) {
      this.textContent = '凶';
    } else if (n < 0.2) {
      this.textContent = '中吉';
    } else {
      this.textContent = '大吉';
    }
    // 結果をリストに格納する場合の処理
    // // var results = ['大吉', '中吉', '凶', '末吉'];
    // var results = ['大吉','大吉','大吉','大吉','大吉','大吉', '中吉', '凶', '末吉'];
    // // var n = Math.floor(Math.random() * 4);
    // var n = Math.floor(Math.random() * results.length);
    //   this.textContent = results[n];

    // switch文の場合の処理
    // switch (n) {
    //   case 0:
    //     this.textContent = '大吉';
    //     break;
    //   case 1:
    //     this.textContent = '中吉';
    //     break;
    //   case 2:
    //     this.textContent = '凶';
    //     break;
    //
    // }

    // 大吉、中吉、凶の出る確率が同様に確かな場合の処理
    // if (n === 0) {
    //   this.textContent = '大吉';
    // } else if (n === 1) {
    //   this.textContent = '中吉';
    // } else {
    //   this.textContent = '凶';
    // }
  });
  btn.addEventListener('mousedown', function() {
    this.className = 'pushed';
  });
  btn.addEventListener('mouseup', function() {
    this.className = '';
  });
})();
