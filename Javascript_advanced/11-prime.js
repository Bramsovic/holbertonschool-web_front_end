function countPrimeNumbers() {
  let count = 0;

  for (let n = 2; n <= 100; n += 1) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(n); i += 1) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) count += 1;
  }

  return count;
}

const start = performance.now();

setTimeout(() => {
  for (let i = 0; i < 100; i += 1) {
    countPrimeNumbers();
  }
}, 0);

const end = performance.now();

console.log(
  `Execution time of calculating prime numbers 100 times was ${end - start} milliseconds.`
);
