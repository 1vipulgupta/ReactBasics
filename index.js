var React = require("react");
// import React from "React" //same as 1
var ReactDOM = require("react-dom");

const name = "Vipul";
//To inject javascript we have to send inside {} brackets like for name use {name}
//But can't write statements. it will cause error. example: if(..)... else...

//ReactDOM.render(WHAT TO SHOW (take single html element ; to send multiple element, we can
//use div and put all
//all in it),WHERE TO SHOW IT, Optional Callback);
// ReactDOM.render(<h1>Hello world!</h1>, document.getElementById("root"));

//want to make h1 changable use contentEditable="true"
//don't use E small ..... always make html to camelCase

//want to avoid h1 spell check use spellCheck="false"
//don't use C small ..... always make html to camelCase

ReactDOM.render(
  <div>
    <h1 className="heading">Hello world!</h1>
    <p>Your name is {name}.</p>
    <ul>
      <li>Pahli Line</li>
      <li>Doosri Line</li>
    </ul>

    <div>
      <img
        className="Loki"
        src="https://images.indianexpress.com/2021/06/loki1200-3.jpg"
        alt="Loki/Sylvie"
      ></img>
      <img
        className="Loki"
        src="https://img.etimg.com/thumb/msid-83328202,width-650,imgsize-501342,,resizemode-4,quality-100/while-the-mcu-movies-have-touched-upon-lokis-mischievous-side-the-series-loki-marvel-studioss-third-series-at-disney-plus-aims-to-give-an-insight-into-what-hides-beneath-the-wickedness-of-the-fan-favourite-villain-.jpg"
        alt="Loki/Sylvie"
      ></img>
    </div>
  </div>,
  document.getElementById("root")
);
//two element h1 aur p ko div se ek kar dia

//to get the current year
const cDate = new Date();
const year = cDate.getFullYear();

//inline styling
//acts like a javascript code in {  } like we replace above....
//abc={
//color : "red"
//}
//either put abc in { } or put whole code
const date = new Date();
const curr_time = date.getHours();

// can use to manage color
//var col;
/* Or use this method */
const customStyle = {
  col: " "
};

var msg;

if (curr_time < 12 && curr_time > 6) {
  customStyle.col = "red";
  msg = "Hi Vip!";
} else {
  customStyle.col = "pink";
  msg = "Hi Vipul !";
}

ReactDOM.render(
  <div>
    <h1
      className="heading_1"
      style={{
        color: customStyle.col,
        fontSize: "25px"
      }}
    >
      {msg} {year}
    </h1>
  </div>,
  document.getElementById("root_1")
);

//There are cases where we can't write code too long.... making it less friendly
// so we use Components .
//To Differentiate b/w the html keywords ( div ) and user defined function keywords we use
// it by making it capitalized ( Heading ).

// function Heading() {
//   return <h1 style={{ color: "blue" }}>Component wali Line hai</h1>;
// }

//To make this function act as Component we do it by making a file by filename.jsx name in src.
//now to import it use the line below :

import Heading, { name_x } from "./Heading.jsx";
import Points from "./points";
//here Extension is optional like not used in 2nd case

//to bring non default value we add extra thing like this ,{} in above code

//During use if it has no children use like this <Heading /> i.e. safe practice
//else use like this <Heading>.....</Heading>

// whether we import or write here only we use above method to use it.

// to get non Default return value use {name_x()} like this
// also can be put in h1 or p
ReactDOM.render(
  <div>
    <Heading></Heading>
    <Points />
    {name_x()}
  </div>,
  document.getElementById("root_2")
);

//to import whole as single use "* as some_name "
//during the fetching value  use "some_name.function()"
