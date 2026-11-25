import {ArrowLeft, ExternalLink, Home, Star, Volume2} from 'lucide-react';
import type {SimpleTranslations} from '../data/simpleTranslations';
import type {VideoItem} from '../types';

interface VideoPlayerViewProps {
  t: SimpleTranslations;
  video: VideoItem;
  isFavourite: boolean;
  onBack: () => void;
  onGoHome: () => void;
  onToggleFavourite: (video: VideoItem) => void;
  onSpeak: (text: string) => void;
}

export function VideoPlayerView({
  t,
  video,
  isFavourite,
  onBack,
  onGoHome,
  onToggleFavourite,
  onSpeak,
}: VideoPlayerViewProps) {
  const embedUrl = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.id)}?rel=0&autoplay=1`;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="btn-senior px-6 py-3 rounded-2xl surface-card hover:bg-orange-100 font-bold flex items-center gap-2.5 cursor-pointer"
          >
            <ArrowLeft className="w-6 h-6 shrink-0" aria-hidden="true" />
            <span>{t.backButton}</span>
          </button>

          <button
            type="button"
            onClick={onGoHome}
            className="btn-senior px-6 py-3 rounded-2xl surface-soft hover:bg-orange-100 font-bold flex items-center gap-2.5 cursor-pointer"
          >
            <Home className="w-6 h-6 shrink-0" aria-hidden="true" />
            <span>{t.homeButton}</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => onSpeak(video.title)}
            className="btn-senior px-5 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold flex items-center gap-2 cursor-pointer"
          >
            <Volume2 className="w-6 h-6 shrink-0" aria-hidden="true" />
            <span>{t.readAloud}</span>
          </button>

          <button
            type="button"
            onClick={() => onToggleFavourite(video)}
            className={`btn-senior px-6 py-3 rounded-2xl font-bold flex items-center gap-2.5 cursor-pointer ${
              isFavourite
                ? 'bg-amber-200 text-amber-950 border-2 border-amber-500'
                : 'surface-card hover:bg-amber-100'
            }`}
          >
            <Star className={`w-6 h-6 shrink-0 ${isFavourite ? 'fill-current' : ''}`} aria-hidden="true" />
            <span>{isFavourite ? t.savedFavourite : t.saveFavourite}</span>
          </button>
        </div>
      </div>

      <div className="surface-card rounded-3xl overflow-hidden shadow-sm">
        <div className="aspect-video w-full bg-black">
          <iframe
            src={embedUrl}
            title={video.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className="p-6 sm:p-8 space-y-5">
          <div>
            <p className="senior-subtext font-bold text-emerald-700 dark:text-emerald-400">
              {t.happyWatching}
            </p>
            <h1 className="senior-heading font-bold font-display mt-1">{video.title}</h1>
            <p className="senior-subtext text-muted-senior mt-1">{video.channelTitle}</p>
          </div>

          <div className="surface-soft rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="senior-subtext font-medium">{t.playerNote}</p>
            <a
              href={video.watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-senior px-7 py-3 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold flex items-center justify-center gap-2.5 shrink-0"
            >
              <ExternalLink className="w-6 h-6 shrink-0" aria-hidden="true" />
              <span>{t.watchOnYoutube}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
