function solution(s, n) {
    let result = "";

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === " ") {
            result += " ";
        } else if (char >= "a" && char <= "z") {
            result += String.fromCharCode(((char.charCodeAt() - 97 + n) % 26) + 97);
        } else if (char >= "A" && char <= "Z") {
            result += String.fromCharCode(((char.charCodeAt() - 65 + n) % 26) + 65);
        }
    }

    return result;
}