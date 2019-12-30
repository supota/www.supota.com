var images = document.getElementsByTagName('div'); // ページ内の画像取得
var loading = document.getElementById('loading'); // ローディング全体
var percent = document.getElementById('loading-percent-text'); // パーセントのテキスト部分
var gauge = document.getElementById('loading-gauge'); // ゲージ
var imgCount = 0;
var baseCount = 0;
var gaugeMax = 234; // ゲージの幅指定
var current;

// 画像の読み込み
for (var i = 0; i < images.length; i++) {
    var img = new Image(); // 画像の作成
    // 画像読み込み完了したとき
    img.onload = function () {
        imgCount += 1;
    };
    // 画像読み込み失敗したとき
    img.onerror = function () {
        imgCount += 1;
    };
    img.src = images[i].src; // 画像にsrcを指定して読み込み開始
}

/*
// ローディング処理
var nowLoading = setInterval(function() {
    if(baseCount <= imgCount) { // baseCountがimgCountを追い抜かないようにする
        // 現在の読み込み具合のパーセントを取得
        current = Math.floor(baseCount / images.length * 100);
        // パーセント表示の書き換え
        percent.innerHTML = current;
        // ゲージの変更
        gauge.style.width = Math.floor(gaugeMax / 100 * current) + 'px';
        baseCount += 1;
        // 全て読み込んだ時
        if(baseCount == images.length) {
            // ローディング要素の非表示
            loading.style.display = 'none';
            // ローディングの終了
            clearInterval(nowLoading);
        }
    }
}, 40); */
function close_hamburger() {
    document.getElementById("hamburger-check").checked = false;
}
var scroll = new SmoothScroll('a[href*="#"]', {
    header: '[data-scroll-header]'
});