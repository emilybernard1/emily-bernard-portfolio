import _ from 'lodash'
import React from 'react'
import { Image, Segment, Header, Card, Button } from 'semantic-ui-react'


const Projects = () => {

	const projects = [
		{
			header: "Santa's Helper",
			description: "A full stack application designed for users to create Christmas Wish Lists for their loved ones and keep track of whether the items have been bought or wrapped. Users can also send secret messages to Santa at the North Pole",
			meta: 'MongoDB, Express, React.js, Node.js, and Bootstrap-React, Sass, and an optional alternative back end with Django and Python',
			image: "SantasHelper.png",
			href: 'https://emilybernard1.github.io/santas-helper/',
			signIn: 'Username: eb@eb.eb Password: eb',
			gitHub: 'https://github.com/emilybernard1/santas-helper'
		},
		{
			header: 'PetMatch App',
			description: "A full stack application. Users must create a log in so they can create a pet profile that they can update and delete. They can also see other pets on the app and message users to make play-dates.",
			meta: 'MongoDB, Express, React.js, Node.js, and Bootstrap-React, Sass',
			image: "petMatch.png",
			href: 'https://petplaydate.netlify.app/',
			signIn: 'Username: sb@sb.com Password: sb',
			gitHub: 'https://github.com/emilybernard1/petMatch'
		},
		{
			header: "Books and Crafts Tracker",
			description: "This app is designed for users to track the books and crafts that they want to read or do",
			meta: "JavaScript, React, MongoDB, Express.js, and Node.js",
			image: "Books&Crafts.png",
			href: "https://booksandcrafts.fly.dev/",
			signIn: 'Username: eb@eb.eb Password: eb',
			gitHub: 'https://github.com/emilybernard1/BookAndCraftTrackerApp'
		},
		{
			header: "French Memory Game",
			description: "Matching Game where users can test their memory skills to match the monuments of Paris.",
			meta: "JavaScript, HTML 5, and CSS 3",
			image: 'FrenchMemoryGame.png',
			href: 'https://emilybernard1.github.io/EmilysMemoryGame/',
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
					rel="noopener"
					aria-label={project.header}

				><Button basic color='purple'>Check Out the Live Site</Button></a>

			</Card.Content>
		</Card>

	))
	return (
		<div>
			<Segment fluid style={{ padding: '3em', marginBottom: '2em', backgroundColor: 'black' }} verticalAlign='justify' color='purple'>
				<Header size='huge' textAlign='center' color='purple'>Projects</Header>
				<Card.Group centered stackable itemsPerRow={2} >
					{projectCards}
				</Card.Group>
			</Segment>
		</div>
	)
}

export default Projects