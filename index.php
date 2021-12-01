<?php 
echo "OK";
?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>こんにちは</h1>
    <label for="date">
        <input type="time" class="inp" id="time_input" value="16:41">
    </label>
        <label for="date">
        <input type="time" class="inp" id="time_inputB" >
    </label>
    <button id="btnA">クリックA</button>
    <input type="number" min="1" max="30" id="addMinutes">
    <script src="js/index.js"></script>
</body>
</html>