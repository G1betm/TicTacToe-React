import React from 'react';


const Cell = (props) => {
	return (
		<div 
			className="cell" 
			onClick={props.onClick}>
			{props.value}
		</div>
	);
}


export default Cell;