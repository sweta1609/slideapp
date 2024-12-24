
const config = {
  aws: {
    accessKey: process.env.ACCESS_KEY,
    secretKey: process.env.SECRET_KEY,
    region: process.env.AWS_REGION_NAME,
  },
  cdn: {
    s3Bucket: process.env.FILE_BUCKET || null ,
    documentBucket: process.env.DOCUMENT_BUCKET || null,
    cdnBucket: process.env.CDN_BUCKET || "testcheck",
  },
}



module.exports = config
