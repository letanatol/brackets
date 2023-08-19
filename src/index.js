module.exports = function check(str, bracketsConfig) {
  let result = [];

  let oneBrackets = bracketsConfig.map(item => item[0]);
  let twoBrackets = bracketsConfig.map(item => item[1]);

  console.log(oneBrackets, twoBrackets);
  console.log(str);

  for (let i = 0; i < str.length; i++) {
    let indexOfLastBracketResult = oneBrackets.indexOf(result.at(-1));

    if (str[i] === twoBrackets[indexOfLastBracketResult]) {
      result.pop();
    } else {
      result.push(str[i]);
    }
  }

  return (result.length == 0);
}
