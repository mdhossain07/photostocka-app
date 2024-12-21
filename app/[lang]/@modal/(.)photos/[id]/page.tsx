import Modal from "@/components/Modal";
import PhotoDetails from "@/components/PhotoDetails";

export default async function PhotoPage({ params }) {
  const { id, lang } = await params;

  return (
    <Modal>
      <PhotoDetails id={id} lang={lang} />
    </Modal>
  );
}
