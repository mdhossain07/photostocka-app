import PhotoDetails from "@/components/PhotoDetails";

export default async function PhotoDetailsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const response = await fetch(`${process.env.BASE_API_URL}/photos/${id}`);
  const photo = await response.json();

  return <PhotoDetails photo={photo} />;
}
