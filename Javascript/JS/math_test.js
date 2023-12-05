function runActivity() {
  console.log(Math.PI);
  console.log(Math.SQRT2);
  console.log(Math.SQRT1_2);
  console.log(Math.round(5.6));
  console.log(math.ceil(5.1));
  console.log(math.floor(5.9));
  console.log(math.trunc(5.9));
  console.log(Math.sign(-4));
  console.log(Math.sqrt(4));
  console.log(Math.abs(-400));
  console.log(Math.min(40, 600, 2));
  console.log(Math.max(40, 600, 2));
  let x = [60, 100, 85];
  console.log(Math.min.apply(Math, x));
  console.log(Math.max.apply(Math, x));
  console.log(Math.random());
}
