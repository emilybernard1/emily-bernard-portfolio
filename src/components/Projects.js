// import _ from 'lodash'
import React from 'react'
import { Image, Segment, Header, Card, Button } from 'semantic-ui-react'


const Projects = () => {

	const projects = [
		{
			header: "Santa's Helper",
			description: "Built with a MERN stack and alternate back end with Django and Python, this application is designed for users to create and maintain Christmas gift lists for their loved ones and keep track of whether they have been bought and wrapped. Users can also send secret wishes to Santa at the North Pole.",
			meta: 'MongoDB, Express, React.js, Node.js, and Bootstrap-React, Sass, and an optional alternative back end with Django and Python',
			image: "SantasHelper.png",
			href: 'https://santas-helper.netlify.app',
			signIn: 'Username: eb@eb.eb Password: eb',
			gitHub: 'https://github.com/emilybernard1/santas-helper'
		},
		{
			header: 'PetMatch App',
			description: "Built with React, MongoDB, Cloudinary, Express.js, and Node.js, this application is designed for users to create and maintain profiles for their pets in the hopes of setting up playdates for them.",
			meta: 'MongoDB, Express, React.js, Node.js, and Bootstrap-React, Sass',
			image: "petMatch.png",
			href: 'https://petplaydate.netlify.app/',
			signIn: 'Username: sb@sb.com Password: sb',
			gitHub: 'https://github.com/emilybernard1/petMatch'
		},
		{
			header: "Books and Crafts Tracker",
			description: "Built with React, MongoDB, Express.js, and Node.js, this application is designed for users to track the books and crafts that they want to read or do.",
			meta: "JavaScript, React, MongoDB, Express.js, and Node.js",
			image: "Books&Crafts.png",
			href: "https://booksandcrafts.fly.dev/",
			signIn: 'Username: eb@eb.eb Password: eb',
			gitHub: 'https://github.com/emilybernard1/BookAndCraftTrackerApp'
		},
		{
			header: "French Memory Game",
			description: "Built with JavaScript, CSS, and HTML, this application is a browser Matching Game where users can test their memory skills to match the monuments of Paris.",
			image: 'FrenchMemoryGame.png',
			href: 'https://frenchmemorygame.netlify.app/',
			signIn: 'No username or password needed',
			gitHub: 'https://github.com/emilybernard1/EmilysMemoryGame'
		}
	]

	const projectCards = projects.map(project => (
		<Card key={project.header}>
			<Image src={`${process.env.PUBLIC_URL}/images/${project.image}`} wrapped ui={false} />

			<Card.Content>
				<Card.Header size='huge'>{project.header}</Card.Header>
				<Card.Meta>{project.meta}</Card.Meta>
				<Card.Description>{project.description}</Card.Description>
				<br></br>
				<Card.Meta>{project.signIn}</Card.Meta>
				<br></br>
				<Card.Meta>{project.gitHub}</Card.Meta>
			</Card.Content>
			<Card.Content extra className='ui one button'>
				<a
					href={project.href}
					target='_blank'
					rel="noopener noreferrer"
					aria-label={project.header}

				><Button basic color='purple'>Check Out the Live Site</Button></a>

			</Card.Content>
		</Card>

	))
	return (
		<div>
			<Segment fluid style={{ padding: '3em', marginBottom: '2em', backgroundColor: 'rgb(33, 32, 32)' }} verticalAlign='justify' color='purple'>
				<Header size='huge' textAlign='center' style={{ fontSize: '3em', color: 'violet' }}>Projects</Header>
				<br></br>
				<br></br>
				<Card.Group centered stackable itemsPerRow={2} >
					{projectCards}
				</Card.Group>
			</Segment>
		</div>
	)
}

export default Projects