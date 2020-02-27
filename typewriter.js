const sentence = "hello there from lighthouse labs\n";
const typewriter = (typed) => {
for (let i = 0; i < typed.length; i++) {
  setTimeout(() => {
    process.stdout.write(typed[i]); // print the char here
  },i * 100) // <= 1s delay to make it noticeable. Can dial it down later.
  }
}
sentence;
