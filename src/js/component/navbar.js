import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 btn btn-outline-secondary ms-5">Inicio</span>
			</Link>
			
			<div className="ml-auto me-4">
			<Link type="button" className="btn btn-success btn-ml my-3 me-3" to="/add-contact">
				Añadir contacto
			</Link>
			<Link type="button" className="btn btn-secondary btn-ml my-3 me-3" to="/contact">
				Lista de contactos
			</Link>
			</div>
		</nav>
	);
};
