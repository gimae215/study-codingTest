function solution(s) {
    let result = [];
    let arr = s.toLowerCase().split(" ");
    
    for (let i = 0; i < arr.length; i++) {
        
        let word = Array.from(arr[i]);
        
        if (word.length > 0) {
            word[0] = word[0].toUpperCase();
        }
        
        result.push(word.join(""));
    }

    return result.join(" ");
}
