document.addEventListener("DOMContentLoaded", () => {
    console.log("PuzzleRunページが正常に読み込まれました。");

    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("メッセージが送信されました。ご連絡ありがとうございます！");
        form.reset();
    });
});