document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // 送信を防止し、JavaScriptで処理する

    // フォームの入力値を取得
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // デバッグ用: 入力内容をコンソールに出力
    console.log("お名前:", name);
    console.log("メールアドレス:", email);
    console.log("メッセージ:", message);

    // 成功メッセージを表示（後でサーバー処理を追加する場合は必要に応じて調整）
    alert("お問い合わせが送信されました。ありがとうございます。");
    
    // フォームをリセット
    form.reset();
  });
});
