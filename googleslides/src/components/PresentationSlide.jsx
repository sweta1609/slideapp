import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PresentationSlide() {
  const [presentationData, setPresentationData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPresentationData = async () => {
      try {
        // Make a GET request to your API endpoint
        const response = await axios.get('http://localhost:8001/presentation/list', {
          headers: {
            Authorization: `Bearer ${`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWFlMGFiYjFkZjFhYmEwOTY0MjhlM2UiLCJpYXQiOjE3MDYwNzYxNjEsImV4cCI6MTcwNjA3OTc2MX0.FdIDdTxa7jWA1RPiQVw-kpzOdrp9d_tT798Lh17QyfY`}`, // Replace with your actual access token
          },
        });

        // Update state with the fetched data
        setPresentationData(response.data.presentations[0].slides);
        console.log(response.data.presentations[0].slides)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching presentation data:', error);
        setLoading(false);
      }
    };

    fetchPresentationData();
  }, []);

  return (
    <div>
      <h2>Presentation Slide</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {presentationData.map((presentation) => (
            <li key={presentation.id}>
              <h3>{presentation.name}</h3>
              <p>ID: {presentation.id}</p>
              {/* <p>Web View Link: <a href={presentation.webViewLink} target="_blank" rel="noopener noreferrer">{presentation.webViewLink}</a></p> */}
              <iframe
                title={presentation.name}
                src={presentation.webViewLink.replace('/edit?usp=drivesdk', '/preview')}
                width="600"
                height="400"
                allowFullScreen
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PresentationSlide;
