import React,{PropTypes} from 'react'


const Search = ({isDisable,handleSearch}) => (
<div className='search'>
	<input
		type='search'
		placeholder='Digiete o nome'
		disable={isDisable}
		onKeyUp={handleSearch}
		/>
	</div>
)
Search.proTypes={
	handleSearch:PropTypes.func.isRequired,
	isDisable:PropTypes.bool.isRequired
}
export default Search