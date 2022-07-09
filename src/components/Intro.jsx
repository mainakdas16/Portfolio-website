import React from 'react'
import "./intro.css";
import me from "../images/20220706_192628.jpg";

function Intro() {
	return (
		<div className='i'>
			<div className="i-left">
				<div className="i-left-wrapper">
					<h2 className='i-intro'>Hi, my name is</h2>
					<h1 className='i-name'>Mainak</h1>
					<div className="i-title">
						<div className="i-title-wrapper">
							<div className="i-title-item">Competitive Programmer</div>
							<div className="i-title-item for">Web Developer</div>
						</div>
					</div>
					<div className="i-desc">
						Currently a 3rd Year Undergrad at Jadavpur University, Kolkata, India, Majoring in Electronic's and Instrumentation Engineering.
					</div>
				</div>
			</div>
			<div className='i-right'>
				<div className="i-bg"></div>
				<img src={me} alt="" className='i-img'/>
			</div>
		</div>
	)
}

export default Intro