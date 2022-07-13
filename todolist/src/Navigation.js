import React from "react";
import { Link } from "react-router-dom";

export default function Navigation(){
	return(
		<nav className = "navbar">
			<Link to = '/' className = "site-title">Todolist</Link>
				<ul className = "nav-links">
					<li className = "link-1"><Link to = '/home'>Home</Link></li>
					<li className = "link-2"><Link to = '/accomplishments'>Accomplishments</Link></li>
					<li className = "link-3"><Link to = '/customization'>Customization</Link></li>
					<li className = "link-4"><Link to = '/features'>Features</Link></li>
					<li className = "link-5"><Link to = '/documentation'>Documentation</Link></li>
					<li className = "link-6"><Link to = '/aboutus'>About us</Link></li>
				</ul>
			<div className = "login-signup">
				<button>Sign up</button>
				<button>Log in</button>
			</div>
		</nav>
	)
}

