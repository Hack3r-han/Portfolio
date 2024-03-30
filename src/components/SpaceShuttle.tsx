import React from 'react';

interface SpaceShuttleProps {
  title: string;
  src: string;
  className?: string;
}

const SpaceShuttle: React.FC<SpaceShuttleProps> = ({ title, src, className }) => {
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

export default SpaceShuttle;