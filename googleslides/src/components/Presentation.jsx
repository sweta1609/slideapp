import React from 'react'
import Slides from './Slides'

function Presentation({jsonData,onSlideClick }) {

  return (
    <div className="presentation">
    {jsonData.map((slide, index) => (
      <Slides
        key={index}
        title={slide.title}
        slides={slide.slides}
        pageSize={slide?.pageSize}
        pageElements={slide.pageElements}
        onSlideClick={() => onSlideClick(index)}
      />
    ))}
  </div>
  )
}

export default Presentation;