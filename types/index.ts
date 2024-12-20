export interface IPhotos {
  id: string;
  title: string;
  url: string;
}

export interface IPhotoDetails {
  id: string;
  title: string;
  url: string;
  views: string;
  share: string;
  uploaded: string;
  tags: string[];
  author: {
    avatar: string;
    name: string;
    bio: string;
    followers: number;
  };
  likes: number;
}
