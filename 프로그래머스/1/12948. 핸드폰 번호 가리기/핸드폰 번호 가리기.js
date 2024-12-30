function solution(phone_number) {
    let numArr = [...phone_number];

    for(i=0; i<numArr.length-4; i++) {
        numArr[i] = "*"
    }

    return numArr.join("");
}
