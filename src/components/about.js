import React, { Component } from "react";
import AndreaPhoto from './../images/andrea.jpg';

export default class About extends Component {
	render() {
		return (
			<div className="page about">
				<h1>Welcome!</h1>
				<div className="about-body">
					<img src={AndreaPhoto} alt="" width={360} height={480} />
	        <p className="about-body-text">My name is Andrea Yang and I am a software engineer who believes in enhancing the world
	            through design. I currently live in the beautahful state of Utah working as a UI developer
	            at Adobe. You can probably find me up in the mountains doing my favorite activities,
	            skiing, snowboarding, bouldering, and taking photos.
					</p>
				</div>
			</div>
		);
	}
}
