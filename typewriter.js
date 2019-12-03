const sentence = "hello there from lighthouse labs\n";
const typewriter = (typed) => {
for (let i = 0; i < typed.length; i++) {
  setTimeout(() => {
    process.stdout.write(typed[i]); // print the char here
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
