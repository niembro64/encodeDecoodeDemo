const encode = (str) => {
  if (str.length == 0) {
    return "";
  }
  newStr = "";
  numInRow = 1;
  currentChar = "";
  for (var i = 0; i < str.length+1; i++) {
    if (str[i] != currentChar) {
      if (str[i] != "") {
        newStr += currentChar + numInRow;
      }

      numInRow = 1;
      currentChar = str[i];
    } else {
      numInRow++;
    }
  }

  newStr = newStr.slice(1,newStr.length)
  return newStr;
};

const decode = (str) => {
  if (str.length == 0) {
    return "";
  }
  var newStr = "";
  var currentChar = "";
  var numInRow = "";

  for (var i = 0; i < str.length+1; i++) {
    if (isNaN(str[i])) {
      for (var j = 0; j < numInRow; j++) {
        newStr += currentChar;
      }
      currentChar = str[i];
      numInRow = "";
    } else {
      numInRow += str[i];
    }
    // console.log(`newStr: ` + newStr + ` currentChar: ` + currentChar + ` numInRow: ` + numInRow)
  }
  return newStr;
};

s1 = "abbcccdddd";
s2 = "abbcccaaaaaaaaaabbc";
console.log(s2);
console.log(encode(s2));
console.log(decode(encode(s2)));
