// export class A {
//   constructor() {
//   }
// }
export class A {
  constructor() {
const innerBtn = document.querySelector('.inner-btn');
const innerModal = document.querySelector('.inner-modal');
const innerCloseBtn = document.querySelector('.inner-close');
const innerOverlay = document.querySelector('.inner-overlay');

  innerModal.classList.add('active');
  innerOverlay.classList.add('active');

innerCloseBtn.addEventListener('click', function(){
  innerModal.classList.remove('active');
  innerOverlay.classList.remove('active');
  showFirst.classList.remove("change");
  showLater.classList.add("change");

});

innerOverlay.addEventListener('click', function() {
  innerModal.classList.remove('active');
  innerOverlay.classList.remove('active');
});


// 表示・非表示を切り替える要素を取得
const showFirst = document.getElementById("load");
const showLater = document.getElementById("comp");

// 表示・非表示を切り替える関数
function switchDisplay() {
  showFirst.classList.add("change");
  showLater.classList.remove("change");
}

// switchDisplayを3秒後に実行
setTimeout(() => {
  switchDisplay();
}, 3000);
  //   this.current = new B();
  }
}

