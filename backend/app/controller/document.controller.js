const AWS = require('aws-sdk')
const { v4: uuidv4 } = require('uuid');
const config =require("../config/index")
const Bucket = config.cdn.cdnBucket
const logger = require("../config/logger")
const s3 = new AWS.S3({
    accessKeyId: config.aws.accessKey,
    secretAccessKey: config.aws.secretKey,
    region: config.aws.region,
    signatureVersion: 'v4',
  })

  exports.getPresignedUrl = asyncHandler(async (req, res, next) => {
    let fileId = uuidv4();
    const Key = `${req?.params?.type}/${fileId}.${req?.body?.fileType.split('/')[1]}`;
    console.log('Generating Presigned URL', {
      Bucket,
      Key,
      ContentType: req?.body?.fileType,
    });
    try {
      const url = await s3.getSignedUrlPromise('putObject', {
        Bucket,
        Key,
        ACL: 'public-read-write',
        ContentType: req?.body?.fileType,
        Expires: 300,
      });
  
      console.log('Generated Presigned URL:', url);
      res.json({ url });
    } catch (err) {
      logger.error({ message: "Failed to Generate Presigned URL" });
      console.error('Failed to Generate Presigned URL:', err);
      return {
        statusCode: err.statusCode || 502,
        body: JSON.stringify({
          success: false,
          message: 'Pre-Signed URL error',
          err,
        }),
      };
    }
  });