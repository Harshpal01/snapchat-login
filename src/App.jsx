import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BodyContent from './components/content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      {/*!! login goes here */}
      <BodyContent/>
     </div>
    </>
  )
}

export default App
