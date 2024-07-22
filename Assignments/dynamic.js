//Dynamic programs

// Problem 1:

// Question understanding:
// 1.Integer Array of coins (coins) and integer amount (target amount) are given.
//2. Fewest amount of coins required to make up that amount(required)
//3. If amount of not possible to made return -1

//Program 1:
function coinChange(coins, amount) {

    let dp = new Array(amount+1).fill(Infinity)

    dp[0] = 0;


for (let coin of coins) {
    for (let x = coin; x <= amount; x++) {
        dp[x] = Math.min(dp[x], dp[x - coin] + 1);
    }
}


return dp[amount] === Infinity ? -1 : dp[amount];
}


console.log(coinChange([1, 2, 5], 11)) 

//output: 3




//Problem 5:

// Problem Understanding
//- climping a staircase - n step to reach top

function climbStairs(n) {
    if (n <= 2) {
        return n;
    }

    let dp = new Array(n + 1);
    dp[1] = 1; 
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}
console.log(climbStairs(4)); 
// Output: 5
console.log(climbStairs(5)); 
// Output: 8

