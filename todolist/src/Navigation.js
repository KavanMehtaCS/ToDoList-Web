import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/App" activeStyle>
			Today
		</NavLink>
		<NavLink to="/Customization" activeStyle>
			Customization
		</NavLink>
		<NavLink to="/Settings" activeStyle>
			Settings
		</NavLink>
		<NavLink to="/Accomplishments" activeStyle>
			Accomplishments
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
