import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Contact List</span>
			</Link>
			<div className="ml-auto">

			<Link type="button" className="btn btn-success btn-sm my-3 me-3" to="/add-contact">
				Añadir contacto
			</Link>
			<Link type="button" className="btn btn-secondary btn-sm" to="/contact">
				Lista de contactos
			</Link>
			</div>
		</nav>
	);
};
