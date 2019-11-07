import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './main/routes'

import './assets'
import { initializeIcons } from '@uifabric/icons';

initializeIcons();

ReactDOM.render(  
        <Routes />
    , document.getElementById('app')
)