import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import classNames from 'classnames'
import ThemeFrame from './ThemeFrame'

const Styled = {
  Wrap: styled.div`
    align-content: center;
    background-color: rgba(0, 0, 0, .9);
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
  `,
  Text: styled.p`
    color: white;
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
    width: 100%;
  `,
  List: styled.ul`
    display: flex;
    justify-content: center;
    max-width: 480px;
    width: 100%;
  `,
  Item: styled.li`
    padding: 0 10px;
    width: 50%;

    &.isHidden {
      display: none;
    }
  `,
  Button: styled.button`
    background-color: inherit;
    border: none;
    color: white;
    cursor: pointer;
    display: block;
    font-weight: bold;
    height: 100%;
    padding: 0 20px;
    text-align: center;
    width: 100%;

    &:hover {
      background-color: orange;
      color: black;
    }
  `
}

const isHidden = bool => classNames({
  isHidden: bool === ''
})

const ModalTemplate = obj => (
  <Styled.Wrap>
    <Styled.Text dangerouslySetInnerHTML={{ __html: obj.text  }} />
    <Styled.List>
      <Styled.Item>
        <ThemeFrame>
          <Styled.Button onClick={ obj.props.apply }>
            { obj.apply }
          </Styled.Button>
        </ThemeFrame>
      </Styled.Item>
      <Styled.Item className={ isHidden(obj.cancel) }>
        <ThemeFrame>
          <Styled.Button onClick={ obj.props.cancel }>
            { obj.cancel }
          </Styled.Button>
        </ThemeFrame>
      </Styled.Item>
    </Styled.List>
  </Styled.Wrap>
)

const ModalConfirm = React.memo(props => {
  const currentQuestion = useSelector(state => state.game.currentQuestion)
  const moneyTree = useSelector(state => state.game.moneyTree)

  switch(props.scene) {
    case 'standby':
      return ModalTemplate({
        props: props,
        text: 'Quiz Millionaire Poi',
        apply: '????????????',
        cancel: ''
      })
    case 'finalanswer':
      return ModalTemplate({
        props: props,
        text: '??????????????????????????????',
        apply: '???????????????????????????',
        cancel: '????????????'
      })
    case 'success':
      return ModalTemplate({
        props: props,
        text: '?????????',
        apply: '???????????????',
        cancel: '?????????????????????'
      })
    case 'failed':
      return ModalTemplate({
        props: props,
        text: '??????...',
        apply: '???????????????',
        cancel: ''
      })
    case 'dropout':
      return ModalTemplate({
        props: props,
        text: `????????????????????????<br>???????????????${moneyTree[currentQuestion].toLocaleString()}????????????`,
        apply: '???????????????',
        cancel: ''
      })
    case 'millionaire':
      return ModalTemplate({
        props: props,
        text: `??????????????????????????????????????????????????????<br>${moneyTree[currentQuestion].toLocaleString()}??????????????????`,
        apply: '???????????????',
        cancel: ''
      })
    default:
      return <></>
  }
})

export default ModalConfirm
