
 function removeZero(n){
     let spliceNum = 0
   for (const char of n){
        if (char == '0') spliceNum++;
   }
   return n.splice(spliceNum)
}

function reverseInt(n) {
    if(n == 0){
        return n
    }
    let number = n.toString().split('')
    let isNegative = false
    console.log(number)
    if(number[0] === '-'){
        isNegative = true
        number = number.splice(1)
        console.log(number)
    }
    let reverseN = number.reverse()
    if (reverseN[0] == '0'){
        let num = removeZero(reverseN)
        reverseN = num
    }
    
    console.log(reverseN)
    if(isNegative) {
        let negN = "-" + reverseN.join('')
        console.log(negN)
        return parseInt(negN)
    }
    return parseInt(reverseN.join(''))
}

console.log(reverseInt(15) === 51)

console.log(reverseInt(500) === 5)

console.log(reverseInt(-500) === -5)
console.log(reverseInt(-15) === -51)