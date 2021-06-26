import React, { useMemo, useCallback } from 'react'
import styled from 'styled-components'
import ThemeFrame from './ThemeFrame'

const Styled = {
  Item: styled.li`
    margin-bottom: 1rem;
    width: calc(50% - .5rem);
  `,
  Button: styled.button`
    background-color: inherit;
    border: none;
    color: white;
    cursor: pointer;
    font-weight: bold;
    height: 100%;
    padding: 0 20px;
    text-align: left;
    width: 100%;

    &:hover {
      background-color: orange;
      color: black;
    }
  `
}

const ButtonChoices = React.memo(props => {
  const sign = ['A', 'B', 'C', 'D']
  const labels = useMemo(() => Object.values(props.labels), [props.labels])
  const events = useCallback(props.clicked, [props.clicked])

  return labels.map((label, i) => (
    <Styled.Item key={ `label-${i}` }>
      <ThemeFrame>
        <Styled.Button
          data-sign={ sign[i] }
          onClick={ () => events(sign[i]) }
        >
          { `${ sign[i] } : ${ label }` }
        </Styled.Button>
      </ThemeFrame>
    </Styled.Item>
  ))
})

export default ButtonChoices
