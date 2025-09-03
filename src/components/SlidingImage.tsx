'use client';
import Image from 'next/image';

type SlidingImageProps = {
  src: string;
  alt?: string;
  height?: number;        // px height of the track
  durationMs?: number;    // animation speed
  className?: string;     
};

export default function SlidingImage({
  src,
  alt = '',
  height = 100,
  durationMs = 6000,
  className = 'w-50',
}: SlidingImageProps) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height }}
      aria-hidden={alt ? undefined : true}
    >
      <Image
        src={src}
        alt={alt}
        width={500}
        height={256}
        className={`absolute top-1/2 -translate-y-1/2 animate-slide-h
                    motion-reduce:animate-none ${className}`}
        style={{ ['--slide-duration']: `${durationMs}ms` } as React.CSSProperties }
        priority
      />
    </div>
  );
}
