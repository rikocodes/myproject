import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
	render() {
		return (
			<div>
				<Grid>
					<Cell col={4}>
						<div style={{ textAlign: 'center' }}>
							<img
								src="https://cdn0.iconfinder.com/data/icons/shift-avatar/32/Max-256.png"
								alt="avatar"
								style={{ height: '200px' }}
							/>
						</div>

						<h2 style={{ paddingTop: '2em' }}>Rayane Saada</h2>
						<h4 style={{ color: 'grey' }}>Programmer</h4>
						<hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
						<p>
							Hello there ! My name is Rayane Saada, I'm 15 years old and I'm a game Developer, I use the
							Unity Engine and the C# language to create amazing 3D and 2D games, I also create websites
							with React, CSS/HTML and some Bootstrap !
						</p>
						<hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
						<h5>Address</h5>
						<p>Cité Rommana</p>
						<h5>Email</h5>
						<p>saadarayane9@gmail.com</p>
						<h5>Web</h5>
						<p>rikogamez.itch.io</p>
						<hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
					</Cell>
					<Cell className="resume-right-col" col={8}>
						<h2>Education</h2>

						<Education
							startYear={2018}
							endYear={2021}
							schoolName="HighSchool"
							schoolDescription="Studying at Italian HighSchool in Tunis"
						/>

						<Education startYear={2021} endYear={2027} schoolName="University" schoolDescription="Soon" />
						<hr style={{ borderTop: '3px solid #e22947' }} />

						<h2>Experience</h2>

						<Experience
							startYear={2017}
							endYear={2018}
							jobName="Game track instructor"
							jobDescription="Game track instructor at the GomyCode Hackrspace"
						/>

						<Experience startYear={2027} endYear={2049} jobName="Second Job" jobDescription="Soon" />
						<hr style={{ borderTop: '3px solid #e22947' }} />
						<h2>Skills</h2>
						<Skills skill="C#" progress={90} />
						<Skills skill="HTML/CSS" progress={80} />
						<Skills skill="JavaScript" progress={50} />
						<Skills skill="React" progress={25} />
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Resume;
