function solution(n) {
    n = n.toString().split("").map(Number); 
    let temp = 0;
    for (let i = 0; i < n.length; i++) {
        for (let j = i + 1; j < n.length; j++) {
            if (n[i] < n[j]) {
                // 값 교환
                temp = n[i];
                n[i] = n[j];
                n[j] = temp;
            }
        }
    }
    return parseInt(n.join(""));
}