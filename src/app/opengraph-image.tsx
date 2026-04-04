import { ImageResponse } from 'next/og';

export const alt = 'Amit Plastic — Furniture Exclusive Showroom, Sitamarhi';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#1a1a2e',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Accent bar top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            display: 'flex',
          }}
        >
          <div style={{ flex: 1, background: '#1a73e8' }} />
          <div style={{ flex: 1, background: '#ea4335' }} />
          <div style={{ flex: 1, background: '#34a853' }} />
          <div style={{ flex: 1, background: '#fbbc04' }} />
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
          }}
        >
          {/* Logo text */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: 'white',
              letterSpacing: -2,
            }}
          >
            Amit Plastic
          </div>

          {/* Blue accent bar */}
          <div
            style={{
              width: 120,
              height: 5,
              borderRadius: 3,
              background: '#1a73e8',
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: 24,
              fontWeight: 500,
              color: 'rgba(255,255,255,0.65)',
              marginTop: 8,
            }}
          >
            Furniture Exclusive Showroom
          </div>

          {/* Location */}
          <div
            style={{
              fontSize: 18,
              color: 'rgba(255,255,255,0.45)',
              marginTop: 4,
            }}
          >
            Sitamarhi, Bihar • Since 2002
          </div>

          {/* Brands strip */}
          <div
            style={{
              display: 'flex',
              gap: 20,
              marginTop: 32,
              fontSize: 14,
              fontWeight: 600,
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: 3,
              textTransform: 'uppercase',
            }}
          >
            <span>Supreme</span>
            <span>•</span>
            <span>Linc</span>
            <span>•</span>
            <span>Milton</span>
            <span>•</span>
            <span>Sleepwell</span>
            <span>•</span>
            <span>Spacewood</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            fontSize: 14,
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: 2,
          }}
        >
          amitplastic.in
        </div>
      </div>
    ),
    { ...size }
  );
}
