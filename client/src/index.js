import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate

renderMethod(<App/>, document.getElementById('app'))