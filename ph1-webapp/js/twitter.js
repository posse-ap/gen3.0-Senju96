import {A} from '../js/inner-modal-load.js';


let twitterCheckbox = document.getElementById('twitterCheckbox');
twitterCheckbox.checked = true;

let innerBtn = document.getElementById('innerBtn');
innerBtn.addEventListener('click', buttonClick);

function buttonClick(){
  if (twitterCheckbox.checked){
    console.log('ツイッター画面へ');
    const text = document.getElementById("textarea").value;
    console.log(text)
    // let afterClick = 
    // `<a href="http://www.twitter.com/share.php?u={URL}"></a>`;
    // window.location.href = 'https://qiita.com/shuntaro_tamura/items/99adbe51132e0fb3c9e9'; // 通常の遷移
    window.open(`https://twitter.com/compose/tweet?text=${text}`, '_blank'); // 新しいタブを開き、ページを表示
  } else {
    console.log('記録・投稿完了画面へ');
    let a = new A();
    // let afterClick = 
    // `<script src="../js/inner-modal-load.js"></script>`;
  }
}


// https://www.javadrive.jp/javascript/form/index3.html