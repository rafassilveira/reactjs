import React, { Component } from "react";
import LikeButton from './like-button'
import SeachButton from './search-button'


class App extends Component {
  render() {
    return (
      <div className="container" >
		<LikeButton />     
		<SeachButton />	
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
