import React from 'react';
import { Grid, Image, Segment, Header } from 'semantic-ui-react';

const AboutMe = (props) => {

    return (
        <>
            <div class="aboutme">
                <Segment fluid style={{ padding: '3em 0em' }} vertical color='purple'>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h1' style={{ fontSize: '2em', color: 'violet' }}>
                                    About Me
                                </Header>
                                <p style={{ fontSize: '1.33em' }}>

                                    I am a tenacious, resilient, collaborative, and creative Software Engineer. With over 16 years of experience as a French educator, I have honed my mentoring, collaboration, and ability to motivate others. I'm excited to apply these advanced skills to building great products with clean code. If you have a coding, teaching, translating, or singing need: I'm your gal!
                                    <br></br>
                                    <br></br>
                                    When I'm not coding, speaking French, or singing, I love spending time with my children and our 2 dogs and 2 cats! For me, having a good work/life balance is vital for recharging my batteries and staying as sharp as possible in both arenas; work and home.
                                </p>
                            </Grid.Column>
                            <Grid.Column floated='right' width={6}>
                                <Image bordered rounded size='medium' src={`${process.env.PUBLIC_URL}/images/profilepic.png`} />
                            </Grid.Column>
                        </Grid.Row>

                    </Grid>
                </Segment>
            </div>

        </>
    )
}

export default AboutMe