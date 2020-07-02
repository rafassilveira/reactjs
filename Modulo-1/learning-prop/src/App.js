import React from 'react';
import Title from './Title'

function App() {
  return (
    <div>
    <Title  />
	<label htmlFor='input' data-label='Label'> Input</label>
	<input type='text' id='input' aria-hidden={true} />
    </div>
  );
}

export default App;
