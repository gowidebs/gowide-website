import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: auto;
    transition: opacity 0.3s ease;
    
    &.loading {
      opacity: 0;
    }
    
    &.loaded {
      opacity: 1;
    }
  }
`;

const PlaceholderDiv = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  
  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;

const OptimizedImage = ({ src, alt, width, height, priority = false, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  // Generate WebP and fallback URLs
  const webpSrc = src?.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  return (
    <ImageContainer {...props}>
      {!isLoaded && !hasError && (
        <PlaceholderDiv style={{ width, height }} />
      )}
      
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={isLoaded ? 'loaded' : 'loading'}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      </picture>
    </ImageContainer>
  );
};

export default OptimizedImage;