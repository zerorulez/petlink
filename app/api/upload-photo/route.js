import { s3Client } from "@/lib/s3";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const fileName = searchParams.get("fileName");
  const fileType = searchParams.get("fileType");

  const command = new PutObjectCommand({
    Bucket: process.env.NEXT_S3_BUCKET,
    Key: fileName,
    ContentType: fileType,
  });

  try {
    const signedUrl = await getSignedUrl(s3Client, command, {
      expiresIn: 3600,
    });
    return new Response(JSON.stringify({ url: signedUrl }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to generate pre-signed URL" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
