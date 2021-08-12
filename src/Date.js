import React from 'react'
import styled from 'styled-components'

const StyledDate = styled.div`
    background-color: ${(pr) => pr.theme.white};
    color: ${(pr) => pr.theme.primaryColor};
    Padding: 10px;
    border: 2px solid black;
    `

function Date(props) {
    
    return (
        <StyledDate>
          <h1>{props.date}</h1>
        </StyledDate>
    )

}

export default Date