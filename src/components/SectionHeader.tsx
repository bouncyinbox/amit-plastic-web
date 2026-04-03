interface SectionHeaderProps {
  tag: string;
  title: string;
  sub?: string;
  /** Max-width for the subtitle paragraph. Defaults to '500px'. */
  subMaxWidth?: string;
  className?: string;
}

/**
 * Reusable section heading used by every content section.
 * Renders an eyebrow tag, a large h2, and an optional subtitle.
 */
export default function SectionHeader({ tag, title, sub, subMaxWidth = '500px', className }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className ?? ''}`}>
      <p className="text-[11px] tracking-[4px] uppercase text-brand-blue font-bold mb-3">
        {tag}
      </p>
      <h2
        className="font-sora font-bold text-[#1a1a2e] leading-[1.1] mb-3.5"
        style={{ fontSize: 'clamp(32px,6vw,54px)', letterSpacing: -1 }}
      >
        {title}
      </h2>
      {sub && (
        <p
          className="text-[16px] text-gray-700 font-light mx-auto"
          style={{ maxWidth: subMaxWidth }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
