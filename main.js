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
let resetButton = document.getElementById("reset-button")
let chance = 10 // 기회 횟수 설정
let gameOver = false;
let chanceArea = document.getElementById("chance-area")
let history = [] // 과거에 입력한 값들의 모음

playButton.addEventListener("click", play) // click 이벤트 발생 시 play 함수 실행
resetButton.addEventListener("click", reset)
userInput.addEventListener("focus", function(){ // 단순 로직은 익명 함수를 바로 생성 가능
    userInput.value = ""
})

// 랜덤번호 지정
function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1; // 1~100 사이 랜덤번호 지정
    console.log("정답", computerNum)
}

// 게임 시작 버튼
function play() {
    let userValue = userInput.value; // user-input 영역의 값을 userValue라는 변수에 저장

    // 입력값 없을 경우 알려주고 기회를 깎지 않음
    if (userValue == "") {
        resultArea.textContent="값을 입력해주세요."
        return;
    }

    if (userValue < 1 || userValue > 100) {
        resultArea.textContent="1과 100 사이 숫자를 입력해주세요."
        return; // 아래 함수들을 실행하지 않고 종료
    }

    if (history.includes(userValue)) {
        resultArea.textContent="이미 입력한 숫자입니다. 다른 숫자를 입력해주세요."
        return;
    }

    chance --;
    chanceArea.textContent = `남은 기회: ${chance}번`

    if (userValue < computerNum) { // 입력값이 랜덤번호보다 작은 경우
        resultArea.textContent = "Up!" // result-area의 텍스트를 "Up!"으로 변경
    } else if (userValue > computerNum) {
        resultArea.textContent = "Down!"
    } else if (userValue == computerNum) {
        resultArea.textContent = "정답!"
        gameOver = true
    }

    history.push(userValue) // 입력한 값 history 배열에 저장
    console.log(history)

    if (chance < 1) {
        gameOver = true
    }

    if (gameOver == true) {
        playButton.disabled = true // "Go!" 버튼 비활성화
    }
}


function reset() {
    // user-input 창 깨끗하게 정리
    userInput.value = "";
    // 신규 번호 생성
    pickRandomNum();
    // 결과값 출력 영역 리셋
    resultArea.textContent = "결과 값이 이곳에 출력됩니다!"
    // 히스토리 리셋
    history = []
    // 기회 5번으로 초기화
    chance = 10;
    chanceArea.textContent = `남은 기회: ${chance}번`
    // Go 버튼 재활성화
    playButton.disabled = false
}

pickRandomNum();
