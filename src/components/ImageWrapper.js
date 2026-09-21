'use client';

import Image from 'next/image';
import { useState } from 'react';

/**
 * ImageWrapper Component
 * A premium wrapper around Next.js's Image component.
 * Provides custom loading fades to prevent layout shifts and enhance UX.
 */
export default function ImageWrapper({
  src,
  alt = 'Heapvue Image',
  width,
  height,
  fill = false,
  priority = false,
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  style = {},
  ...props
}) {
  const [isLoading, setLoading] = useState(true);

  // Determine if it should be an absolute path from public or a relative import
  const imageSrc = src || '/images/placeholder.png';

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div
      className={`position-relative overflow-hidden ${className}`}
      style={{
        backgroundColor: isLoading ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
        transition: 'background-color 0.5s ease-in-out',
        width: fill ? '100%' : width ? `${width}px` : 'auto',
        height: fill ? '100%' : height ? `${height}px` : 'auto',
        display: fill ? 'block' : 'inline-block',
        ...style,
      }}
    >
      <Image
        src={imageSrc}
        alt={alt}
        width={fill ? undefined : width || 800}
        height={fill ? undefined : height || 600}
        fill={fill}
        priority={priority}
        sizes={sizes}
        onLoad={handleLoad}
        style={{
          opacity: isLoading ? 0 : 1,
          transform: isLoading ? 'scale(1.02)' : 'scale(1)',
          transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          objectFit: 'cover',
        }}
        {...props}
      />
    </div>
  );
}
