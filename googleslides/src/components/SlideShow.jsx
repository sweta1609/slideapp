import React from 'react'
import ReactGoogleSlides from "react-google-slides";

function SlideShow() {
  return (
    <ReactGoogleSlides
    width={640}
    height={480}
    slidesLink="https://docs.google.com/presentation/d/1X-bK_oqFM1tuuKEaGbLiRsOk4mabG3xC4B6rMUwvMsQ/edit#slide=id.p"
    slideDuration={5}
    position={1}
    showControls
    loop
  />
  )
}

export default SlideShow