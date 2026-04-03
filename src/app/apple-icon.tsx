import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: '#1a1a2e',
          borderRadius: 36,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontSize: 92,
            fontWeight: 800,
            color: 'white',
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          AP
        </div>
        <div
          style={{
            width: 112,
            height: 6,
            borderRadius: 3,
            background: '#1a73e8',
            marginTop: 8,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
