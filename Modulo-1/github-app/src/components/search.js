import React from 'react'


const Search = ({handleSearch}) => (
<div className='search'>
	<input
		type='search'
		placeholder='Digiete o nome'
		onKeyUp={handleSearch}
		/>
	</div>
)

export default Search