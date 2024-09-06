const startBtn = document.querySelector('#startrecording')
const textDiv = document.getElementById('textdiv')
const recognition  =new webkitSpeechRecognition()
// console.log(recognition)
recognition.continuous = false
recognition.lang = 'en-US'
recognition.interimResults = false
recognition.maxAlternatives = 1;

startBtn.addEventListener('click', () =>{
    recognition.start()
})

recognition.addEventListener('result', (e) =>{
    const transcript = e.results[e.results.length - 1][0].transcript.trim()

    textDiv.innerHTML = transcript
})