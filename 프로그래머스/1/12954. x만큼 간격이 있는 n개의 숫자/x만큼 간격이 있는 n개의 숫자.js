function solution(x, n) {
    let num = 0;
    var answer = [];
    for(i=0;i<n;i++) {
        num += x;
        answer[i] = num;
    }
    return answer;
}