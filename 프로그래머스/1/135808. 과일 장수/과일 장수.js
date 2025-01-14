function solution(k, m, score) {
    let scoreArr = score.sort((a, b) => a - b);
    let arr = [];
    let cnt = 0;

    for(i=scoreArr.length-1; i>=0; i--) {
        arr.push(scoreArr[i]);
        if(arr.length === m) {
            cnt += arr[m - 1] * m;
            arr = [];
        }
    }
    return cnt;
}