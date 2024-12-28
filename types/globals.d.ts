// types/globals.d.ts

export interface MetadataOpenGraph {
    title: string;
    description: string;
    url: string;
    images: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
    siteName: string;
    type: string;
    locale: string;
  }
  
  export interface MetadataTwitter {
    card: string;
    title: string;
    description: string;
    images: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
  }
  
  export interface MetadataStructuredData {
    "@context": string;
    "@type": string;
    url: string;
    name: string;
    description: string;
    author: {
      "@type": string;
      name: string;
    };
  }
  
  export interface Metadata {
    title: string;
    description: string;
    keywords: string;
    author: string;
    language: string;
    canonical: string;
    robots: string;
    openGraph: MetadataOpenGraph;
    twitter: MetadataTwitter;
    structuredData: MetadataStructuredData;
  }