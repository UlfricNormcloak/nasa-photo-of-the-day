import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.div`
    margin: 20px 0 0 0;
    `

function ImageOfTheDay(props) {
    return (
        <StyledImage>
            <img src={props.image} />
        </StyledImage>
    )
}

export default ImageOfTheDay