function solution(absolutes, signs) {
    let answer = 0;
    absolutes.forEach((el, index)=>{
        answer += signs[index] ? el : -el;
    })
    return answer;
}