function solution(food) {
    var answer = '';
    for(let i=1; i<food.length; i++) {
        for(let j=1; j<=Math.floor(food[i]/2); j++) {
            answer += i;
        }
    }
    answer += "0";
    for(let i=food.length-1; i>=0; i--) {
        for(let j=1; j<=Math.floor(food[i]/2); j++) {
            answer += i;
        }
    }
    return answer;
}