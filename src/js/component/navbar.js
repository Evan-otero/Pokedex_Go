import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="container-fluid navbar">
			<div className="row navrow">
				<div className="col-md-3 something row">
					<div className="Lcircle">
						<div className="Scircle" />
					</div>
					<div>
						<div className="smallcircle scred" />
						<div className="smallcircle scyellow" />
						<div className="smallcircle scgreen" />
					</div>
				</div>
				<div className="title col-md-6">
					<h2>Pokedex Go</h2>
				</div>
				<div className="col-md-3" />
			</div>
		</nav>
	);
};
