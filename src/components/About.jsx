import React from 'react'
import './about.css'

function About() {
    return (
        <div className='a'>
           <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='a-img'/>
                </div>
           </div>
           <div className="a-right">
                <h1 className='me'>About Me..</h1>
                <p className="a-desc">
                    I'm Passionate about Problem solving. Skilled in C/C++, Data Structures and Algorithms, Object Oriented Programming.
                    Active on various programming platforms like leetcode, codechef and codeforces. I'm a also beginner in Web Development.
                    <br />
                    You can checkout my <a href='https://www.linkedin.com/in/mainak-das-b56791191/' target = "blank">LinkedIn</a> and <a href='https://github.com/mainakdas16' target = "blank">github</a>.
                </p>
           </div>
        </div>     
    )
}

export default About