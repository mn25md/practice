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
document.querySelector('form').addEventListener('submit', async (event) => {
  event.preventDefault(); // ページの再読み込みを防止

  // フォームデータを取得
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert('お問い合わせが送信されました。ありがとうございます！');
      event.target.reset(); // フォームをリセット
    } else {
      alert('エラーが発生しました。もう一度お試しください。');
    }
  } catch (error) {
    console.error('エラー:', error);
    alert('通信に失敗しました。ネットワークを確認してください。');
  }
});
// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // データのバリデーションや送信処理をここで行う
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  // 成功時のレスポンス
  res.status(200).send({ message: 'お問い合わせを受け付けました' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
