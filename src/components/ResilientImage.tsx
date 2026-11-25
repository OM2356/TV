import {useState} from 'react';
import {Tv} from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  titleFallback?: string;
  className?: string;
}

export function ResilientImage({src, alt, titleFallback, className = 'w-full h-full object-cover'}: ResilientImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-orange-100 via-amber-50 to-emerald-50 dark:from-orange-950/70 dark:via-stone-900 dark:to-emerald-950/60"
      >
        <Tv className="w-10 h-10 text-orange-700 dark:text-orange-300 mb-2 shrink-0" aria-hidden="true" />
        {titleFallback && (
          <span className="text-base font-semibold text-stone-800 dark:text-stone-200 line-clamp-2">
            {titleFallback}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
      loading="lazy"
    />
  );
}
