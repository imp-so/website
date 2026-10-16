export function ImpMark({ size }: { size: number }) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label="imp"
      className="imp-mark"
      style={{ width: size, height: size }}
    >
      <path d="M16 17 Q12 9 17 5 Q17 11 20 15" />
      <path d="M32 17 Q36 9 31 5 Q31 11 28 15" />
      <path d="M12.5 23 L5 19.5 L12.5 29" />
      <path d="M35.5 23 L43 19.5 L35.5 29" />
      <circle cx="24" cy="26" r="12" />
      <circle className="fill" cx="19.5" cy="24.5" r="1.6" />
      <circle className="fill" cx="28.5" cy="24.5" r="1.6" />
      <path d="M18.5 29.5 Q24 35 29.5 29.5" />
      <path d="M21.5 31.6 L22.6 33.8 L23.6 32.3" />
      <path d="M31 36.5 Q37 44 42 39" />
      <path d="M40.5 36.2 L44 38 L41.5 41.2 Z" />
    </svg>
  );
}

export function Corners() {
  return (
    <>
      <i className="corner tl" />
      <i className="corner tr" />
      <i className="corner bl" />
      <i className="corner br" />
    </>
  );
}
