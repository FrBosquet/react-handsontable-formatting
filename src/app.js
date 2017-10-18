import React from 'react'
import ReactDOM from 'react-dom'

import Greeting from './components/greeting'

const App = () => <Greeting title="Hello React"/>

ReactDOM.render(
  <App />,
  document.getElementById('app')
)