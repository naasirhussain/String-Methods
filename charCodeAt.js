let names = "ABCD";

let result = names.charCodeAt(2);

console.log(result);

for (let i = 0; i <= names.length - 1; i++) {
  let out = names
  .charCodeAt(i);
  console.log(out);             // 67, 65, 66, 67, 68
}



let name1 = "Anas";

let result1 = name1.charCodeAt(2);

console.log(result);

for (let i = 0; i <= name1.length - 1; i++) {
  let out = name1
  .charCodeAt(i);
  console.log(out);             // 67, 65, 110, 97, 115
  
}
