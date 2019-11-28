import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Store from './components/Store'

ReactDOM.render(
    <Store>
        <App/>
    </Store>,
    document.getElementById('root')
)
