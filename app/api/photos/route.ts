import { getAllPhotos } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET() {
  const photos = getAllPhotos();
  const data = photos?.map((photo) => {
    return {
      id: photo.id,
      title: photo.title,
      url: photo.url,
    };
  });
  return NextResponse.json(data);
}
