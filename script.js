// ① ページロード時にフェードイン
document.addEventListener("DOMContentLoaded", function () {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 1s";
        document.body.style.opacity = 1;
    }, 100);
});

// ② ボタンをクリックするとメッセージを表示
document.getElementById("greetButton").addEventListener("click", function () {
    document.getElementById("message").textContent = "ようこそ！このサイトを楽しんでください 😊";
});

// ③ 訪問履歴を表示
document.addEventListener("DOMContentLoaded", function () {
    let lastVisit = localStorage.getItem("lastVisit");
    let visitMessage = lastVisit ? `前回の訪問: ${lastVisit}` : "初めての訪問ですね！";
    document.getElementById("visitInfo").textContent = visitMessage;
    
    let now = new Date().toLocaleString();
    localStorage.setItem("lastVisit", now);
});

// ④ ダークモード切り替え
document.getElementById("toggleDarkMode").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
