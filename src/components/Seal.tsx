interface SealProps {
  size?: number;   // controls height; width scales automatically
  dark?: boolean;  // dark=true → dark text (on light bg); dark=false → white text (on dark bg)
}

export default function Seal({ size = 48, dark = false }: SealProps) {
  const textColor  = dark ? '#1a1a2e' : '#ffffff';
  const subColor   = dark ? '#1a73e8' : '#8ab4f8';
  const accentColor = '#1a73e8';

  // viewBox is 200×48; height = size, width scales proportionally
  const width = Math.round((200 / 48) * size);

  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 200 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Amit Plastic — Since 2002"
    >
      {/* Brand name */}
      <text
        x="0"
        y="30"
        fontFamily="'Sora', sans-serif"
        fontWeight="800"
        fontSize="28"
        fill={textColor}
        letterSpacing="-0.8"
      >
        Amit Plastic
      </text>

      {/* Accent bar */}
      <rect x="0" y="37" width="28" height="2" rx="1" fill={accentColor} />

      {/* Since 2002 */}
      <text
        x="35"
        y="45"
        fontFamily="'Sora', sans-serif"
        fontWeight="700"
        fontSize="11"
        fill={subColor}
        letterSpacing="2.5"
      >
        SINCE 2002
      </text>
    </svg>
  );
}
