var fib = function (n, obj = {}) {
  if (n in obj) return obj[n];
  if (n <= 1) return n;
  obj[n] = fib(n - 1, obj) + fib(n - 2, obj);
  return obj[n];
};

function fib_Tabulation(n) {
  if (n <= 1) return n;

  let array = Array[n + 1].fill(0);
  array[1] = 1;
  for (let i = 2; i <= n; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }
  return array[n];
}
