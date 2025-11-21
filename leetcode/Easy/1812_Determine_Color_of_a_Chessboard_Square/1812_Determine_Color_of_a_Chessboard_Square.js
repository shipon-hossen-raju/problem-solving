/*
🔢 Problem: 1812. Determine Color of a Chessboard Square
🔗 Link: 
📘 Difficulty: Easy

 📝 description:
      You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.
      
      Return true if the square is white, and false if the square is black.

      The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.

 📌 Example:
      Example 1:
        Input: coordinates = "a1"
        Output: false
        Explanation: From the chessboard above, the square with coordinates "a1" is black, so return false.

   Example 2:
      Input: coordinates = "h3"
      Output: true
      Explanation: From the chessboard above, the square with coordinates "h3" is white, so return true.
   
   Example 3:
    Input: coordinates = "c7"
    Output: false

*/

/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  if (coordinates.length !== 2) return "Not coordinates data!";
  const [str, num] = coordinates.split("");
  const a = 1;
  const b = 2;
  const c = 3;
  const d = 4;
  const e = 5;
  const f = 6;
  const g = 7;
  const h = 8;

  let strNum = null;
  if (str === "a") strNum = a;
  if (str === "b") strNum = b;
  if (str === "c") strNum = c;
  if (str === "d") strNum = d;
  if (str === "e") strNum = e;
  if (str === "f") strNum = f;
  if (str === "g") strNum = g;
  if (str === "h") strNum = h;

  const isStrTrue = strNum % 2 === 0;
  const isNumTrue = Number(num) % 2 === 0;

  if (isNumTrue) {
    if (isStrTrue) return false;
    else return true;
  } else {
    if (isStrTrue) {
      return true;
    } else {
      return false;
    }
  }
};

const coordinates = "c7";
console.log("squareIsWhite(coordinates) ", squareIsWhite(coordinates));
