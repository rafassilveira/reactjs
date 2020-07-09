import React, { Component } from "react";
import Search from './components/search'
import UserInfo from './components/user-info.js'



class App extends Component {
  render() {
    return (
      <div className='app'>
				<Search />
				<UserInfo />

				<div className='actions'>
						<button> Ver repositorios</button>
						<button> Ver favoritos</button>
					</div>
					<div className='repos'>
						<h2> Repositorios:</h2>
						<ul>
							
						<li><a href='teste'>Nome do repositorio</a></li>	
						</ul>
					</div>
					<div>
					<ul className='starred'>
						<h2>Favoritos</h2>
						
						<li><a href='teste'>Nome do repositorio</a></li>	
					</ul>
					</div>
			
      </div>
    );
  }
}



export default App;
