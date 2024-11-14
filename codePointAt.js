let names = "Hussain";

let result = names.codePointAt(2);

console.log(result);

for (let i = 0; i <= names.length - 1; i++) {
  let out = names.codePointAt(i);
  console.log(out);
}              // 115, 72, 117, 115, -----110



let name1 = "Anas";

let result1 = name1.codePointAt(1);

console.log(result);

for (let i = 0; i <= name1.length - 1; i++) {
  let out = name1.codePointAt(i);
  console.log(out);
}     // 97, 115
