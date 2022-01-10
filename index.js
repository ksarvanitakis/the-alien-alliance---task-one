function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  const result = x / y;
  if(y === 0) {
    throw new Error()
  } else return result;
}

function smallest(arr) {
  return Math.min(...arr);
}

function noSpaces(str) {
  str = str.replace(/\s/g, '');
  str = str.replace(/[^a-zA-Z1-9 ]/g, "");
  str = str.toLowerCase();
  return str
}

function sort(arr) {
  return arr.sort();
}

function emailMaker(str) {
  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  if(format.test(str)) {
    console.log(format.test(str)) 
    throw new Error();
  }else {
    const names = str.split(' ');
    let fullName = '';
    names.forEach((name, index) => {
      if(names.length - 1 !== index) {
        fullName += name + '.';
      } else {
        fullName += name
      }
    });
    console.log(fullName);
    return fullName + "@gmail.com";    
  };
}


module.exports.multiply = multiply;
module.exports.divide = divide;
module.exports.smallest = smallest;
module.exports.noSpaces = noSpaces;
module.exports.sort = sort;
module.exports.emailMaker = emailMaker;
