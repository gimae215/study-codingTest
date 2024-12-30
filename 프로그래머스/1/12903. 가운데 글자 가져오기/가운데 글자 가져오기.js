function solution(s) {
    var arr = [...s];
    var mid = Math.floor(s.length / 2);
    if (arr.length % 2 == 0) {
        return arr[mid-1] + arr[mid];
    } else {
        return arr[mid];
    }
}