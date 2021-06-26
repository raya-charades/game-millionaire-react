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
        apply: 'スタート',
        cancel: ''
      })
    case 'finalanswer':
      return ModalTemplate({
        props: props,
        text: 'ファイナルアンサー？',
        apply: 'ファイナルアンサー',
        cancel: '考え直す'
      })
    case 'success':
      return ModalTemplate({
        props: props,
        text: '正解！',
        apply: '次の問題へ',
        cancel: 'ドロップアウト'
      })
    case 'failed':
      return ModalTemplate({
        props: props,
        text: '残念...',
        apply: '最初へ戻る',
        cancel: ''
      })
    case 'dropout':
      return ModalTemplate({
        props: props,
        text: `お疲れ様でした！<br>獲得賞金は${moneyTree[currentQuestion].toLocaleString()}円です！`,
        apply: '最初へ戻る',
        cancel: ''
      })
    case 'millionaire':
      return ModalTemplate({
        props: props,
        text: `ミリオネア達成おめでとうございます！<br>${moneyTree[currentQuestion].toLocaleString()}円獲得です！`,
        apply: '最初へ戻る',
        cancel: ''
      })
    default:
      return <></>
  }
})

export default ModalConfirm
