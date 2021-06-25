import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nextQuestion, resetQuestion } from '../stores/game'
import styled from 'styled-components'
import classNames from 'classnames'
import DefaultLayout from '../layouts/DefaultLayout'
import TopImage from '../components/TopImage'
import TextQuestion from '../components/TextQuestion'
import ButtonChoices from '../components/ButtonChoices'
import ModalConfirm from '../components/ModalConfirm'
import quiz from '../assets/stub/quiz'

const Styled = {
  Title: styled.h2`
    font-size: 1.25rem;
    font-weight: bold;
    opacity: 0;
    transition: opacity 1s;

    &.visible {
      opacity: 1;
    }
  `,
  TopImage: styled.div`
    margin: 0 auto 1rem;
    max-width: 40rem;
  `,
  TextQuestion: styled.div`
    margin: 0 auto 1rem;
    max-width: 60rem;
  `,
  List: styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 60rem;
  `,
  Loading: styled.div`
    color: white;
    line-height: 100vh;
    text-align: center;
  `
}

const Home = () => {
  const [quizData, setQuizData] = useState([])
  const [userAnswer, setUserAnswer] = useState('')
  const [modalScene, setModalScene] = useState('standby')

  const currentQuestion = useSelector(state => state.game.currentQuestion)
  const dispatch = useDispatch()

  const confirmFinalAnswer = sign => {
    setUserAnswer(state => state = sign)
    setModalScene(modal => modal = 'finalanswer')
  }

  const clickedApply = () => {
    if(modalScene === 'standby') {
      setModalScene(modal => modal = '')
    }
    if(
      modalScene === 'finalanswer'
      && quizData[currentQuestion].answer === userAnswer
    ) {
      setModalScene(modal => modal = 'success')
    }
    if(
      modalScene === 'finalanswer'
      && quizData[currentQuestion].answer === userAnswer
      && currentQuestion === 14)
    {
      setModalScene(modal => modal = 'millionaire')
    }
    if(
      modalScene === 'finalanswer'
      && quizData[currentQuestion].answer !== userAnswer
    ) {
      setModalScene(modal => modal = 'failed')
    }
    if(modalScene === 'success') {
      dispatch(nextQuestion())
      setModalScene(modal => modal = '')
    }
    if(modalScene === 'failed' || modalScene === 'dropout' || modalScene === 'millionaire') {
      dispatch(resetQuestion())
      setModalScene(modal => modal = 'standby')
    }
  }

  const clickedCancel = () => {
    if(modalScene === 'finalanswer') {
      setModalScene(modal => modal = '')
    }
    if(modalScene === 'success') {
      setModalScene(modal => modal = 'dropout')
    }
  }

  useEffect(() => {
    fetch('https://api-charades-fzx9fn3j387f.netlify.app/.netlify/functions/quiz-millionaire')
      .then(res => res.json())
      .then(res => setQuizData(quizData => quizData = res))
  }, [])

  const displayGame = () => (
    <DefaultLayout>
      <Styled.TopImage>
        <TopImage />
      </Styled.TopImage>

      <Styled.TextQuestion>
        <TextQuestion label={ quizData[currentQuestion].question } />
      </Styled.TextQuestion>

      <Styled.List>
        <ButtonChoices
          labels={ quizData[currentQuestion].choices }
          clicked={ sign => confirmFinalAnswer(sign) }
        />
      </Styled.List>

      <ModalConfirm
        scene={ modalScene }
        apply={ clickedApply }
        cancel={ clickedCancel }
      />
    </DefaultLayout>
  )

  const displayLoading = () => (
    <DefaultLayout>
      <Styled.Loading>loading...</Styled.Loading>
    </DefaultLayout>
  )

  if(quizData.length) return displayGame()
  else return displayLoading()
}

export default Home
