import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setQuizData, nextQuestion, resetQuestion, setUserAnswer, setScene } from '../stores/game'
import styled from 'styled-components'
import DefaultLayout from '../layouts/DefaultLayout'
import TheHeader from '../components/TheHeader'
import TopImage from '../components/TopImage'
import TextQuestion from '../components/TextQuestion'
import ButtonChoices from '../components/ButtonChoices'
import ModalConfirm from '../components/ModalConfirm'

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
  const quizData = useSelector(state => state.game.quizData)
  const currentQuestion = useSelector(state => state.game.currentQuestion)
  const userAnswer = useSelector(state => state.game.userAnswer)
  const currentScene = useSelector(state => state.game.currentScene)
  const dispatch = useDispatch()

  const confirmFinalAnswer = sign => {
    dispatch(setUserAnswer(sign))
    dispatch(setScene('finalanswer'))
  }

  const clickedApply = () => {
    if(currentScene === 'standby') {
      dispatch(setScene(''))
    }
    if(
      currentScene === 'finalanswer'
      && quizData[currentQuestion].answer === userAnswer
    ) {
      dispatch(setScene('success'))
    }
    if(
      currentScene === 'finalanswer'
      && quizData[currentQuestion].answer === userAnswer
      && currentQuestion === 14)
    {
      dispatch(setScene('millionaire'))
    }
    if(
      currentScene === 'finalanswer'
      && quizData[currentQuestion].answer !== userAnswer
    ) {
      dispatch(setScene('failed'))
    }
    if(currentScene === 'success') {
      dispatch(nextQuestion())
      dispatch(setScene(''))
    }
    if(currentScene === 'failed' || currentScene === 'dropout' || currentScene === 'millionaire') {
      dispatch(resetQuestion())
      dispatch(setScene('standby'))
    }
  }

  const clickedCancel = () => {
    if(currentScene === 'finalanswer') {
      dispatch(setScene(''))
    }
    if(currentScene === 'success') {
      dispatch(setScene('dropout'))
    }
  }

  useEffect(() => {
    fetch('https://api-charades-fzx9fn3j387f.netlify.app/.netlify/functions/quiz-millionaire')
      .then(res => res.json())
      .then(res => dispatch(setQuizData(res)))
  }, [])

  const displayGame = () => (
    <DefaultLayout>
      <TheHeader />

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
        scene={ currentScene }
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
