export interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  slug: string;
}

export interface TrendingPost {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
}

export interface HeroSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  btnText: string;
  btnLink: string;
}

export interface IntroItem {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface MenuItem {
  id: number;
  title: string;
  link: string;
}

export interface Game {
  id: number;
  title: string;
  slug: string;
  image: string;
  category?: string;
  date?: string;
  excerpt?: string;
  ratings?: {
    price?: number;
    graphics?: number;
    levels?: number;
    gameplay?: number;
    difficulty?: number;
    overall?: number;
  };
}
