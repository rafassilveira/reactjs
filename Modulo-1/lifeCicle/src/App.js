import React, { Component } from "react";
import Timer from './Timer'

class App extends Component {
	constructor (){
		console.log('constructor App ')
		super()
		this.state ={
			time:0,
			showTimer:true
		}
	}
	componentWillMount (){
		console.log('componentWillMount App ')
	}
	componentDidMount (){
		console.log('componentDidMount App')
	}
  render() {
		console.log('render App')
    return (
      <div>
				
        <Timer time={this.state.time}/>
				
				<button onClick={()=>{
						this.setState({ time:this.state.time + 10 })
					}}>Change Props</button>
      </div>
    );
  }
}



export default App;
