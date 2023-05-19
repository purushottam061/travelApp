import "../uni.css"
import "./NavBar.css"

const navTitles=["Home","Info","About","Contact Us","FAQS"];

function NavBar()
{
	return(
		<ul className="NavBar flex-row-evenly">
		{navTitles.map((titles)=>{
			return <li key={titles} className="Item">{titles}</li>
		})}
		</ul>
	)
}

export default NavBar