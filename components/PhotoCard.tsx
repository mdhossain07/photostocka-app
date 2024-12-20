import { IPhotos } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function PhotoCard({ photo }: { photo: IPhotos }) {
  return (
    <Link href={`/photos/${photo.id}`} className="group">
      <Image src={photo.url} alt={photo.title} height={700} width={700} />
      <div className="title-container">
        <h4 className="title">{photo.title}</h4>
      </div>
    </Link>
  );
}