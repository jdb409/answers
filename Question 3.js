function changePossibilities(amount,denominations){
    let coinsLeft = denominations.length;
    return helper(amount, denominations, coinsLeft);
  }
  
  function helper(amount, denominations, coinsLeft){
    if (amount === 0){
      return 1;
    }
    else if (amount < 0){
      return 0;
    }
    if (coinsLeft <= 0 && amount >= 1 ){
      return 0
    }
    return helper(amount, denominations, coinsLeft-1) +
      helper(amount - denominations[coinsLeft-1], denominations, coinsLeft)
  }
  