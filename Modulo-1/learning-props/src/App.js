import React, { Component } from "react";
import Title from "./Title";
import Square from "./Square";

class App extends Component {
  render() {
    return (
      <div className="container">
        {["blue", "red", "black"].map((square, index) => (
          <Square key={index} color={square} />
        ))}
        <Title name={"Fernando"} />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <Title name={"Rafael"} lastname={"Silveira"} />
//       <label htmlFor="input" data-label="Label">
//         {" "}
//         Input
//       </label>
//       <input type="text" id="input" aria-hidden={true} />
//     </div>
//   );
// }

export default App;
