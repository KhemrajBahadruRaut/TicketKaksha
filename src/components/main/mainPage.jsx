import React, { useState, useEffect } from 'react';

const TravelAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start the loop after 2 seconds
    const initialTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 2000);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (isAnimating) {
      // Auto close after 5 seconds of being open (longer to enjoy the smooth animation)
      const closeTimer = setTimeout(() => {
        setIsAnimating(false);
      }, 5000);

      return () => clearTimeout(closeTimer);
    } else {
      // Auto open after 2.5 seconds of being closed
      const openTimer = setTimeout(() => {
        setIsAnimating(true);
      }, 2500);

      return () => clearTimeout(openTimer);
    }
  }, [isAnimating]);

  // Individual image configurations with hardcoded dimensions
  const imageConfigs = [
    // Top row
    { 
      name: 'Nepal Stupa', 
      src: '/src/assets/main/kaksh_bg12.png',
      width: '300px',
      height: '350px'
    },
    { 
      name: 'Taj Mahal', 
      src: '/src/assets/main/kaksh_bg9.png',
      width: '280px',
      height: '200px'
    },
    { 
      name: 'Bali Gate', 
      src: '/src/assets/main/kaksh_bg11.png',
      width: '320px',
      height: '220px'
    },
    { 
      name: 'Dubai Frame', 
      src: '/src/assets/main/kaksh_bg8.png',
      width: '290px',
      height: '240px'
    },
    // Bottom row
    { 
      name: 'Sydney Opera', 
      src: '/src/assets/main/kaksh_bg7.png',
      width: '290px',
      height: '230px'
    },
    { 
      name: 'Eiffel Tower', 
      src: '/src/assets/main/kaksh_bg15.png',
      width: '270px',
      height: '280px'
    },
    { 
      name: 'Romania Castle', 
      src: '/src/assets/main/kaksh_bg6.png',
      width: '300px',
      height: '210px'
    },
    { 
      name: 'Burj Al Arab', 
      src: '/src/assets/main/kaksh_bg13.png',
      width: '285px',
      height: '260px'
    }
  ];

  const createFallbackSvg = (name, color = '#666') => {
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='${encodeURIComponent(color)}' width='200' height='200'/%3E%3Ctext x='100' y='100' text-anchor='middle' fill='white' font-size='14' dy='.3em'%3E${encodeURIComponent(name)}%3C/text%3E%3C/svg%3E`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="relative w-full max-w-6xl bg-white overflow-hidden">
        
        {/* Top Row - Each image in individual div */}
        <div className="flex w-full justify-center items-end gap-3 p-3">
          
          {/* Nepal Stupa */}
          <div 
            className={`
              relative overflow-hidden transition-all duration-[3500ms] rounded-tl-[50px]
               ease-in-out 
              ${isAnimating ? '' : ''}
            `}
            style={{
              width: imageConfigs[0].width,
              height: imageConfigs[0].height,
              clipPath: 'inset(0 0 0 0)',
              transition: 'clip-path 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            <img
              src={imageConfigs[0].src}
              alt={imageConfigs[0].name}
              className="w-full h-full object-cover rounded"
              onError={(e) => {
                e.target.src = createFallbackSvg(imageConfigs[0].name);
              }}
            />
          </div>

          {/* Taj Mahal - Animates */}
          <div 
            className={`
              relative overflow-hidden transition-all duration-[3500ms] ease-in-out
              ${isAnimating ? 'animate-clip-top' : ''}
            `}
            style={{
              width: imageConfigs[1].width,
              height: imageConfigs[1].height,
              clipPath: isAnimating ? 'inset(0 0 50% 0)' : 'inset(0 0 0 0)',
              transition: 'clip-path 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            <img
              src={imageConfigs[1].src}
              alt={imageConfigs[1].name}
              className="w-full h-full object-cover rounded"
              onError={(e) => {
                e.target.src = createFallbackSvg(imageConfigs[1].name);
              }}
            />
          </div>

          {/* Bali Gate - Animates */}
          <div 
            className={`
              relative overflow-hidden transition-all duration-[3500ms] ease-in-out
              ${isAnimating ? 'animate-clip-top' : ''}
            `}
            style={{
              width: imageConfigs[2].width,
              height: imageConfigs[2].height,
              clipPath: isAnimating ? 'inset(0 0 30% 0)' : 'inset(0 0 0 0)',
              transition: 'clip-path 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            <img
              src={imageConfigs[2].src}
              alt={imageConfigs[2].name}
              className="w-full h-full object-cover rounded"
              onError={(e) => {
                e.target.src = createFallbackSvg(imageConfigs[2].name);
              }}
            />
          </div>

          {/* Dubai Frame */}
          <div 
            className={`
              relative overflow-hidden transition-all duration-[3500ms] ease-in-out
              ${isAnimating ? '' : ''}
            `}
            style={{
              width: imageConfigs[3].width,
              height: imageConfigs[3].height,
              clipPath: 'inset(0 0 0 0)',
              transition: 'clip-path 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            <img
              src={imageConfigs[3].src}
              alt={imageConfigs[3].name}
              className="w-full h-full object-cover rounded"
              onError={(e) => {
                e.target.src = createFallbackSvg(imageConfigs[3].name);
              }}
            />
          </div>
        </div>
        
        {/* Bottom Row - Each image in individual div */}
        <div className="flex w-full justify-center items-start gap-3 p-3">
          
          {/* Sydney Opera */}
          <div 
            className={`
              relative overflow-hidden transition-all duration-[3500ms] ease-in-out rounded-bl-[50px]
              ${isAnimating ? '' : ''}
            `}
            style={{
              width: imageConfigs[4].width,
              height: imageConfigs[4].height,
              clipPath: 'inset(0 0 0 0)',
              transition: 'clip-path 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            <img
              src={imageConfigs[4].src}
              alt={imageConfigs[4].name}
              className="w-full h-full object-cover rounded"
              onError={(e) => {
                e.target.src = createFallbackSvg(imageConfigs[4].name);
              }}
            />
          </div>

          {/* Eiffel Tower - Animates */}
          <div 
            className={`
              relative overflow-hidden transition-all duration-[3500ms] ease-in-out
              ${isAnimating ? 'animate-clip-bottom' : ''}
            `}
            style={{
              width: imageConfigs[5].width,
              height: imageConfigs[5].height,
              clipPath: isAnimating ? 'inset(30% 0 0 0)' : 'inset(0 0 0 0)',
              transition: 'clip-path 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            <img
              src={imageConfigs[5].src}
              alt={imageConfigs[5].name}
              className="w-full h-full object-cover rounded"
              onError={(e) => {
                e.target.src = createFallbackSvg(imageConfigs[5].name);
              }}
            />
          </div>

          {/* Romania Castle - Animates */}
          <div 
            className={`
              relative overflow-hidden transition-all duration-[3500ms] ease-in-out
              ${isAnimating ? 'animate-clip-bottom' : ''}
            `}
            style={{
              width: imageConfigs[6].width,
              height: imageConfigs[6].height,
              clipPath: isAnimating ? 'inset(30% 0 0 0)' : 'inset(0 0 0 0)',
              transition: 'clip-path 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            <img
              src={imageConfigs[6].src}
              alt={imageConfigs[6].name}
              className="w-full h-full object-cover rounded"
              onError={(e) => {
                e.target.src = createFallbackSvg(imageConfigs[6].name);
              }}
            />
          </div>

          {/* Burj Al Arab */}
          <div 
            className={`
              relative overflow-hidden transition-all duration-[3500ms] ease-in-out
              ${isAnimating ? '' : ''}
            `}
            style={{
              width: imageConfigs[7].width,
              height: imageConfigs[7].height,
              clipPath: 'inset(0 0 0 0)',
              transition: 'clip-path 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            <img
              src={imageConfigs[7].src}
              alt={imageConfigs[7].name}
              className="w-full h-full object-cover rounded"
              onError={(e) => {
                e.target.src = createFallbackSvg(imageConfigs[7].name);
              }}
            />
          </div>
        </div>
        
        {/* Text Overlay */}
        <div 
          className={`
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            text-center transition-all duration-[1500ms] ease-in-out z-10 pointer-events-none
            ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}
          style={{ 
            transitionDelay: isAnimating ? '1.8s' : '0s',
            transition: 'opacity 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
        >
          <h1 className="text-5xl font-bold m-0">
            <span className="text-gray-800">Book</span>{' '}
            <span className="italic text-blue-500">Globally.</span>
            <br />
            <span className="italic text-blue-500">Travel</span>{' '}
            <span className="text-gray-800">Freely.</span>
          </h1>
        </div>
      </div>
      
      <style jsx>{`
        .animate-clip-top {
          transform-origin: top center;
        }
        
        .animate-clip-bottom {
          transform-origin: bottom center;
        }
      `}</style>
    </div>
  );
};

export default TravelAnimation;