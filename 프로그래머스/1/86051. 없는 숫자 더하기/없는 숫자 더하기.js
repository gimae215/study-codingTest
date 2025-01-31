function solution(numbers) {
    let arr = numbers.sort((a, b) => a - b);
    let result = 0;
    for(let i = 0; i<10; i++) {
        if(numbers[i] !== i) {
            result += i;
            numbers.splice(i, 0, i);
        } 
    }
    return result;
}