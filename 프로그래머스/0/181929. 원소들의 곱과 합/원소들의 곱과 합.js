function solution(num_list) {
    let sum = num_list.reduce((a, b) => (a + b));
    let prod = num_list.reduce((a, b) => (a * b));
    
    return sum ** 2 > prod ? 1 : 0;
}