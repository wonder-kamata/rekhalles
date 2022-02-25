
const countUp = () => {
  let rate
  rate = Math.random()
  rate += 0.5
  rate = Math.round(rate*10)/10
  return rate
}

const ex = () => {
  let example
  example = Math.round(123.456)
  return example
}
// let ugoki = countUp();

// setInterval(() => {
//   const rate = countUp();
//   console.log(rate);
// }, 1000);

// ugoki = countUp();
// console.log(ugoki);

window.onload=function(){
  var date=new Date();

  document.getElementById("dollars").innerHTML = ex();

  setInterval(() => {
    const rate = countUp();
    console.log(rate);
    var date=new Date();
    // document.getElementById("dollars").innerHTML = rate;
    document.getElementById("dollars").innerHTML = rate;
  }, 1000);

// document.getElementById("dollars").innerHTML = date.getDate();
}
