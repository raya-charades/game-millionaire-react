import React from 'react'
import styled from 'styled-components'

const Styled = {
  Header: styled.header`
    background-color: black;
    border-bottom: 1px solid rgba(255, 255, 255, .2);
    color: white;
    padding: .5rem 1rem;
    width: 100%;
  `
}

const TheHeader = () => {
  return (
    <Styled.Header>
      quiz millionaire poi.
    </Styled.Header>
  )
}

export default TheHeader
