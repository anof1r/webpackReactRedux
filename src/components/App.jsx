import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.less'
import Card from './card/Card'
import Main from './main/Main'

function App() {

  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
              <Route exact path="/" element={<Main />} />
              <Route path="/card/:username/:reponame" element={<Card />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App