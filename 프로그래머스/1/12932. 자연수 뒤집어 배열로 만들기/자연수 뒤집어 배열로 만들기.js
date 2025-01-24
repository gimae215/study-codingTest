function solution(n) {
    let arr = [...n.toString()];
    let result = [];
    for(let i=arr.length-1; i>=0; i--) {
        result.push(+arr[i]);
    }
    return result;
}