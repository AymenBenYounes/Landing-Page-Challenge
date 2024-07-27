import { useState, useEffect } from 'react';

const Bfooter = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateImageSrc = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Set initial state
    updateImageSrc();

    // Add event listener
    window.addEventListener('resize', updateImageSrc);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', updateImageSrc);
  }, []);
  return (
    <div className="flex flex-wrap">
      <img
        className="w-6/12 sm:w-3/12"
        src={isMobile ? "./mobile/image-gallery-milkbottles.jpg" : "./desktop/image-gallery-milkbottles.jpg"}/>
      <img
        className="w-6/12 sm:w-3/12"
        src={isMobile ? "./mobile/image-gallery-orange.jpg" : "./desktop/image-gallery-orange.jpg"}/>
      <img
        className="w-6/12 sm:w-3/12"
        src={isMobile ? "./mobile/image-gallery-cone.jpg" : "./desktop/image-gallery-cone.jpg"}/>
      <img
        className="w-6/12 sm:w-3/12"
        src={isMobile ? "./mobile/image-gallery-sugar-cubes.jpg" : "./desktop/image-gallery-sugarcubes.jpg"}/>
    </div>
  );
}

export default Bfooter
