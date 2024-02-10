// 랜덤번호 지정 (Done)
// 유저가 번호 입력 + Go라는 버튼 누름
// 만약 유저가 랜덤 번호를 맞추면, "맞췄습니다!"
// 랜덤번호 < 유저번호, "Down!"
// 랜덤번호 > 유저번호, "Up!"
// Reset 버튼 누르면 게임 리셋
// 5번의 기회를 다 쓰면 게임 종료 (더 이상 추측 불가 = 버튼 disable)
// 유저가 1 ~ 100 범위 밖 숫자를 입력하면, 알려주고, 기회를 깎지 않음
// 유저가 이미 입력한 숫자를 입력하면, 알려주고, 기회를 깎지 않음

let computerNum = 0
let playButton = document.getElementById("play-button") // play-button이라는 ID값을 가진 element를 가져옴
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")

playButton.addEventListener("click", play) // click 이벤트 발생 시 play 함수 실행

// 랜덤번호 지정
function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1; // 1~100 사이 랜덤번호 지정
    console.log("정답", computerNum)
}

// 게임 시작 버튼
function play() {
    let userValue = userInput.value; // user-input 영역의 값을 userValue라는 변수에 저장
    if (userValue < computerNum) { // 입력값이 랜덤번호보다 작은 경우
        resultArea.textContent = "Up!" // result-area의 텍스트를 
    } else if (userValue > computerNum) {
        resultArea.textContent = "Down!"
    } else if (userValue == computerNum) {
        resultArea.textContent = "정답"
    }
}

pickRandomNum();
