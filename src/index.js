import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import 'sanitize.css'
import App from './App'
import store from './stores/index'

ReactDom.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.querySelector('#app')
)
