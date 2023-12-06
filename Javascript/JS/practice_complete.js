function runActivity() {
  let vowels = "aeiou";
  let consonant = "bcdfghjklmnpqrstvwxyz";
  let vowel_count = 0;
  let consonant_count = 0;

  while (true) {
    let word = prompt("Give me a word or words. (0) Stop");
    if (word == 0) {
      break;
    } else {
      for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
          if (word[i] == vowels[j]) {
            vowel_count++;
          }
        }
      }
      for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < consonant.length; j++) {
          if (word[i] == consonant[j]) {
            consonant_count++;
          }
        }
      }
      console.log(vowel_count + " || " + consonant_count);
    }
  }
}
