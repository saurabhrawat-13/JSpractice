function fabonnaci(n) {
    const fib = [0,1]
    for (let i = 2; i < n; i++){
        fib[i] = fib[i - 1] + fib[i -2]
    }
    return fib
}

console.log(fabonnaci(2));
console.log(fabonnaci(3));
console.log(fabonnaci(7));
