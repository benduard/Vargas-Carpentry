export interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryItemType {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface TestimonialType {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}