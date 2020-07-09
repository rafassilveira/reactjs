import React from 'react'

const Repos =({ className,title,repos })=>(
	<div className={className}>
		<h2>{title}:</h2>
		<ul>
			{repos.map((repo, index)=>(				
			<li key={index}><a href={repo.link}>Nome do repositorio</a></li>
			))}
		<li><a href="teste">Nome do repositorio</a></li>
		</ul>
	</div>
)
// eslint-disable-next-line
Repos.defaultProps ={
	className:''
}
// eslint-disable-next-line
Repos.propType={
	// eslint-disable-next-line
	className:React.PropTypes.string,
	// eslint-disable-next-line
	title:React.PropTypes.isRequired,
	// eslint-disable-next-line
	className:React.PropTypes.array,
}

export default Repos