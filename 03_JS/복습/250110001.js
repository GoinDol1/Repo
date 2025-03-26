// ----------- 요소 선택 ------------------------------
// id 속성: color-box
// id 속성: color-input
let applyButton = document.getElementById("apply-button");   // id 속성: apply-button
// id 속성: message

// 버튼 클릭 이벤트 핸들러 applyButton.onclick = function () {
applyButton.onclick = function () {
    // 선택된 색상 값 조회(가져오기)
    colorValue = document.getElementById("color-input");
    console.log(colorValue);
    // #color-box 요소의 스타일 중 배경색 변경
    colorBox = document.getElementById("color-box");            
    colorBox.style.backgroundColor = colorValue.value;
    // #message 요소에 변경된 배경색 정보로 출력
    message = document.getElementById("message");
    message.innerText = "현재 배경색은 " + colorValue.value + "입니다.";
};
