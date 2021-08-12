import React from 'react'
import styled from 'styled-components'


const StyledCopyright = styled.div`
    color: ${(pr) => pr.theme.secondaryColor};
    `

function Copyright(props) {
    return (
        <StyledCopyright>
          <h2>Copyright: {props.copyright}</h2>
        </StyledCopyright>
    )

}

export default Copyright