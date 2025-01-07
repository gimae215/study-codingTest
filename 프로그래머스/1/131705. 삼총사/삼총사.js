function solution(number) {
    let count = 0;

    // 배열의 길이가 3 이상이므로 3중 루프를 사용하여 모든 조합을 탐색
    for (let i = 0; i < number.length - 2; i++) {
        for (let j = i + 1; j < number.length - 1; j++) {
            for (let k = j + 1; k < number.length; k++) {
                if (number[i] + number[j] + number[k] === 0) {
                    count++;
                }
            }
        }
    }
    return count;
}