import PhotoList from "@/components/PhotoList";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/photos`);
  const photos = await response.json();

  return <PhotoList photos={photos} />;
}
