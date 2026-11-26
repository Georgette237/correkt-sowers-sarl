import React, { useState } from 'react';
import { SiteIcon } from './Icons';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'auto' | 'sync';
  width?: number;
  height?: number;
  isLogo?: boolean;
  onClick?: () => void;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  className,
  style,
  loading = 'lazy',
  decoding = 'async',
  width,
  height,
  isLogo = false,
  onClick,
}) => {
  const [failed, setFailed] = useState(false);

  if (failed && isLogo) {
    return (
      <div
        className="flex items-center gap-2.5 select-none"
        style={{ color: '#14401f', ...style }}
        aria-label={alt}
      >
        <span
          className="grid place-items-center rounded-xl"
          style={{
            width: 42,
            height: 42,
            background: 'linear-gradient(135deg, #1f6b32, #3f9153)',
            color: '#fff',
          }}
        >
          <SiteIcon name="poisson" className="w-7 h-5" />
        </span>
        <span className="flex flex-col leading-none">
          <b className="text-sm font-extrabold tracking-widest uppercase">CORREKT SOWERS</b>
          <span className="text-[10px] tracking-[0.22em] text-[#4c5a4e] mt-1">SARL · YAOUNDÉ</span>
        </span>
      </div>
    );
  }

  if (failed) {
    return (
      <div
        onClick={onClick}
        className={className}
        style={{
          width: '100%',
          height: '100%',
          background:
            'radial-gradient(circle at 22% 22%, rgba(140,198,63,0.28), transparent 55%), linear-gradient(145deg, #14401f 0%, #1f6b32 55%, #2f7d8f 100%)',
          color: '#eaf3e6',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '18px',
          textAlign: 'center',
          gap: '10px',
          ...style,
        }}
        role="img"
        aria-label={alt}
      >
        <SiteIcon name="poisson" className="w-14 h-9 opacity-80" />
        <span className="text-xs font-medium opacity-90 max-w-[28ch] leading-snug">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      decoding={decoding}
      width={width}
      height={height}
      onClick={onClick}
      onError={() => setFailed(true)}
    />
  );
};
