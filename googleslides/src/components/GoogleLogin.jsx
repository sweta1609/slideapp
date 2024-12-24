
import React, { useState,useEffect } from 'react';
import axios from 'axios';


const GoogleLogin = () => {

// const CLIENT_ID=`477700713459-54r20nhh8vubd2l1g12705r0esp92ecm.apps.googleusercontent.com`
// const REDIRECT_URL="http://localhost:5173"

//   const handleGoogleLogin = () => {
//     // const scope = 'https://www.googleapis.com/auth/drive.readonly';
//     const scopes = [
//       'https://www.googleapis.com/auth/drive.readonly',
//       'https://www.googleapis.com/auth/presentations.readonly',
//       'https://www.googleapis.com/auth/presentations',
//       'https://www.googleapis.com/auth/drive.metadata.readonly '
//     ];
  
//     const scope = scopes.join(' ');
  
//     const authorizationUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=code&scope=${encodeURIComponent(scope)} profile email`;
//     window.location.href = authorizationUrl;
//   };
  


//   useEffect(() => {
//     const extractCodeFromURL = async () => {
//       try {
//         const url = new URL(window.location.href);
//         const code = url.searchParams.get("code");
  
//         if (code) {
//           console.log('Authorization Code:', code);
//           window.history.replaceState(
//             {},
//             document.title,
//             url.origin + url.pathname
//           );
//           await handleAuthorizationCode(code);
//         }
//       } catch (error) {
//         console.error('Error extracting authorization code:', error);
//       }
//     };
  
//     extractCodeFromURL();
//   }, []);
  

//   const handleAuthorizationCode = async (code) => {
//     try {
//       const response = await axios.post(
//         'http://localhost:8001/auth/google/callback',
//         { code },
//         { headers: { 'Content-Type': 'application/json' } }
//       );
//       console.log('Backend Response:', response.data);
//     } catch (error) {
//       console.error('Error sending code to backend:', error);
    
//     }
//   };

const handleNewPresentation = async () => {
  try {
    const access_token = localStorage.getItem('access_token'); 
    const title = "new kew1";
    const batchUpdatePayload = {
      requests: [
        {
          createSlide: {
            objectId: "hgDyti_91",
            insertionIndex: 1,
            slideLayoutReference: {
              predefinedLayout: "TITLE_AND_TWO_COLUMNS",
            },
          },
        },
      ],
    };
    const requestBody = {
      access_token,
      title,
      batchUpdatePayload,
    };
    const response = await axios.post(
      'http://localhost:8001/presentation/createnew',
      requestBody,
      {
        headers: {
          'Content-Type': 'application/json',  
        },
      }
    );
    console.log('Backend Response:', response.data);
  } catch (error) {
    console.error('Error sending request to backend:', error);
  }
};


const handleExistingPresentation=async()=>{
  try{
    const access_token = localStorage.getItem('access_token'); 
    const presentationId = localStorage.getItem('presentationId')
    const batchUpdatePayload = {
      requests: [
        {
          createSlide: {
            objectId: "hgDyti_91",
            insertionIndex: 1,
            slideLayoutReference: {
              predefinedLayout: "TITLE_AND_TWO_COLUMNS",
            },
          },
        },
      ],
    };
    const response = await axios.post(
      'http://localhost:8001/presentation/editexisting',
      {access_token,batchUpdatePayload,presentationId},
      {
        headers: {
          'Content-Type': 'application/json',  
        },
      }
    );
    console.log('Backend Response:', response.data);

  }catch(error){
    console.error('Error sending request to backend:', error);
  }
}
  


  return (
    <>
       {/* <button onClick={handleGoogleLogin}>
      Sign In with Google
    </button> */}
    <button onClick={handleExistingPresentation}>Publish Now</button>
    </>

 
  );
};

export default GoogleLogin;

