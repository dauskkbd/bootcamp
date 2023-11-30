function runActivity() {
  let x = 4;
  let z = 5;
  let y = 0;

  if (x < 4 || z < 8) {
    y += 1;
    if (x > 5) {
      y += 1;
    } else {
      y -= 1;
    }
  } else {
    y += 1;
  }
  y += 1;
  console.log(y);
}
