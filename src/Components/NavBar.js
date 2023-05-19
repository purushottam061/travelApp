import "../uni.css"
import "./NavBar.css"

const navTitles=["Home","Projects","Skills","Contact Us","Log In"];

function NavBar()
{
	return(
		<ul className="NavBar flex-row-evenly">
		{navTitles.map((titles)=>{
			return <li className="Item">{titles}</li>
		})}
		</ul>
	)
}

export default NavBar