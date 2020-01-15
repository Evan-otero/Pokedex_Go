import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

export const Card = props => {
	return (
		<div className="card">
			<img
				className="card-img-top"
				src="https://img.rankedboost.com/wp-content/plugins/ice/pokemon-go/Kangaskhan-Pokemon-Go.png"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};
