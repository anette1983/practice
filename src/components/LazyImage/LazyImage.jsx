import { useEffect, useRef } from 'react';

export const LazyImage = ({ src, alt }) => {
  const imageRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const image = entry.target;
            image.src = src;
            console.log('Loading image:', src);
            observer.unobserve(image);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentImageRef = imageRef.current;

    if (currentImageRef) {
      observer.observe(currentImageRef);
    }

    return () => {
      if (currentImageRef) {
        observer.unobserve(currentImageRef);
      }
    };
  }, [src]);

  return (
    <img
      ref={imageRef}
      alt={alt}
      data-src={src}
      style={{ width: '200px', height: 'auto' }}
    />
  );
};

export default LazyImage;

// import { useState, useEffect, useRef } from 'react';

// const LazyImage = ({ src, alt = 'image' }) => {
//   const [imageSrc, setImageSrc] = useState(null); // Початково `null`
//   const imageRef = useRef();

//   console.log(src);
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && src) {
//           setImageSrc(src);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (imageRef.current) {
//       observer.observe(imageRef.current);
//     }

//     return () => {
//       if (imageRef.current) observer.disconnect();
//     };
//   }, [src]);

//   return (
//     <img
//       ref={imageRef}
//       src={imageSrc}
//       style={{ width: '200px', height: 'auto' }}
//       alt={alt}
//     />
//   );
// };

// export default LazyImage;
