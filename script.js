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

// ③ 訪問履歴を表示（localStorage を使用）
document.addEventListener("DOMContentLoaded", function () {
    let lastVisit = localStorage.getItem("lastVisit");
    let visitMessage = lastVisit ? `前回の訪問: ${lastVisit}` : "初めての訪問ですね！";
    document.getElementById("visitInfo").textContent = visitMessage;
    
    let now = new Date().toLocaleString();
    localStorage.setItem("lastVisit", now);
});

// ④ ダークモード切り替え機能
const darkModeButton = document.getElementById("toggleDarkMode");

// ページ読み込み時に、保存されたダークモードの状態を取得
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
});

// ボタンクリックでダークモードのON/OFFを切り替え
darkModeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // ダークモードの状態を保存
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});
