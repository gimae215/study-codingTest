function solution(t, p) {
    let cnt = 0;
    let str = '';
    for(let i=0; i <= t.length-p.length; i++) {
        str = Number(t.slice(i, i+p.length));
        if(str <= Number(p)) cnt++;
    }
    return cnt;
}