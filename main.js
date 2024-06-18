import './style.css'
import Validator from 'jutge-problem-validator'

let showingOptions = {
  recursive: false,
  iterative: false
}

let options = {
  programType: {},
  libraries: {
    forced: [],
    prohibited: []
  }
}

const [recCheckbox, iterCheckbox] = document.querySelectorAll('.checkbox')
const [recSwitch, iterSwitch] = document.querySelectorAll('.switch')

const [forcedLib, prohibitedLib] = document.querySelectorAll('.input')

document.getElementById('main').addEventListener('click', async () => {
  const file = document.getElementById('file').files[0]
  if (!file) return alert('Please select a file')
  const validator = new Validator()
  validator.setOptions(options)
  const code = await file.text()
  const result = await validator.validate(code)
  document.getElementById('result').innerText = JSON.stringify(result, null, 2)
})

recCheckbox.addEventListener('click', () => {
  let state = recCheckbox.checked
  showingOptions.recursive = state
  if (state) options.programType.recursive = false
  else {
    delete options.programType.recursive
    recSwitch.checked = false
  }

  recSwitch.style.visibility = state ? 'visible' : 'hidden'
  setOptions()
})

iterCheckbox.addEventListener('click', (e) => {
  let state = iterCheckbox.checked
  showingOptions.iterative = state
  if (state) options.programType.iterative = false
  else {
    delete options.programType.iterative
    iterSwitch.checked = false
  }
  iterSwitch.style.visibility = state ? 'visible' : 'hidden'
  setOptions()
})

recSwitch.addEventListener('click', () => {
  let state = recSwitch.checked
  options.programType.recursive = state
  setOptions()
})

iterSwitch.addEventListener('click', () => {
  let state = iterSwitch.checked
  options.programType.iterative = state
  setOptions()
})

forcedLib.addEventListener('input', (e) => {
  options.libraries.forced = e.target.value.split(',').map(lib => lib.trim()).filter(Boolean)
  setOptions()
})

prohibitedLib.addEventListener('input', (e) => {
  console.log(e.target.value.split(',').map(lib => lib.trim()))
  options.libraries.prohibited = e.target.value.split(',').map(lib => lib.trim()).filter(Boolean)
  setOptions()
})

function setOptions() {
  document.getElementById('options').innerText = JSON.stringify(options, null, 2)
}

setOptions()

