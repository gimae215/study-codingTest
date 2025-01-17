function solution(array, commands) {
    const answer = [];
    
    for (let i=0; i<commands.length; i++) {
        const [x, y, z] = commands[i];
        const slice_arr = array.slice(x - 1, y);
        const sort_arr = slice_arr.sort((a, b) => a - b);
        answer.push(sort_arr[z - 1]);
    }

    return answer;
}