import { useState, useRef, useEffect } from 'react';

import video from "../../../../../../assets/video_test.mp4"

const MOCK_MEDIA = [
  {
    type: 'image',
    ruta: 'https://www.du.edu.om/wp-content/uploads/2020/08/783px-Test-Logo.svg.png',
    alt: 'Primera imagen de prueba'
  },
  {
    type: 'video',
    ruta: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster: '/api/placeholder/800/600'
  },
  {
    type: 'audio',
    ruta: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
    thumbnail: '/api/placeholder/800/600'
  },
  {
    type: 'image',
    ruta: 'https://alfaomegaeditor.com.ar/wp-content/uploads/2023/02/unnamed.png',
    alt: 'Segunda imagen de prueba'
  },
  {
    type: 'audio',
    ruta: 'https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav',
    thumbnail: '/api/placeholder/800/600'
  }
];

export const MediaSlider = ({ media = MOCK_MEDIA }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef(null);
  const mediaRefs = useRef({});

  useEffect(() => {
    if (!isDragging) {
      const currentMedia = media[currentIndex];
      if (currentMedia.type === 'video' || currentMedia.type === 'audio') {
        const mediaElement = mediaRefs.current[currentIndex];
        if (mediaElement) {
          mediaElement.addEventListener('ended', handleMediaEnd);
          return () => mediaElement.removeEventListener('ended', handleMediaEnd);
        }
      }
    }
  }, [isDragging, currentIndex]);

  useEffect(() => {
    Object.entries(mediaRefs.current).forEach(([index, mediaRef]) => {
      if (parseInt(index) !== currentIndex) {
        mediaRef.pause();
      } else if (mediaRef && (media[currentIndex].type === 'video' || media[currentIndex].type === 'audio')) {
        mediaRef.play().catch(err => console.log('Error al reproducir:', err));
      }
    });
  }, [currentIndex]);

  const handleMediaEnd = () => {
    if (currentIndex < media.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleDragStart = (e) => {
    if (media.length <= 1) return;
    setIsDragging(true);
    setStartX(e.type === 'mousedown' ? e.pageX : e.touches[0].pageX);
  };

  const handleDragMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const currentX = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX;
    const diff = currentX - startX;
    const sliderWidth = sliderRef.current.offsetWidth;
    const boundedTranslateX = Math.max(Math.min(diff, sliderWidth), -sliderWidth);
    setTranslateX(boundedTranslateX);
  };

  const handleDragEnd = () => {
    if (!isDragging || !sliderRef.current) return;
    const sliderWidth = sliderRef.current.offsetWidth;
    const moveRatio = translateX / sliderWidth;
    if (moveRatio < -0.2 && currentIndex < media.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else if (moveRatio > 0.2 && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
    setIsDragging(false);
    setTranslateX(0);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const renderMediaItem = (item, index) => {
    const commonClasses = "max-w-full max-h-full w-auto h-auto object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
    
    switch (item.type) {
      case 'video':
        return (
          <video
            ref={el => mediaRefs.current[index] = el}
            src={video}
            poster={item.poster}
            className={`${commonClasses} w-full h-full object-cover`}
            controls
            playsInline
            preload="metadata"
          />
        );
      case 'audio':
        return (
          <div className="w-[90%] mx-auto h-full flex flex-col items-center justify-center">
            <audio
              ref={el => mediaRefs.current[index] = el}
              src={item.ruta}
              className="w-full max-w-md"
              controls
              preload="metadata"
            />
          </div>
        );
      default: // image
        return (
          <img
            src={item.ruta}
            alt={item.alt || `Slide ${index + 1}`}
            className={commonClasses}
            draggable="false"
          />
        );
    }
  };

  if (!media || media.length === 0) {
    return (
      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
        <span className="text-gray-400">No media available</span>
      </div>
    );
  }

  if (media.length === 1) {
    return (
      <div className="w-full aspect-video max-w-[800px] mx-auto bg-black relative">
        {renderMediaItem(media[0], 0)}
      </div>
    );
  }

  const translateValue = -currentIndex * 100 + (translateX / (sliderRef.current?.offsetWidth || 1) * 100);

  return (
    <div className="w-full aspect-square max-w-[600px] mx-auto relative overflow-hidden bg-black">
      <div
        ref={sliderRef}
        className="w-full h-full"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out h-full relative"
          style={{
            transform: `translateX(${translateValue}%)`,
          }}
        >
          {media.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full bg-black relative"
            >
              {renderMediaItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-md text-sm font-medium">
        {currentIndex + 1}/{media.length}
      </div>

      {currentIndex > 0 && (
        <button
          onClick={() => goToSlide(currentIndex - 1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 transition-colors"
          aria-label="Previous slide"
        >
          <span className="text-white font-bold">&lt;</span>
        </button>
      )}
      {currentIndex < media.length - 1 && (
        <button
          onClick={() => goToSlide(currentIndex + 1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 transition-colors"
          aria-label="Next slide"
        >
          <span className="text-white font-bold">&gt;</span>
        </button>
      )}
    </div>
  );
};

export default MediaSlider;