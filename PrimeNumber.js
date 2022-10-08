function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log(`The Number ${n} is notPrime Number`);
      return false;
    }
  }
  console.log(
    `The Number ${n} is prime Number, Because its divisible by 1 and itself`
  );
  return true;
}
isPrime(6);
