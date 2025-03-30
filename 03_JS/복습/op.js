<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
        const API_KEY = '발급받은 API KEY';
        const API_URL = 'https://api.openai.com/v1/chat/completions'; //api document 참고함

        function sendMessage(message) {
  const messages = [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: message }
  ];

  $.ajax({
    url: API_URL,
    type: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    data: JSON.stringify({
        model: 'gpt-3.5-turbo',
        temperature: 0.5,
        n: 1,
        messages: messages
    }),
    success: function(data) {
      console.log(data);
      if (data.choices && data.choices.length > 0) {
        const assistantReply = data.choices[0].message.content;
        displayMessage(assistantReply, 'assistant');
      } else {
        console.error('API 응답 실패');
      }
    },
    error: function(xhr, status, error) {
      console.error('api 요청 에러 확인', error);
    }
  });
}

function displayMessage(message, role) {
  const chatContainer = $('#chat-container');
  const messageElement = $('<div>').addClass(role).text(message);
  chatContainer.append(messageElement);
}

// HTML 파일이 로드될 때 호출
$(document).ready(function() {
  const specificMessage = '요청 메세지'; // 특정 문구
  sendMessage(specificMessage);
});
</script>
