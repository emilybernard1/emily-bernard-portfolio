import React from 'react'
import { Icon, Segment, Header, Container } from 'semantic-ui-react'

const Technology = () => {

	return (
		<div>
			<Segment fluid style={{ padding: '3em 0em' }} vertical color='teal'>
				<Header size='huge' textAlign='center' style={{ fontSize: '3em', color: 'violet' }}>Skills</Header>
				<Container fluid textAlign='center'>

					<Icon className='devicon-express-original' size='huge' />

					<Icon className='devicon-mongodb-plain-wordmark' size='huge' />

					<Icon className='devicon-javascript-plain' size='huge' />

					<Icon className='devicon-django-plain' size='huge' />

					<Icon className='devicon-postgresql-plain' size='huge' />

					<Icon className='devicon-nodejs-plain' size='huge' />

					<Icon className='devicon-python-plain' size='huge' />

					<Icon className='devicon-github-original' size='huge' />

					<Icon name='css3 alternate' size='huge' />

					<Icon name='html5' size='huge' />

					<Icon name='react' size='huge' />

					<Icon className='devicon-sass-original' size='huge' />

					<Icon className='devicon-bootstrap-plain' size='huge' />
				</Container>
			</Segment>
		</div>
	)
}

export default Technology