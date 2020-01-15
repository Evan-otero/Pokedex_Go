import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/Card.js";

export const Home = () => (
	<div className="text-center wrapper container">
		<div className="row content">
			<div className="col-md-3 col-6">
				<Card />
			</div>
			<div className="col-md-3 col-6">
				<Card />
			</div>
			<div className="col-md-3 col-6">
				<Card />
			</div>
			<div className="col-md-3 col-6">
				<Card />
			</div>
			<div className="col-md-3 col-6">
				<Card />
			</div>
			<div className="col-md-3 col-6">
				<Card />
			</div>
		</div>
	</div>
);
