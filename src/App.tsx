import { useState, useEffect } from 'react'
import './App.css'
import GliderCard from './components/GliderCard'
import { Container } from '@mui/material'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container>
        <GliderCard />
      </Container>
    </>
  )
}

export default App
