import './App.css';
import NavBar from './Components/NavBar';
import Cards from './Components/Cards';
import { useState } from 'react';


function App() {
	const [isHover,SetIsHover]=useState(false);
	function changeHover()
	{
		SetIsHover(val=>!val);
	}
	return (
		<div className="App">
			<NavBar />
			
			<div className="Main-Body">
				<SearchBar isactive={isHover} changeHover={changeHover} />
				<Cards />
			</div>
		</div>
	);
}

function SearchBar(props)
{
	return (
		<>
		<div className="Search-btn-Cont">
		{props.isactive?<div className="Search-Cont flex-row-evenly">
			<input type="text" placeholder="Enter the name of place..." />
			<button className='Button' onClick={props.changeHover}>Search</button>
		</div>:""}
		{props.isactive?"":<button className='Button' onClick={props.changeHover}>Search</button>}
		</div>
		</>
	)
}

export default App;