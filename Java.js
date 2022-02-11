
const countUp = () => {
  let rate = Math.random()
  rate += 0.5
  return rate
}

let ugoki = countUp();

setInterval(() => {
  const rate = countUp();
  console.log(rate);
}, 1000);

ugoki = countUp();
console.log(ugoki);
