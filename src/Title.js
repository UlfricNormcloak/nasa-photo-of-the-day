import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.div`
    background-color: ${(pr) => pr.theme.primaryColor};
    color: ${(pr) => pr.theme.tertiaryColor}
    Padding: 10px;
    font-size: 48px;
    `

function Title(props) {
    
    return (
        <StyledTitle>
          <h1>{props.title}</h1>
        </StyledTitle>
    )

}

export default Title