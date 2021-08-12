import React from 'react'
import styled from 'styled-components'

const StyledExplanation = styled.div`
    background-color: ${(pr) => pr.theme.secondaryColor};
    color: ${(pr) => pr.theme.black};
    Padding: 10px;
    border: 2px solid black;
    `

function Explanation(props) {
    
    const { explanation } = props;

    return (
        <StyledExplanation>
          <h1>{explanation}</h1>
        </StyledExplanation>
    )

}

export default Explanation