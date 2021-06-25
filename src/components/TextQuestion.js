import React from 'react'
import ThemeFrame from './ThemeFrame'
import styled from 'styled-components'

const Styled = {
  Text: styled.div`
    align-items: center;
    background-color: inherit;
    color: white;
    display: flex;
    font-weight: bold;
    height: 100%;
    padding-left: 20px;
    width: 100%;
  `
}

const TextQuestion = React.memo(props => {
  return (
    <ThemeFrame>
      <Styled.Text>
        { props.label }
      </Styled.Text>
    </ThemeFrame>
  )
})

export default TextQuestion
