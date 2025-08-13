






function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = ''
}

function displayKeyPress(event) {
  const display = document.getElementById('keyPressDisplay')
  if (display) {
    display.textContent = `Key pressed: ${event.key}`
  }
}

function displayUserInput() {
  const input = document.getElementById('textInput')
  const display = document.getElementById('textInputDisplay')
  if (input && display) {
    display.textContent = `You typed: ${input.value}`
  }
}

function setupEventListeners() {
  const changeBtn = document.getElementById('changeColorButton')
  const resetBtn = document.getElementById('resetColorButton')
  const input = document.getElementById('textInput')

  if (changeBtn) {
    changeBtn.addEventListener('click', changeBackgroundColor)
  }

  if (resetBtn) {
    resetBtn.addEventListener('dblclick', resetBackgroundColor)
  }

  if (input) {
    input.addEventListener('input', displayUserInput)
  }

  document.addEventListener('keydown', displayKeyPress)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners
}