// 1.display number in text box
function displayNumber(num){
    result.value+=num;
}

// 2.clear text box
function clearText(){
result.value=''
}

//evaluate exp
function evaluateExp(){
    result.value=eval(result.value)
}

//remove last item from text box
function removeLast(){
    result.value=result.value.slice(0,-1)
}