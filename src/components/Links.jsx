import React from 'react'
import "./links.css"
function Links(props) {
    return (
        <div className='l'>
            <a href={props.link} target="blank">
                <img src = {props.url}  alt="" className='l-image' />
            </a>
        </div>
    )
}

export default Links