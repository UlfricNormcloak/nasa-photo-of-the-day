import React from 'react'
import styled from 'styled-components'

function Explanation(props) {
    
    const { explanation } = props;

    return (
        <div>
          <h1>{explanation}</h1>
        </div>
    )

}

export default Explanation