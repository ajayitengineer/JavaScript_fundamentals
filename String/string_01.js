// (Q.) - What is String ?
// (A.) - String is squence of charactors used to represent Text, string is immutable.

const data = "john";
console.log(data[0]); // can get char with index
data[0] = "A"; // will not work , as string is immutable.
console.log(data);

console.log(data.length);

// case conversion
console.log(data.toUpperCase()); // uppercase
console.log(data.toLowerCase()); // lowrcase

// Searching
const str = "hello world I am learning javascript";

console.log(str.indexOf("o"));
console.log(str.lastIndexOf("o"));
console.log(str.includes("ld"));
console.log(str.startsWith("he"));
console.log(str.endsWith("t"));

// substring

// slice(start,end) -> end exclude

const testString = "java script";
console.log(testString.slice(0, 4));
console.log(testString.slice(0));

// substring is same as slice but negative index not allow negative index treated as 0.

// replace
// str.replace(match value,new value)
const replaceString = testString.replace("java", "python");
console.log(replaceString);
// case senstive
const replaceString1 = testString.replace(/Java/i, "python");
console.log(replaceString1);
const poem = "one two one two";
console.log(poem.replaceAll("one", "ONE"));
//spliting and joining

const arr = str.split(" ");
console.log(arr);
const string = arr.join("|");
console.log(string);

for (let data of arr) {
  console.log(data);
}

//trim
const rawStr = "    hello  ";
console.log(rawStr.trim());
console.log(rawStr.trimStart());
console.log(rawStr.trimEnd());

// Template Literals
const message = "Good morning";
console.log(`Hello wolrd this is message from my side ${message}`);

// Escape Characters
const quotMessage = 'Hello world \nthis is "javascript"';
console.log(quotMessage);

// Advanced String Methods
const str1 = "hello world";
console.log(str1.repeat(4));
console.log(str1.padStart(15, "@"));
console.log(str1.padEnd(15, "@"));

// Reverse a string
const reverseMessage = message.split("").reverse().join("");
console.log(reverseMessage);
