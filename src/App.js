import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Home from './pages/Home'
import Notfound from './pages/Notfound'

const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
    font-size: 14px;
    height: 100%;
  }

  body {
    background-color: black;
  }

  body,
  #app {
    height: 100%;
  }
`
const App = () => {
  return (
    <>
      <GlobalStyled />
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route component={ Notfound } />
        </Switch>
      </Router>
    </>
  )
}

export default App
