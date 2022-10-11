import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCount } from '../reducers/reposReducer'
import './app.less'

function App() {
  const [number, setNumber] = useState(1)
  const dispatch = useDispatch()
  const count = useSelector(state => state.repos.count)
  const onCountClick = () => {
    setNumber(number + 1)
    dispatch(setCount(number))
  }
  return (
    <div className='app'>
      <button onClick={() => onCountClick()}>Increase number</button>
      <div>
        {count}
      </div>
    </div>
  )
}

export default App