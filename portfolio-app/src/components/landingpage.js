import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
	render() {
		return (
			<div style={{ width: '100%', margin: 'auto' }}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img
							src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png"
							alt="avatar"
							className="avatar-img"
						/>

						<div className="banner-text">
							<h1>Game developer</h1>

							<hr />

							<p>HTML/CSS | Bootstrap | JavaScript | React | C# | Python</p>

							<div className="social-links">
								{/* Facebook */}
								<a href="https://www.facebook.com/riko.saada" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-facebook-square" aria-hidden="true" />
								</a>

								{/* Github */}
								<a href="https://github.com/rikocodes" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-github-square" aria-hidden="true" />
								</a>
								{/* Youtube */}
								<a href="https://rikogamez.itch.io" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-gamepad" aria-hidden="true" />
								</a>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Landing;
