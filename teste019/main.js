const input = document.querySelector('input')

input.addEventListener("keypress", () => {
    let inputlength = input.value.length

    if (inputlength === 0) {
        input.value += '('
    }else if (input.length === 2) {
        input.value += ')'
    }
    
    
})