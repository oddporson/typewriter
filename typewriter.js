const sentence = "hello there from lighthouse labs\n";
const typewriter = (s) => {
for (let i = 0; i < s.length; i++) {
  setTimeout(() => {
    process.stdout.write(s[i]); // print the char here
  },i * 100) // <= 1s delay to make it noticeable. Can dial it down later.
  }
}
typewriter(sentence);

// const sentence = "hello there from lighthouse labs\n";
// for (const [i, char] of sentence.split("").entries()) {
//   //process.stdout.write(char);
//   setTimeout(() => {
//     process.stdout.write(char); // print the char here
//   },i *  500) // <= 1s delay to make it noticeable. Can dial it down later.
// }
