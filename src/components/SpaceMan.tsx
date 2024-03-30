import React from 'react';

interface SpaceManProps {
  title: string;
  src: string;
  className?: string;
}

const SpaceMan: React.FC<SpaceManProps> = ({ title, src, className }) => {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title={title}
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src={src}
        className={className}
      ></iframe>
    </div>
  );
};

export default SpaceMan;
