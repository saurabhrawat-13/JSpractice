function RecursiveFactorial(n) {
    if(n === 0){ 
      return 1
    }
    return n * RecursiveFactorial(n-1)
}

console.log(RecursiveFactorial(0));
console.log(RecursiveFactorial(5));
