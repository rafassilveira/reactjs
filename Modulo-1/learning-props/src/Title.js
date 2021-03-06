import React from "react";

const Title = ({ name, lastname }) => <h1>Olá {`${name} ${lastname}`}</h1>;
Title.defaultProps = {
  name: "Desconhecido",
  lastname: "Sem sobrenome",
};
// eslint-disable-next-line
// const Title = React.createClass({
// 	// o getDefaultProps seta por padrão valores caso não seja passada algo para o componente
// 	// Nesse casso caso nao tiver nome algum sendo passado ficara como padrão desconhecido
// 	getDefaultProps:function () {
// 		return {
// 			name:'Desconhecido',
// 			lastname:'Sem sobrenome'
// 		}
// 	},
// 	render:function(){
// 		return (
// 	 	<h1>Ola {this.props.name + ' ' + this.props.lastname}</h1>
// 	 )
// 	}
// })
export default Title;
