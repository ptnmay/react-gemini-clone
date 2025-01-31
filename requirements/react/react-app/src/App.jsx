// require('dotenv').config();  // This loads all the environment variables from .env file into process.env

import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

const App = () => {
    return (
        <>
            <Sidebar/>
            <Main/>
        </>
    )
}

export default App