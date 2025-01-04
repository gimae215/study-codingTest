function solution(price, money, count) {
    // 총 필요한 금액 계산
    let totalCost = 0;
    for (let i = 1; i <= count; i++) {
        totalCost += price * i;
    }

    // 부족한 금액 계산
    const shortage = totalCost - money;

    // 부족한 금액이 없으면 0을 반환
    return shortage > 0 ? shortage : 0;
}