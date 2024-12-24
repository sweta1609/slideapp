// const { authenticateAndLog } = require('../services/google.service');
// const { google } = require('googleapis');
// const logger = require('../config/logger');
// const fs = require('fs');
// async function downloadSlides(auth, presentationId, outputFilePath) {
//   try {
//     const drive = google.drive({ version: 'v3', auth });

//     // Export the presentation as a PPTX file
//     const exportResponse = await drive.files.export({
//       fileId: presentationId,
//       mimeType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
//     }, { responseType: 'stream' });

//     // Save the exported presentation to a file
//     const dest = fs.createWriteStream(outputFilePath);
//     exportResponse.data.pipe(dest);

//     return new Promise((resolve, reject) => {
//       dest.on('finish', () => {
//         console.log('Slides downloaded successfully in PPTX format.');
//         resolve();
//       });

//       dest.on('error', (err) => {
//         reject(err);
//       });
//     });
//   } catch (error) {
//     console.error('Error downloading slides:', error.message);
//     throw error;
//   }
// }




  
// exports.checkAuthentication = async (req, res) => {
//   try {
//     const auth = await authenticateAndLog();
//     if (auth && auth.credentials) {
//       const outputFilePath = 'output.pptx'; 
//       await downloadSlides(auth, '1sgEBx-JfX2s8bqsuTNuPL0tdR-KppS78AHhATTvkj-8', outputFilePath);
//       logger.info('Downloaded presentation in PPTX format.');
//       res.status(200).json({ success: true, message: 'Authentication successful, presentation downloaded in PPTX format' });
     
      
//     } else {
//       logger.info('Authentication successful but failed to fetch slides');
//     //   res.status(200).json({ success: true, message: 'Authentication successful, but failed to fetch slides' });
//     res.status(200).json({
//         success: true,
//         message: 'Authentication successful, but failed to fetch slides',
//         error: {
//           message: 'Failed to fetch slides',
//           details: 'Authentication credentials are missing or invalid.',
//         },
//       });
//     }
//   } catch (error) {
//     console.error('Authentication failed:', error);
//     logger.error(error);
//     res.status(500).json({ success: false, message: 'Authentication failed', error: error.message });
//   }
// };
const { authenticateAndLog } = require('../services/google.service');
const { google } = require('googleapis');
const logger = require('../config/logger');
const fs = require('fs');
const config = require("../config/index")
const AWS = require('aws-sdk')
const { v4: uuidv4 } = require('uuid');
const s3 = new AWS.S3({
  accessKeyId: config.aws.accessKey,
  secretAccessKey: config.aws.secretKey,
  region: config.aws.region,
  signatureVersion: 'v4',
})

async function downloadSlides(auth, presentationId, outputFilePath) {
  try {
    const drive = google.drive({ version: 'v3', auth });

    // Export the presentation as a PPTX file
    const exportResponse = await drive.files.export({
      fileId: presentationId,
      mimeType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    }, { responseType: 'stream' });

    // Save the exported presentation to a file
    const dest = fs.createWriteStream(outputFilePath);
    exportResponse.data.pipe(dest);

    return new Promise((resolve, reject) => {
      dest.on('finish', () => {
        console.log('Slides downloaded successfully in PPTX format.');
        resolve(outputFilePath); // Return the path where the presentation is saved
      });

      dest.on('error', (err) => {
        reject(err);
      });
    });
  } catch (error) {
    console.error('Error downloading slides:', error.message);
    throw error;
  }
}

async function uploadToS3(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath);
    const key = `presentations/${uuidv4()}.pptx`; // Unique key for the S3 object
    const params = {
      Bucket: config.cdn.cdnBucket,
      Key: key,
      Body: fileContent,
      ContentType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    };

    const uploadResult = await s3.upload(params).promise();
    console.log('File uploaded to S3:', uploadResult.Location);

    // Get the public URL directly without expiration time
    const publicUrl = ` https://s3.ap-south-1.amazonaws.com/${config.cdn.cdnBucket}/${key}`;
    return publicUrl;
  } catch (error) {
    console.error('Error uploading to S3:', error.message);
    throw error;
  }
}


exports.checkAuthentication = async (req, res) => {
  try {
    const auth = await authenticateAndLog();
    if (auth && auth.credentials) {
      const outputFilePath = 'output.pptx';
      const presentationPath = await downloadSlides(auth, '1sgEBx-JfX2s8bqsuTNuPL0tdR-KppS78AHhATTvkj-8', outputFilePath);
      const presentationUrl = await uploadToS3(presentationPath);

      logger.info('Downloaded presentation in PPTX format.');
      res.status(200).json({
        success: true,
        message: 'Authentication successful, presentation downloaded in PPTX format',
        presentationUrl,
      });
    } else {
      logger.info('Authentication successful but failed to fetch slides');
      res.status(200).json({
        success: true,
        message: 'Authentication successful, but failed to fetch slides',
        error: {
          message: 'Failed to fetch slides',
          details: 'Authentication credentials are missing or invalid.',
        },
      });
    }
  } catch (error) {
    console.error('Authentication failed:', error);
    logger.error(error);
    res.status(500).json({ success: false, message: 'Authentication failed', error: error.message });
  }
};






