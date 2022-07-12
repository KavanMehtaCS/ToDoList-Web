import React from "react";

export default function Navigation(){
	return(
		<nav className = "navbar">
			<div className = "website-name">
				<h1>Todolist</h1>
			</div>
				<ul className = "nav-links">
					<li className = "link-1"><a href = "#">Features</a></li>
					<li className = "link-2"><a href = "#">Documentation</a></li>
				<li className = "link-3"><a href = "#">About us</a></li>
				</ul>
			<div className = "login-signup">
				<button>Sign up</button>
				<button>Log in</button>
			</div>
		</nav>
	)
}

