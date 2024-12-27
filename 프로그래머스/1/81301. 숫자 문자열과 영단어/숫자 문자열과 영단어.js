function solution(s) {
    let en = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    let num = ["0","1","2","3","4","5","6","7","8","9"]
    var answer = s;
    for(i=0; i<en.length; i++) {
        if(s.includes(en[i])) {
            answer = answer.replaceAll(en[i], num[i]);
        }
    }
    return parseInt(answer);
}