var isHappy = function(num,totalArray) {
    if(!totalArray) {
        totalArray = []
    }
    var strArray = num.toString().split('')
    console.log('digits', strArray)
    var intDigits = strArray.map((strNum)=> {
        return parseInt(strNum)
    })
    console.log('intDigits', intDigits)
    var total = 0
    for (let i = 0; i < intDigits.length; i++) {
            console.log('square root', Math.pow(intDigits[i], 2))
            total += Math.pow(intDigits[i], 2)
        
    }
    console.log('total!!',total)
    console.log('totalArray.indexOf(total)', totalArray.indexOf(total))
    if(totalArray.indexOf(total) === -1){
        totalArray.push(total)
        if(total === 1) {
            console.log('THIS NUMBER IS HAPPY!!!')
            return true
        } else {
            return isHappy(total, totalArray)
        }
    } else {
        return false
    }
};


console.log('r u happy ?', isHappy(2))
