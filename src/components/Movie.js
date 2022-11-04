import React from 'react'
import './Movie.css'


function Movie(props) {
    return (
        <div className='main'>
            <div className='card'>


                <img id='mabu' src={props.img} alt='sarkar' />
                <h4> {props.name} </h4>
                <p>{props.year}</p>
                <button>{props.time}</button>
                <p id='m'>{props.about}</p>
              
                <p id='num'>{props.num}</p>
                <div className='mab'>

                    <p id='des'>{props.description}</p>

                </div>
                <img id='full' src={props.fullimage} alt='full' />






            </div>
        </div>
    )
}
export default Movie