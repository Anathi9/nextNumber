function nextNumber(...arg){
    let count = 0;
    while(count < arg.length)
    console.log(arg[count])
count++;
}
console.log(nextNumber(2, 4, 5, 7, 8, 11))