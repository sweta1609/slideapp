import React from 'react'
import ReactGoogleSlides from 'react-google-slides'

function GoogleSlide() {

  return (
    <div>
        <ReactGoogleSlides
      width={640}
      height={480}
      slidesLink="https://docs.google.com/presentation/d/1X-bK_oqFM1tuuKEaGbLiRsOk4mabG3xC4B6rMUwvMsQ"
      slideDuration={5}
      position={1}
      showControls
      loop
    />
    </div>
  )
}

export default GoogleSlide