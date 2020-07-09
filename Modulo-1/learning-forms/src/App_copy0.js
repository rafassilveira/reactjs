import React, { Component } from "react";


class App extends Component {
	constructor (){
		super()
		this.state ={
			value:'Valor Inicial',
			checked:false
		}
	}
	render () { 
		return (
		<div>
			<form>
				<select>
					<option></option>
				</select>
				
				
				<input type='text' value={this.state.value} onChange={(e)=> {
						console.log(e.target)
						this.setState({
							value:e.taget.value
						})
					}} />	
				{/* check é propriedade uncotrolled, logo para faser a alteração, tem que ser declarada no this.state*/}
				<label>
					{/* por padrão em tags HTML com valores booleano o react considera true*/}
					<input
						type='checkbox' 
						checked={this.state.checked}
						onChange={(e)=>{
							this.setState({ checked: !this.state.checked })
						}}
						/> Checkbox
				</label>
				<input type='radio' name='rd' value='1' defaultChecked />Radio 1
				<input type='radio' name='rd' value='2'/>Radio 2
			</form>	
		</div>	
		)
	}
}


export default App;
