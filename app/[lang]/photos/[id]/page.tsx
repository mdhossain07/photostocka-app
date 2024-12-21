import PhotoDetails from "@/components/PhotoDetails";

export default async function PhotoDetailsPage({ params }) {
  const { id, lang } = await params;

  return <PhotoDetails id={id} lang={lang} />;
}
