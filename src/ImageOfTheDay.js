import React from 'react'

function ImageOfTheDay(props) {
    return (
        <div>
            <img src={props.image} />
        </div>
    )
}

export default ImageOfTheDay