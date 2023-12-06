function runActivity() {
  let x = "ABCDEFGHIJKLMNOPQRSTUVWXYZLMNOP";
  console.log(x.substring(0, 5));
  console.log(x.replace("LMNOP", "KINUT"));
  console.log(x.replaceAll("LMNOP", "KINUT"));
  console.log(x.includes("X"));

  let y = "9876543210";
  for (let i = 0; i < y.length; i++) {
    console.log(y.charAt(i));
    if (y.charAt(i) == 9) {
      console.log("this is nine");
    }
  }

  //   console.log(y.charAt(y.length - 1));
  //   console.log(y.indexOf("876"));

  //   let z = "CJ,Keith,Rendell,Vance";
  //   let z_array = z.split(",");
  //   console.log(z_array);
  //   console.log(z_array[1]);
}
