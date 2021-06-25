import React from 'react'
import styled from 'styled-components'
import TheHeader from '../components/TheHeader'

const Styled = {
  Main: styled.main`
    display: block;
    padding: 1rem;
  `
}

const DefaultLayout = props => {
  return (
    <>
      <TheHeader />
      <Styled.Main>
        { props.children }
      </Styled.Main>
    </>
  )
}

export default DefaultLayout
