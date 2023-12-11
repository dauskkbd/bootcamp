function runActivity() {
  const fruit_prices = new Map([
    ["apple", 10],
    ["banana", 20], // ["keys", values]
    ["orange", 30],
  ]);
  console.log(fruit_prices.size);

  console.log(fruit_prices.has("banana"));
  console.log(fruit_prices.values());
  console.log(fruit_prices.keys());
  console.log(fruit_prices.entries());
  console.log(fruit_prices.get("apple"));
  fruit_prices.set("melon", 40);
  fruit_prices.delete("orange");
  fruit_prices.forEach(function (value, key) {
    console.log(key + " : " + value + " each");
  });
}
