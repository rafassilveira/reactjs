import React,{Component} from 'react'

class Timer extends Component {
	constructor () {
		super()
		this.state= {
			time:0
		}
		//eslint-disable-next-line
		this.timer
	}
	
	componentWillReceiveProps(nextProps){
		console.log('componentWillReceiveProps timer', this.props, nextProps)
	}
	// esse componente deve retornar true o false
	shouldComponentUpdate (nextProps,nextState){
		// console.log('shouldComponentUpdate timer ', this.props, nextProps)
		// se tiver false não renderizado novamente o DOM
		return this.props.time !== nextProps.time
	}
	
	componentWillUpdate(nextProps,nextState){
		console.log('componentWillUpdate timer ', this.props, nextProps)
	}
	componentDidUpdate (prevProps,prevState){
		console.log('componentDidUpdate',this.props, prevProps)
}
	componentDidMount (){
		this.timer = setInterval(() => {
		this.setState({
			time:this.state.time +1
		 })
		},1000)
	}
	componentWillUnmount () {
		clearInterval(this.timer)
	}

render (){
	console.log('render timer')
	return <div> Timer:{this.state.time}</div>
  }
}

export default Timer