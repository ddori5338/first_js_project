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


playButton.addEventListener("click", play);

function pickRandomNumber() {
    answer = Math.floor(Math.random() * 100) + 1;
    console.log('정답', answer);
}

function play() {
    let userValue = userInput.value;
    if (userValue < answer) {
        resultArea.textContent = 'up!';
    } else if (userValue > answer) {
        resultArea.textContent = 'down!';
    } else {
        resultArea.textContent = 'correct!';
    }
}

pickRandomNumber();