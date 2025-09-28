// What is Generator in java script ?
// Generator special type of java script function whose execution can be pause and resume.
// yield key word use to pause execution and return a value.
// next() use to start execution.

function* generator() {
  yield "hello world";
  yield "hello world again";
  yield "again hello world and again";
  yield "bye world";
}

let gen = generator();
let result;
do {
  result = gen.next();
  if (!result.done) {
    console.log(result.value);
  }
} while (!result.done);
