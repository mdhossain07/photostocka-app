import { getPhotoById } from "@/lib/image-data";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params)?.id;
  const photo = getPhotoById(id);
  return NextResponse.json(photo);
}
