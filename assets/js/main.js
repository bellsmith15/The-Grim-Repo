// global variables

// remove below code and replace with actual code, just for testing purposes

let test = 'test'

// main

console.log(test)

// play background audio

var audio1 = document.getElementById('audio1')
var isPlaying = false

function togglePlay() {
  isPlaying ? audio1.pause() : audio1.play()
}

audio1.onplaying = function () {
  isPlaying = true
}
audio1.onpause = function () {
  isPlaying = false
}

/* Start Button */
function startButton() {
  window.open('scene1.html')
}

// Scene 2 Routes
function Scene3() {
  window.location.replace('scene3.html')
}

function Scene2_Extra() {
  window.location.replace('scene2-extra.html')
}

function takeToken() {
  localStorage.setItem(
    'tokenSymbol',
    document.getElementById('tokenSymbol').value
  )
}
