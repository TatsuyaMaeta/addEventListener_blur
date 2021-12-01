// やろうとしている事
// typeがtimeになっているinputタグ(※a)に対して
// 別のインプットタグが数値入力されてカーソルが離れた際に
// aに数値を追加されて入力される

const btnA = document.querySelector("#btnA");
const btnB = document.querySelector("#btnB");

// クリックAのボタンを押した際に実行
btnA.addEventListener("click", (event) => {
    //    button.textContent = `Click count: ${event.detail}`;
    console.dir(btnA.innerHTML);
    const timeInput = document.querySelector("#time_input");
    console.dir(timeInput);

    timeInput.value = "06:34";
    alert("クリックAを押したので時間を書き換えました");
});

const addTime = document.querySelector("#addMinutes");
// インプットタグを入力してカーソルが離れた時点で起動
// 素のJSだとaddEventListenerでblurを第一引数に渡してあげると
// インプットタグからフォーカスが離れた時点で実行される
// 参考リンク
// https://developer.mozilla.org/ja/docs/Web/API/Element/blur_event
addTime.addEventListener("blur", (event) => {
    const timeInput = document.querySelector("#time_input").value;

    // 入力された時間(分)をstring→numberとして型変換する
    let min = parseInt(document.querySelector("#addMinutes").value, 10);

    console.log(typeof min, min);

    // splitメソッドを用いて特定の文字列で分割して配列にする
    //https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split
    const arrT = timeInput.split(":");

    //分だけ型変換して加減できる様にする
    const arrMin = parseInt(arrT[1], 10);

    console.log(typeof arrMin, arrMin);
    // console.log(typeof arrT[1], arrT[1]);
    let viaHour;
    let changedHour;
    let changedMin = arrMin + min;
    console.log(changedMin);

    let setValue;
    if (changedMin >= 70) {
        // 分の合計値が70以上
        changedMin = changedMin - 60;

        changedHour = parseInt(arrT[0], 10) + 1;
        console.log(changedHour);

        setValue = changedHour + ":" + changedMin;
    } else if (changedMin < 70 && changedMin > 60) {
        // 分の合計値が70未満61以上
        changedMin = changedMin - 60;
        changedHour = parseInt(arrT[0], 10) + 1;

        console.log(typeof changedHour, changedHour);
        console.log(changedHour, changedMin);
        setValue = changedHour + ":0" + changedMin;
    } else if (changedMin == 60) {
        // 分の合計値が60
        changedMin = "00";
        changedHour = parseInt(arrT[0], 10) + 1;
        setValue = changedHour + ":00";
    } else {
        // 分の合計値が60未満
        setValue = arrT[0] + ":" + changedMin;
    }
    document.querySelector("#time_inputB").value = setValue;

});

const lengthCheck = function (param) {
    let length = param.toString();

    if (length == 1) {
    }else {

    }
};
