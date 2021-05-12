function maxChar(str) {
    let chars = {}
    for (let char of str){
        console.log(char)
        chars[char] = chars[char] + 1 || 1
    }
    let max = Math.max(...Object.values(chars))
    console.log(max)
    return Object.keys(chars).find(key => chars[key] === max);
}

console.log(maxChar("abccccccd") == "c")
console.log(maxChar("apple 1231111") == "1")