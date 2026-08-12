function solution(strArr) {
    strArr.forEach((el, idx) => {
        if (idx % 2 == 0) {
            strArr[idx] = el.toLowerCase();
        } else {
            strArr[idx] = el.toUpperCase();
        }
    })
    return strArr;
}