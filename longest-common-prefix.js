const longestCommonPrefix = function (arr) {
  if (arr.length === 0) return "";
  let prefix = arr[0];
  for (let word of arr) {
    while (word.indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
    if (prefix === "") return "";
  }
  return prefix;
};

let testStr = ["these", "the", "that", "those", "theory"];
let strs = ["flower", "flow", "flight"];
let strs1 = ["dog", "racecar", "car"];

console.log(
  longestCommonPrefix(testStr) === ""
    ? "There are no common prefix"
    : longestCommonPrefix(testStr)
);
