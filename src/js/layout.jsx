import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.js";

import { Home } from "./views/home.js";

import { AddContact } from "./views/AddContact.jsx";
import { Contact } from "./views/Contact.jsx";
import { Demo } from "./views/demo.js";
import { ContactEdit } from "./views/ContactEdit.jsx";
import injectContext from "./store/appContext.js";

import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						{/*<Route path="/demo" element={<Demo />} />*/}
						<Route path="/contact" element={<Contact />} />
						<Route path="/add-contact" element={<AddContact />} />
						<Route path="/contact-edit" element={<ContactEdit />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
