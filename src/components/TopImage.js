import React from 'react'
import styled from 'styled-components'

const Styled = {
  Image: styled.img`
    display: block;
    height: auto;
    width: 100%;
  `
}

const TopImage = React.memo(() => {
  return (
    <Styled.Image src="/assets/images/millionaire.jpg" alt="millionaire" height="" width="" />
  )
})

export default TopImage