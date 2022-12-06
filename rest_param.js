function sum(...nums){
    let result = 0
    for(let i of nums) result += i;

    return result;
}

console.log(sum(2,3, 5, 6))