import React from 'react'
import { Container, Header, Icon, IconGroup } from 'semantic-ui-react'
import ReactTypingEffect from 'react-typing-effect'


const PortfolioHeader = () => {

	return (
		<div >
			<Container fluid textAlign='center' className='header'>
				<Header as='h1' content='Emily Bernard' style={{ fontSize: '4em', color: 'aqua', marginTop: '1em' }}>
					Emily Bernard
					<Header.Subheader>
						<ReactTypingEffect text={["Full Stack Developer"]} style={{ fontSize: '1.7em', color: 'white', margin: '1em' }}></ReactTypingEffect>
					</Header.Subheader>
					<Header.Subheader>
						<IconGroup size='big' style={{ marginBottom: '.5em', marginTop: '.5em' }}>
							<a
								href='https://github.com/emilybernard1'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Github'>
								<Icon className='devicon-github-original' color='purple' />
							</a>
							<a
								href='https://www.linkedin.com/in/emily-bernard123/'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='LinkedIn'>
								<Icon className='devicon-linkedin-plain' color='violet' />
							</a>
							<a
								href={`${process.env.PUBLIC_URL}/EmilyBernardTechnicalResume.pdf`}
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Resume'>
								<Icon name='file alternate' color='teal' />
							</a>
						</IconGroup>
					</Header.Subheader>
				</Header>

			</Container>
		</div>
	)
}
export default PortfolioHeader