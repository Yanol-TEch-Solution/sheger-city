/**
 * Branded SVG Wave Dividers — Sheger City
 * Consistent color sequence: Black (#0f172a) → Red (#dc2626) → White (#ffffff)
 * The layers always stack in the same order so the brand identity is clear.
 */

type WaveVariant =
  | 'darkToLight'
  | 'lightToDark'
  | 'whiteToDark'
  | 'darkToWhite'
  | 'redAccent'
  | 'lightToWhite'
  | 'thinStripe';    // ← decorative tri-color stripe band (no wave shape)

interface WaveDividerProps {
  variant?: WaveVariant;
  className?: string;
}

export default function WaveDivider({ variant = 'darkToLight', className = '' }: WaveDividerProps) {

  /* ── Thin decorative tri-color stripe ─────────────────────────── */
  if (variant === 'thinStripe') {
    return (
      <div className={`w-full ${className}`} aria-hidden="true">
        {/* Black stripe */}
        <div className="h-[4px] w-full bg-slate-950" />
        {/* Red stripe */}
        <div className="h-[4px] w-full bg-red-600" />
        {/* White stripe with subtle shadow so it's visible on light bg */}
        <div className="h-[4px] w-full bg-white border-b border-slate-100" />
      </div>
    );
  }

  /* ── redAccent — hero-grade dramatic multi-layer wave ─────────── */
  if (variant === 'redAccent') {
    return (
      <div className={`relative w-full overflow-hidden leading-none ${className}`} style={{ height: 90 }}>
        <svg viewBox="0 0 1440 90" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {/* 1. Black — deepest back layer */}
          <path d="M0 90V38C180 8 360 0 540 8C720 16 900 44 1080 50C1260 56 1380 40 1440 32V90H0Z" fill="#0f172a" />
          {/* 2. Red — mid layer */}
          <path d="M0 90V56C160 32 320 22 480 28C640 34 800 54 960 58C1120 62 1300 48 1440 42V90H0Z" fill="#dc2626" opacity="0.9" />
          {/* 3. White — top layer */}
          <path d="M0 90V70C200 52 400 46 600 52C800 58 1000 70 1200 68C1320 66 1400 60 1440 57V90H0Z" fill="#ffffff" />
          {/* Red accent stroke */}
          <path d="M0 78 Q360 60 720 72 Q1080 84 1440 66" stroke="#dc2626" strokeWidth="2.5" fill="none" opacity="0.55" />
          {/* Black accent stroke */}
          <path d="M0 85 Q360 72 720 82 Q1080 92 1440 78" stroke="#0f172a" strokeWidth="1.5" fill="none" opacity="0.35" />
        </svg>
      </div>
    );
  }

  /* ── darkToLight — black → red → white (top-to-bottom read) ───── */
  if (variant === 'darkToLight') {
    return (
      <div className={`relative w-full overflow-hidden leading-none ${className}`} style={{ height: 80 }}>
        <svg viewBox="0 0 1440 80" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {/* 1. Black */}
          <path d="M0 80V33C240 4 480 0 720 8C960 16 1200 42 1440 36V80H0Z" fill="#0f172a" />
          {/* 2. Red */}
          <path d="M0 80V50C200 30 400 22 600 28C800 34 1000 54 1200 52C1320 50 1400 46 1440 44V80H0Z" fill="#dc2626" opacity="0.85" />
          {/* 3. White */}
          <path d="M0 80V63C180 47 360 43 540 49C720 55 900 66 1080 64C1260 62 1380 56 1440 53V80H0Z" fill="#ffffff" />
          {/* Red line */}
          <path d="M0 73 Q360 56 720 68 Q1080 80 1440 64" stroke="#dc2626" strokeWidth="2" fill="none" opacity="0.45" />
        </svg>
      </div>
    );
  }

  /* ── lightToDark — white → red → black ────────────────────────── */
  if (variant === 'lightToDark') {
    return (
      <div className={`relative w-full overflow-hidden leading-none ${className}`} style={{ height: 80 }}>
        <svg viewBox="0 0 1440 80" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {/* 1. White — widest top */}
          <path d="M0 0V47C240 77 480 80 720 72C960 64 1200 38 1440 44V0H0Z" fill="#ffffff" />
          {/* 2. Red — mid */}
          <path d="M0 0V28C200 54 400 64 600 58C800 52 1000 30 1200 32C1320 34 1400 40 1440 44V0H0Z" fill="#dc2626" opacity="0.85" />
          {/* 3. Black — narrow tip */}
          <path d="M0 0V14C180 30 360 36 540 30C720 24 900 10 1080 12C1260 14 1380 20 1440 24V0H0Z" fill="#0f172a" />
          {/* White accent */}
          <path d="M0 6 Q360 22 720 10 Q1080 -2 1440 16" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.25" />
        </svg>
      </div>
    );
  }

  /* ── darkToWhite — black → red → white ────────────────────────── */
  if (variant === 'darkToWhite') {
    return (
      <div className={`relative w-full overflow-hidden leading-none ${className}`} style={{ height: 80 }}>
        <svg viewBox="0 0 1440 80" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {/* 1. Black */}
          <path d="M0 80V30C200 6 400 0 600 6C800 12 1000 36 1200 42C1320 46 1400 42 1440 40V80H0Z" fill="#0f172a" />
          {/* 2. Red */}
          <path d="M0 80V50C180 28 360 22 540 28C720 34 900 52 1080 54C1260 56 1380 50 1440 48V80H0Z" fill="#dc2626" opacity="0.85" />
          {/* 3. White */}
          <path d="M0 80V64C200 50 400 46 600 52C800 58 1000 68 1200 66C1320 64 1400 60 1440 58V80H0Z" fill="#ffffff" />
          {/* Red accent */}
          <path d="M0 74 Q360 58 720 70 Q1080 82 1440 66" stroke="#dc2626" strokeWidth="2" fill="none" opacity="0.45" />
        </svg>
      </div>
    );
  }

  /* ── whiteToDark — white → red → black ────────────────────────── */
  if (variant === 'whiteToDark') {
    return (
      <div className={`relative w-full overflow-hidden leading-none ${className}`} style={{ height: 80 }}>
        <svg viewBox="0 0 1440 80" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {/* 1. White */}
          <path d="M0 0V46C240 76 480 80 720 72C960 64 1200 38 1440 44V0H0Z" fill="#ffffff" />
          {/* 2. Red */}
          <path d="M0 0V26C200 50 400 60 600 54C800 48 1000 28 1200 30C1320 32 1400 38 1440 44V0H0Z" fill="#dc2626" opacity="0.85" />
          {/* 3. Black */}
          <path d="M0 0V10C180 26 360 32 540 26C720 20 900 8 1080 10C1260 12 1380 18 1440 22V0H0Z" fill="#0f172a" />
          {/* Red stripe */}
          <path d="M0 5 Q360 20 720 8 Q1080 -4 1440 14" stroke="#dc2626" strokeWidth="1.5" fill="none" opacity="0.4" />
        </svg>
      </div>
    );
  }

  /* ── lightToWhite — slate → red → white ───────────────────────── */
  return (
    <div className={`relative w-full overflow-hidden leading-none ${className}`} style={{ height: 70 }}>
      <svg viewBox="0 0 1440 70" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        {/* 1. Slate/dark */}
        <path d="M0 70V28C200 6 400 0 600 6C800 12 1000 34 1200 40C1320 44 1400 40 1440 38V70H0Z" fill="#1e293b" />
        {/* 2. Red */}
        <path d="M0 70V46C180 28 360 24 540 30C720 36 900 50 1080 50C1260 50 1380 44 1440 42V70H0Z" fill="#dc2626" opacity="0.85" />
        {/* 3. White */}
        <path d="M0 70V58C200 46 400 42 600 48C800 54 1000 64 1200 62C1320 60 1400 56 1440 54V70H0Z" fill="#ffffff" />
        {/* Black accent */}
        <path d="M0 64 Q360 50 720 62 Q1080 74 1440 58" stroke="#0f172a" strokeWidth="1" fill="none" opacity="0.15" />
      </svg>
    </div>
  );
}
