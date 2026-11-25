import {Heart, Home, Moon, Sun} from 'lucide-react';
import type {SimpleTranslations} from '../data/simpleTranslations';
import type {AppSection, FontScale, Language, ThemeMode} from '../types';

interface SimpleHeaderProps {
  t: SimpleTranslations;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  fontScale: FontScale;
  onFontDecrease: () => void;
  onFontIncrease: () => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
  activeSection: AppSection;
  favouritesCount: number;
  onNavigateHome: () => void;
  onOpenFavourites: () => void;
}

export function SimpleHeader({
  t,
  language,
  onLanguageChange,
  fontScale,
  onFontDecrease,
  onFontIncrease,
  theme,
  onToggleTheme,
  activeSection,
  favouritesCount,
  onNavigateHome,
  onOpenFavourites,
}: SimpleHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]/95 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Home / Brand */}
        <button
          type="button"
          onClick={onNavigateHome}
          className="text-xl sm:text-2xl font-bold font-display whitespace-nowrap shrink-0 flex items-center gap-2.5 py-2 px-3 rounded-2xl hover:bg-[var(--bg-surface-soft)] transition-colors cursor-pointer"
        >
          <Home className="w-6 h-6 text-orange-600 shrink-0" aria-hidden="true" />
          <span>{activeSection === 'home' ? t.brandTitle : t.homeButton}</span>
        </button>

        {/* Favourites */}
        <button
          type="button"
          onClick={onOpenFavourites}
          className={`min-h-[48px] px-4 py-2 rounded-2xl font-bold text-[18px] whitespace-nowrap shrink-0 flex items-center gap-2 transition-colors cursor-pointer ${
            activeSection === 'favourites'
              ? 'bg-orange-600 text-white'
              : 'surface-soft hover:bg-orange-100 dark:hover:bg-orange-950/40'
          }`}
        >
          <Heart className="w-5 h-5 shrink-0 text-red-600 fill-red-600" aria-hidden="true" />
          <span>
            {t.favouritesButton}
            {favouritesCount > 0 ? ` (${favouritesCount})` : ''}
          </span>
        </button>

        {/* Language, Font Size & Theme Controls */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          {/* Font Size */}
          <div className="flex items-center gap-1 rounded-2xl p-1 surface-soft">
            <button
              type="button"
              onClick={onFontDecrease}
              disabled={fontScale === 'normal'}
              aria-label={t.fontDecrease}
              title={t.fontDecrease}
              className="min-h-[44px] min-w-[44px] px-2.5 text-[16px] font-bold rounded-xl disabled:opacity-40 hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer disabled:cursor-not-allowed"
            >
              अ-
            </button>
            <button
              type="button"
              onClick={onFontIncrease}
              disabled={fontScale === 'xlarge'}
              aria-label={t.fontIncrease}
              title={t.fontIncrease}
              className="min-h-[44px] min-w-[44px] px-2.5 text-[18px] font-bold rounded-xl disabled:opacity-40 hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer disabled:cursor-not-allowed"
            >
              अ+
            </button>
          </div>

          {/* Theme Switch */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'light' ? t.themeDark : t.themeLight}
            title={theme === 'light' ? t.themeDark : t.themeLight}
            className="min-h-[44px] min-w-[44px] px-3 rounded-2xl surface-soft flex items-center justify-center gap-1.5 font-bold text-[16px] cursor-pointer"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Sun className="w-5 h-5 text-amber-400" aria-hidden="true" />
            )}
          </button>

          {/* Language Switcher */}
          <div
            className="flex items-center rounded-2xl p-1 surface-soft shrink-0"
            role="group"
            aria-label="Language"
          >
            {([
              {code: 'mr', label: 'मराठी'},
              {code: 'hi', label: 'हिंदी'},
              {code: 'en', label: 'English'},
            ] as const).map((opt) => {
              const active = language === opt.code;
              return (
                <button
                  key={opt.code}
                  type="button"
                  onClick={() => onLanguageChange(opt.code)}
                  className={`min-h-[44px] px-3 py-1.5 text-[16px] font-bold rounded-xl whitespace-nowrap shrink-0 cursor-pointer transition-colors ${
                    active
                      ? 'bg-orange-600 text-white'
                      : 'text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/10'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
