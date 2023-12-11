function runActivity() {
  const vegetables_temp = ["kale", "okra", "moringa"];
  const vegetable = new Set(vegetables_temp);
  vegetable.add("pumpkin");
  console.log(vegetables);
  vegetable.add("kale");
  console.log(vegetables);

  vegetables.forEach(function (vegetable) {
    console.log(vegetable);
  });
  console.log(vegetables.delete("moringa"));
  console.log(vegetables.has("kale"));
  console.log(vegetable.clear());
}
