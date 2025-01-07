function solution(s) {
    let words = s.split(' ');
    words = words.map(word => {
        let result = '';
        for (let i = 0; i < word.length; i++) {
            if (i % 2 === 0) {
                result += word[i].toUpperCase(); // 짝수 인덱스 대문자
            } else {
                result += word[i].toLowerCase(); // 홀수 인덱스 소문자
            }
        }
        return result; // 변환된 단어 반환
    });

    return words.join(' '); // 공백으로 연결
}