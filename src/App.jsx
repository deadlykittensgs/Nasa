import {useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

function App() {

  const [showModal, setshowModal] = useState(false)

function handelToggleModal() {
setshowModal(!showModal)
}

useEffect(() => {
  async function fetchAPIData() {
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
    const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`
    
    try {
      const res =  await fetch(url)
      const data = await res.json
      console.log('DATA\n', data)
      
    } catch (err) {
      console.log(err.message)
      
    }
  }
  fetchAPIData()
},[])

  return (
    <>
      <Main></Main>

   {( showModal &&
   <Sidebar handelToggleModal= {handelToggleModal}/>)}
 
   <Footer handelToggleModal = {handelToggleModal}/>

    </>
  )
}

export default App