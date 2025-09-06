process.stdin.resume();
process.stdin.setEncoding("utf-8");

let input = "";

process.stdin.on("data", function (chunk) {
  input += chunk;
});

process.stdin.on("end", function () {
  main(input);
});

function main(input) {
  console.log(input);
  let lines = input.trim().split("\n");

  let T = parseInt(lines[0]);
  let nums = lines[1]
    .trim()
    .split(" ")
    .map((n) => parseInt(n));

  console.log("T =", T);
  console.log("nums =", nums);
}
