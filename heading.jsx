import React from "react";
//import ReactDOM from "react-dom";

function Heading() {
  return (
    <h1 style={{ color: "blue" }}>Component wali Line hai from true source</h1>
  );
}

function name_x() {
  return <h1>Non Default</h1>;
}
//to let know the file about the main file we use ES6 import export function

export default Heading; //Default export
export { name_x };
//used { } to store all non Default value in it for export
//ex. export {name_1,name_2};
// name should be same in export import to avoid error due to confusion.

//don't use Parentheses to move it Immediately .
