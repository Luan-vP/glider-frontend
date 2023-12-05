import { useState, useEffect } from 'react'
import axios from 'axios'

function GliderCard(): JSX.Element {
  const [glider, setGlider] = useState("")
  const [gliderImage, setGliderImage] = useState("")
  const [gliderFitness, setGliderFitness] = useState(0)

  useEffect(() => {
    axios.post('http://localhost:8000/vehicle', {}).then((response) => {
      setGlider(() => response.data)
      // console.log(response.data)
      // console.log(glider)
      getGliderImage(response.data)
      getGliderFitness(response.data)
    })
  }, [])

  let getGliderImage = (g) => {
    axios.post('http://localhost:8000/vehicle/view', g).then((response) => {
      setGliderImage(() => response.data.data)
    })
  }

  let getGliderFitness = (g) => {
    axios.post('http://localhost:8000/vehicle/fitness', g).then((response) => {
      setGliderFitness(() => response.data)
    })
  }
  
  return (
    <>
      <div className="card">
        <h5 className="card-title">Welcome to ze glider!</h5>
        <img src={"data:image/png;base64,"+gliderImage}/>
        <p>Fitness: {gliderFitness}</p>
      </div>
    </>
  )

  }

export default GliderCard