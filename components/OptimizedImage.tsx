import React from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  srcSet?: string;
  sizes?: string;
}

/**
 * A wrapper for the <picture> tag that automatically handles WebP fallbacks
 * and performance best practices.
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className, 
  priority = false, 
  srcSet,
  sizes,
  ...props 
}) => {
  // Determine the WebP equivalent path
  const getWebPPath = (path: string) => {
    // If it's already a webp or a data URL/external, return as is
    if (path.includes('.webp') || path.startsWith('data:') || path.startsWith('http')) {
      return path;
    }
    // Replace .jpg, .jpeg, .png with .webp
    return path.replace(/\.(jpe?g|png)$/i, '.webp');
  };

  const webpSrc = getWebPPath(src);
  const isWebPNeeded = webpSrc !== src;

  return (
    <picture className={className}>
      {isWebPNeeded && (
        <source 
          srcSet={srcSet ? srcSet.replace(/\.(jpe?g|png)/ig, '.webp') : webpSrc} 
          type="image/webp" 
          sizes={sizes}
        />
      )}
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        className={className}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
