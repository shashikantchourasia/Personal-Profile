import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles'
import profilepic from '../assets/profilepic.png';
import Title from './Title'

class App extends Component{
    state = { displayBio: false};
    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });   
    }
    render() {
        return ( 
            <div>
                <img src={profilepic} alt='profile' className ='profile'/>
                <h1>Hello!</h1>
                <p>My Name is Shashikant Chourasia. I <Title/>I design websites and I like to code.
                 I am always looking forward to working on great projects.</p>
                
                <p>I am proficient in HTML5, CSS3, Javascript, jQuery, Python and the frameworks like React.</p>
                { 
                    this.state.displayBio ? (
                    <div>
                    <p>Currently I have developed a JavaScript project which is a Budget Calculator.</p>
                    <p>I am currently pursuing my Masters in Electrical And Computer Engineering at the University of Windsor.</p>
                    <button onClick={this.toggleDisplayBio}>Show Less</button>
                </div>
                    ): (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Show More</button>
                        </div>
                    )   
            }
            <hr />
            <Projects />
            <hr />
            <SocialProfiles />
        </div>
        
        )

    }
}
export default App;

