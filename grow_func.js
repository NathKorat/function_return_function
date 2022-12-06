function zeroPadd(num, width){
    let num_st = String(num)
    while(num_st.length < width) num_st = "0" + num_st;

    return num_st
}

const print = console.log

function printFarmInventory(cows, chickens, pigs){
   print(`${zeroPadd(cows, 3)} cows`)
   print(`${zeroPadd(chickens, 3)} chickens`)
   print(`${zeroPadd(pigs, 3)} pigs`)
}

printFarmInventory(5,30, 10)

