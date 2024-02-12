// 1. 랜덤 번호 지정
// 2. 유저가 번호를 입력, go 버튼 누름
// 2-1. 맞추면 맞췄습니다.
// 2-2. 작으면 다운
// 2-3. 크면 업
// 3. reset버튼을 누르면 리셋
// 4. 5번의 기회를 다 쓰면 게임 종료. 버튼 disable
// 5. 유저가 1~100 범위 밖의 숫자를 입력하면 알려주고 기회를 깎지 않는다.
// 6. 이미 입력한 숫자를 또 입력하면 알려주고 기회를 깎지 않는다.

let answer = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];
let upCat = document.getElementsByClassName("up-cat")[0];
let downCat = document.getElementsByClassName("down-cat")[0];
let punchCat = document.getElementsByClassName("punch-cat")[0];
let spaceCat = document.getElementsByClassName("space-cat")[0];


playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("mousedown", function () {
    userInput.value = "";
});


function pickRandomNumber() {
    answer = Math.floor(Math.random() * 100) + 1;
    console.log('정답', answer);
}

function play() {
    let userValue = userInput.value;
    if (userValue < 1 || userValue > 100) {
        resultArea.textContent = "1과 100사이 숫자를 입력해 주세요";
        return;
    }
    if (history.includes(userValue)) {
        resultArea.textContent = "이전에 입력했던 숫자입니다";
        return;
    }
    chances--;
    chanceArea.textContent = `남은 기회: ${chances}번`;
    if (userValue < answer) {
        resultArea.textContent = 'UP!';
        upCat.style.display = "block";
        downCat.style.display = "none";
    } else if (userValue > answer) {
        resultArea.textContent = 'DOWN!';
        upCat.style.display = "none";
        downCat.style.display = "block";
    } else {
        resultArea.textContent = 'correct!';
        gameOver = true;
    }
    history.push(userValue);

    if (chances <= 0) {
        gameOver = true;
    }
    if (gameOver) {
        playButton.disabled = true;
        upCat.style.display = "none";
        downCat.style.display = "none";
        if (chances <= 0) {
            resultArea.textContent = '실패!';
            resultArea.style.color = "red";
            punchCat.style.display = "block";
        } else {
            resultArea.textContent = '성공!';
            resultArea.style.color = "rgb(106, 255, 0)";
            spaceCat.style.display = "block";
        }
    }
}

function reset() {
    // user input 창 정리, 새로운 번호 생성
    userInput.value = "";
    pickRandomNumber();
    resultArea.textContent = '여기에 결과가 나온다';
    chances = 5;
    chanceArea.textContent = `남은 기회: ${chances}번`;
    playButton.disabled = false;
    gameOver = false;
    history = [];
    upCat.style.display = "none";
    downCat.style.display = "none";
    punchCat.style.display = "none";
    spaceCat.style.display = "none";
    resultArea.style.color = "white";
}

pickRandomNumber();