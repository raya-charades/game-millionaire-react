import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ThemeFrame from './ThemeFrame'

const Styled = {
  Header: styled.header`
    background-color: black;
    color: white;
    margin: 0 auto;
    max-width: 60rem;
    padding: 1rem;
    width: 100%;
  `,
  Money: styled.div`
    max-width: 20rem;
  `,
  MoneyText: styled.div`
    align-items: center;
    color: gold;
    display: flex;
    font-size: 1.5rem;
    font-weight: bold;
    justify-content: center;
    padding: 0 20px;
    height: 100%;
    width: 100%;
  `
}

const TheHeader = () => {
  const currentQuestion = useSelector(state => state.game.currentQuestion)
  const moneyTree = useSelector(state => state.game.moneyTree)

  return (
    <Styled.Header>
      <Styled.Money>
        <ThemeFrame>
          <Styled.MoneyText>{ `￥${moneyTree[currentQuestion].toLocaleString()}` }</Styled.MoneyText>
        </ThemeFrame>
      </Styled.Money>
    </Styled.Header>
  )
}

export default TheHeader
