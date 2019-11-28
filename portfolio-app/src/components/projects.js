import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0 };
	}

	toggleCategories() {
		if (this.state.activeTab === 0) {
			return (
				<div className="projects-grid">
					{/* Project 1 */}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background:
									'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'
							}}
						>
							React Project
						</CardTitle>
						<CardText>My first React project</CardText>
						<CardActions border>
							<Button colored>Soon</Button>
						</CardActions>
					</Card>
				</div>
			);
		} else if (this.state.activeTab === 1) {
			return (
				<div className="projects-grid">
					{/* Project 2 */}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background: 'url(https://i.ytimg.com/vi/TYNF5PifSmA/maxresdefault.jpg) center / cover'
							}}
						>
							TPSCAM
						</CardTitle>
						<CardText>Third Person Camera</CardText>
						<CardActions border>
							<Button colored href="https://github.com/rikocodes/TPSCAM">
								View
							</Button>
						</CardActions>
					</Card>
				</div>
			);
		} else if (this.state.activeTab === 2) {
			return (
				<div>
					<h1>This is C#</h1>
				</div>
			);
		}
	}

	render() {
		return (
			<div>
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab>React</Tab>
					<Tab>C#</Tab>
				</Tabs>

				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Projects;
