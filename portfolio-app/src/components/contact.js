import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
	render() {
		return (
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2>Rayane Saada</h2>
						<img
							src="https://avatars1.githubusercontent.com/u/35400293?s=460&v=4"
							alt="avatar"
							style={{ height: '250px' }}
						/>
					</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>
						<hr />

						<div className="contact-list">
							<List>
								<ListItem>
									<ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
										<i className="fa fa-phone-square" aria-hidden="true" />
										Soon
									</ListItemContent>
								</ListItem>

								<ListItem>
									<ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
										<i className="fa fa-fax" aria-hidden="true" />
										Soon
									</ListItemContent>
								</ListItem>

								<ListItem>
									<ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
										<i className="fa fa-envelope" aria-hidden="true" />
										saadarayane9@gmail.com
									</ListItemContent>
								</ListItem>

								<ListItem>
									<ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
										<i class="fa fa-gamepad" />
										rikogamez.itch.io
									</ListItemContent>
								</ListItem>
							</List>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Contact;
