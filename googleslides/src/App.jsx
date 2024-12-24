import { useState,useEffect } from 'react'
import './App.css'
import GoogleLogin from './components/GoogleLogin'

import PresentationSlide from './components/PresentationSlide'
import TestPresentation from './components/TestPresentation'
import SlideShow from './components/SlideShow'
import Slides from './components/Slides'
import GoogleSlidesViewer from './components/GoogleSlidesViewer'
import GoogleSlide from './components/GoogleSlide'
import BinaryData from './components/BinaryData'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    {/* <GoogleLogin/> */}
    {/* <PresentationSlide/> */}
    {/* <TestPresentation/> */}
    {/* <SlideShow/> */}
    {/* <Slides/> */}
    {/* <GoogleSlidesViewer/> */}
    {/* <GoogleSlide/> */}
    <BinaryData/>
    </>
  )
}

export default App
