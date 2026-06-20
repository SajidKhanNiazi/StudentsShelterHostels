'use client';

import { useState } from 'react';

export default function GalleryImage({ src, alt, fallbackText }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      onError={() => {
        // Fallback to a placeholder if the local image hasn't been uploaded yet
        setImgSrc(`https://placehold.co/600x400/fcfbf9/b89c72?text=${encodeURIComponent(fallbackText)}`);
      }}
    />
  );
}
