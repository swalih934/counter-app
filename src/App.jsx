import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Counter from './Counter';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-center text-light '>Counter App</h1>
      <Counter/>
    </>
  )
}

export default App
