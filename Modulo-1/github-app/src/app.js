import React, { Component } from "react";
import Search from './components/search'
import UserInfo from './components/user-info.js'
import Actions from './components/actions'
import Repos from './components/repos'



class App extends Component { render() {
return (
<div className="app">
	
	<Search />
	<UserInfo />
	<Actions/>
	
	<Repos
		className='repos'
		title='Repositórios:'
		repos={[{
			name:'Nome do repositorio',
			link:'#'
		}]}
		/>
	<Repos
		className='starred'
		title='favoritos:'
		repos={[{
			name:'Nome do repositorio',
			link:'#'
		}]}
		/>
	
	
	
</div>
); } } export default App;