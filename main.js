import './style.css'
import Validator from 'jutge-problem-validator'
document.getElementById('main').addEventListener('click', async () => {
    const file = document.getElementById('file').files[0]
    if (!file) return alert('Please select a file')
    const validator = new Validator()
    validator.setOptions(getOptions())
    const code = await file.text()
    const result = await validator.validate(code)
    document.getElementById('output').innerText = JSON.stringify(result, null, 2)
})

function getOptions() {
    const isRecursive = document.getElementById('recursive').checked
    const isIterative = document.getElementById('iterative').checked
    const useLib = document.getElementById('useLib').value.split(',').map(x => x.trim()).filter(Boolean)
    const doNotUseLib = document.getElementById('noUseLib').value.split(',').map(x => x.trim()).filter(Boolean)
    return {
        programType: { recursive: isRecursive, iterative: isIterative }, libraries: {
            forced: useLib,
            prohibited: doNotUseLib
        }
    }
}

