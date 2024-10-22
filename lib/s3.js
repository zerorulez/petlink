import { S3Client } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  forcePathStyle: true,
  endpoint: process.env.NEXT_S3_ENDPOINT,
  region: process.env.NEXT_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_S3_SECRET_ACCESS_KEY,
  },
});

export { s3Client };
