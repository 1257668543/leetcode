// 尝试一下 暴力解法 再优化
/**
 * 
 * @param {number[]} piles 
 * @param {number} H
 * @return {number} 
 */
var minEatingSpeed = function(piles,H) {
    let lo = 1;
        hi = Math.max(...piles);
    for(let i = 1;i <= hi; i++){
        let time = 0
        for(let j = 0; j< piles.length; j++){
            time += Math.ceil(piles[j]/i)
        }
        if(time <= H)
        {
            lo = i
            break
        }
    }
    // console.log(lo);
    // 求出最大香蕉数，在某把中
    return lo;
}

console.log(minEatingSpeed([30,11,23,4,20],5));