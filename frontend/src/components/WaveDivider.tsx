/**
 * Branded SVG Wave Dividers — Sheger City
 * Color sequence: Red (#dc2626) → White (#ffffff) → Black (#0f172a)
 */

type WaveVariant =
  | 'darkToLight'
  | 'lightToDark'
  | 'whiteToDark'
  | 'darkToWhite'
  | 'redAccent'
  | 'lightToWhite'
  | 'thinStripe'
  | 'heroMatch';   // ← continues exact hero bottom curve

interface WaveDividerProps {
  variant?: WaveVariant;
  className?: string;
}

export default function WaveDivider({ variant = 'darkToLight', className = '' }: WaveDividerProps) {

  /* ── Thin decorative tri-color stripe: Red → White → Black ─── */
  if (variant === 'thinStripe') {
    return (
      <div className={`w-full ${className}`} aria-hidden="true">
        <div className="h-[2px] w-full bg-red-600" />
        <div className="h-[2px] w-full bg-white border-y border-slate-100" />
        <div className="h-[2px] w-full bg-slate-950" />
      </div>
    );
  }

  /* ── heroMatch — exactly continues the hero bottom SVG curve ─── */
  if (variant === 'heroMatch') {
    return (
      <div className={`relative w-full overflow-hidden leading-none ${className}`} style={{ height: 120 }}>
        <svg viewBox="0 0 1440 120" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {/* 1. Red layer — tallest */}
          <path
            d="M0 120L60 108C120 96 240 72 360 58C480 44 600 44 720 51C840 58 960 72 1080 79C1200 86 1320 86 1380 86L1440 86V120H0Z"
            fill="#dc2626"
          />
          {/* 2. White layer — mid */}
          <path
            d="M0 120L60 114C120 108 240 96 360 88C480 80 600 80 720 84C840 88 960 96 1080 100C1200 104 1320 104 1380 104L1440 104V120H0Z"
            fill="#ffffff"
          />
          {/* 3. Black — lowest */}
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#0f172a"
          />
        </svg>
      </div>
    );
  }

  /* ── redAccent — Red → White → Black ────── */
  if (variant === 'redAccent') {
    return (
      <div className={`relative w-full overflow-hidden leading-none ${className}`} style={{ height: 90 }}>
        <svg viewBox="0 0 1440 90" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {/* 1. Red — widest back */}
          <path d="M0 90V38C180 8 360 0 540 8C720 16 900 44 1080 50C1260 56 1380 40 1440 32V90H0Z" fill="#dc2626" />
          {/* 2. White — middle */}
          <path d="M0 90V56C160 32 320 22 480 28C640 34 800 54 960 58C1120 62 1300 48 1440 42V90H0Z" fill="#ffffff" />
          {/* 3. Black — bottom with wave */}
          <path d="M0 90V70C200 52 400 46 600 52C800 58 1000 70 1200 68C1320 66 1400 60 1440 57V90H0Z" fill="#0f172a" />
        </svg>
      </div>
    );
  }

  /* ── darkToLight: Red → White → Black ─────────────────────────── */
  if (variant === 'darkToLight') {
    return (
      <div className={`relative w-full overflow-hidden leading-none ${className}`} style={{ height: 80 }}>
        <svg viewBox="0 0 1440 80" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <path d="M0 80V33C240 4 480 0 720 8C960 16 1200 42 1440 36V80H0Z" fill="#dc2626" />
          <path d="M0 80V50C200 30 400 22 600 28C800 34 1000 54 1200 52C1320 50 1400 46 1440 44V80H0Z" fill="#ffffff" opacity="0.92" />
          <path d="M0 80V63C180 47 360 43 540 49C720 55 900 66 1080 64C1260 62 1380 56 1440 53V80H0Z" fill="#0f172a" />
        </svg>
      </div>
    );
  }

  /* ── lightToDark: Red → White → Black ─────── */
  if (variant === 'lightToDark') {
    return (
      <div className={`relative w-full overflow-hidden leading-none ${className}`} style={{ height: 40 }}>
        <svg viewBox="0 0 1440 80" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <path d="M0 0V47C240 77 480 80 720 72C960 64 1200 38 1440 44V0H0Z" fill="#dc2626" />
          <path d="M0 0V28C200 54 400 64 600 58C800 52 1000 30 1200 32C1320 34 1400 40 1440 44V0H0Z" fill="#ffffff" opacity="0.92" />
          <path d="M0 0V14C180 30 360 36 540 30C720 24 900 10 1080 12C1260 14 1380 20 1440 24V0H0Z" fill="#0f172a" />
        </svg>
      </div>
    );
  }

  /* ── darkToWhite — Screenshot 2: Red → White → Black ───────────── */
  if (variant === 'darkToWhite') {
    return (
      <div className={`relative w-full overflow-hidden leading-none ${className}`} style={{ height: 60 }}>
        <svg viewBox="0 0 1440 80" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {/* 1. Red */}
          <path d="M0 80V30C200 6 400 0 600 6C800 12 1000 36 1200 42C1320 46 1400 42 1440 40V80H0Z" fill="#dc2626" />
          {/* 2. White */}
          <path d="M0 80V50C180 28 360 22 540 28C720 34 900 52 1080 54C1260 56 1380 50 1440 48V80H0Z" fill="#ffffff" />
          {/* 3. Black */}
          <path d="M0 80V64C200 50 400 46 600 52C800 58 1000 68 1200 66C1320 64 1400 60 1440 58V80H0Z" fill="#0f172a" />
        </svg>
      </div>
    );
  }

  /* ── whiteToDark: Red → White → Black ─────────────────────────── */
  if (variant === 'whiteToDark') {
    return (
      <div className={`relative w-full overflow-hidden leading-none ${className}`} style={{ height: 80 }}>
        <svg viewBox="0 0 1440 80" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <path d="M0 0V46C240 76 480 80 720 72C960 64 1200 38 1440 44V0H0Z" fill="#dc2626" />
          <path d="M0 0V26C200 50 400 60 600 54C800 48 1000 28 1200 30C1320 32 1400 38 1440 44V0H0Z" fill="#ffffff" opacity="0.92" />
          <path d="M0 0V10C180 26 360 32 540 26C720 20 900 8 1080 10C1260 12 1380 18 1440 22V0H0Z" fill="#0f172a" />
        </svg>
      </div>
    );
  }

  /* ── lightToWhite: Red → White → Black ────────────────────────── */
  return (
    <div className={`relative w-full overflow-hidden leading-none ${className}`} style={{ height: 70 }}>
      <svg viewBox="0 0 1440 70" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <path d="M0 70V28C200 6 400 0 600 6C800 12 1000 34 1200 40C1320 44 1400 40 1440 38V70H0Z" fill="#dc2626" />
        <path d="M0 70V46C180 28 360 24 540 30C720 36 900 50 1080 50C1260 50 1380 44 1440 42V70H0Z" fill="#ffffff" opacity="0.92" />
        <path d="M0 70V58C200 46 400 42 600 48C800 54 1000 64 1200 62C1320 60 1400 56 1440 54V70H0Z" fill="#0f172a" />
      </svg>
    </div>
  );
}
