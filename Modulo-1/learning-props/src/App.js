import React, { Component } from "react";
import Title from "./Title";

class App extends Component {
  render() {
    return (
      <div className="container">
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
