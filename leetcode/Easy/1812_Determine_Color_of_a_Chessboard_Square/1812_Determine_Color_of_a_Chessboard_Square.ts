export {};

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
var squareIsWhite = function (coordinates: string): boolean {
  const [str, num] = coordinates.split("");

  let strNum: number = 0;
  if (str === "a") strNum = 1;
  if (str === "b") strNum = 2;
  if (str === "c") strNum = 3;
  if (str === "d") strNum = 4;
  if (str === "e") strNum = 5;
  if (str === "f") strNum = 6;
  if (str === "g") strNum = 7;
  if (str === "h") strNum = 8;

  const isStrTrue: boolean = strNum % 2 === 0;
  const isNumTrue: boolean = Number(num) % 2 === 0;

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
