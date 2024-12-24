// import React from 'react';
// // import { DocumentEditor } from "@onlyoffice/document-editor-react";

// // var onDocumentReady = function (event) {
// //     console.log("Document is loaded");
// // };

// // var onLoadComponentError = function (errorCode, errorDescription) {
// //     switch (errorCode) {
// //         case -1: // Unknown error loading component
// //             console.log(errorDescription);
// //             break;

// //         case -2: // Error load DocsAPI from http://documentserver/
// //             console.log(errorDescription);
// //             break;

// //         case -3: // DocsAPI is not defined
// //             console.log(errorDescription);
// //             break;
// //     }
// // };

// export default function TestPresentation() {
//     return (
//         // <pre>
//         //     <DocumentEditor
//         //         id="pptxEditor"
//         //         documentServerUrl="http://localhost:5173/"
//         //         config={{
//         //             "document": {
//         //                 "fileType": "pptx",
//         //                 "key": "Khirz6zTPdfd7",
//         //                 "title": "Example Presentation Title.pptx",
//         //                 "url": "https://testcheck.s3.ap-south-1.amazonaws.com/presentations/f16d7965-f4c3-4b7c-8c62-93bd7208cef3.pptx"
//         //             },
//         //             "documentType": "presentation",
//         //             "editorConfig": {
//         //                 "callbackUrl": "http://localhost:8001/api/document-changes"
//         //             }
//         //         }}
//         //         events_onDocumentReady={onDocumentReady}
//         //         onLoadComponentError={onLoadComponentError}
//         //     />
          
//         // </pre>
//         <>
//         <div id="ds-frame">Fallback text</div>
// <script src="https://swetakumari.onlyoffice.com/static/scripts/api.js?hash=370133d9f66fefd5a7e90f80833ad523&width=100%25&height=600px&frameId=ds-frame&showHeader=true&showTitle=true&showMenu=true&showFilter=true&init=true"></script></>
//     );
// }
import React, { useEffect } from 'react';

export default function TestPresentation() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://swetakumari.onlyoffice.com/static/scripts/api.js?hash=370133d9f66fefd5a7e90f80833ad523&width=100%25&height=600px&frameId=ds-frame&showHeader=true&showTitle=true&showMenu=true&showFilter=true&init=true';
        script.async = true;

        document.getElementById('ds-frame').appendChild(script);

        return () => {
            // Cleanup if needed
            document.getElementById('ds-frame').removeChild(script);
        };
    }, []);

    return (
        <>
            <div id="ds-frame">Fallback text</div>
        </>
    );
}
