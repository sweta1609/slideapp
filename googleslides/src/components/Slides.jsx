import React from "react";

// Slide component for rendering individual slides
const Slides = ({ title, pageSize, pageElements, slides, onSlideClick }) => {
  // Convert EMUs to pixels for width and height
  //   const width = pageSize.width.magnitude * 0.0264583;
  //   const height = pageSize.height.magnitude * 0.0264583;

  // Style for the slide container
  const slideStyle = {
    width: "100 px",
    height: "100 px",
    border: "1px solid #ddd",
    padding: "20px",
    margin: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  // Style for the title
  const titleStyle = {
    fontSize: "24px",
    marginBottom: "15px",
  };
  console.log(slides);

  return (
    <>
      <h1 style={titleStyle}>{title}</h1>

      {slides?.map((slide, slideIndex) => (
        <div
          className="slide"
          style={slideStyle}
          key={slideIndex}
          onClick={() => {
            console.log("Clicked on slide index:", slideIndex);
            onSlideClick(slideIndex);
          }}

        >
          <div>
            <h2>{slide.title}</h2>
            {slide.pageElements?.map((element, elementIndex) => {
              const { shape } = element;
              const { width, height } = element.size;

              if (shape?.shapeType === "TEXT_BOX") {
                const textContent =
                  shape?.text?.textElements?.[1]?.textRun?.content;
                return (
                  <div key={elementIndex} className="text-box">
                    {textContent ? (
                      <p>{textContent}</p>
                    ) : (
                      <input type="text" placeholder="Enter text" />
                    )}
                  </div>
                );
              } else if (element?.image?.contentUrl) {
                // Handle other shape types if needed
                return (
                  <div key={elementIndex}>
                    <img
                      src={element.image.contentUrl}
                      alt="Description of the image"
                    />
                  </div>
                );
              } else if (element?.sheetsChart?.contentUrl) {
                return (
                  <div key={elementIndex}>
                    <p>Check</p>
                  </div>
                );
              } else {
                return (
                  <div key={elementIndex}>
                    <p>other shapes</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      ))}
    </>
  );
};

// Presentation component for rendering the entire presentation
export default Slides;
// Usage in another component or file
