import React from 'react'
import { useSelector } from 'react-redux'
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
  const currentQuestion = useSelector(state => state.game.currentQuestion)
  return (
    <ThemeFrame>
      <Styled.Text>
        { `Q${ currentQuestion + 1 } : ${ props.label }` }
      </Styled.Text>
    </ThemeFrame>
  )
})

export default TextQuestion
