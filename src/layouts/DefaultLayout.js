import React from 'react'
import styled from 'styled-components'

const Styled = {
  Main: styled.main`
    display: block;
    padding: 1rem;
  `
}

const DefaultLayout = props => {
  return (
    <>
      <Styled.Main>
        { props.children }
      </Styled.Main>
    </>
  )
}

export default DefaultLayout
