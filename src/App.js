import React from 'react';
import './App.css';
import Board from './components/Board';


const App = () => {
	return (
		<div className="game">
			<div className="board">
				<Board />
			</div>
		</div>
	);
}


export default App;
