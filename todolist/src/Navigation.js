import React from "react";
import { Link } from "react-router-dom";

export default function Navigation(){
	return(
		<nav className = "navbar">
			<Link to = '/' className = "site-title">Todolist</Link>
				<ul className = "nav-links">
					<li className = "link-1"><Link to = '/features'>Features</Link></li>
					<li className = "link-2"><Link to = '/documentation'>Documentation</Link></li>
				<li className = "link-3"><Link to = '/aboutus'>About us</Link></li>
				</ul>
			<div className = "login-signup">
				<button>Sign up</button>
				<button>Log in</button>
			</div>
		</nav>
	)
}

