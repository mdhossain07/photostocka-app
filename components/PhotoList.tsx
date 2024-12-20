import { IPhotos } from "@/types";
import PhotoCard from "./PhotoCard";

export default function PhotoList({ photos }: { photos: IPhotos[] }) {
  return (
    <div className="img-grid">
      {photos?.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
