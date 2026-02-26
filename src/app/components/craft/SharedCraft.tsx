import React from "react";
import { C } from "./tokens";

// ─── Logo Mark ────────────────────────────────────────────────────────────────
export function KovaLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <rect width="36" height="36" rx="9" fill={C.ember} />
      {/* Two interlocked rhombuses suggesting a flow loop */}
      <path d="M10 18L18 10L22 14L14 22L10 18Z" fill="white" opacity="1" />
      <path d="M14 22L22 14L26 18L18 26L14 22Z" fill="white" opacity="0.45" />
    </svg>
  );
}

export function KovaWordmark({
  size = "md",
  stacked = false,
}: {
  size?: "sm" | "md" | "lg";
  stacked?: boolean;
}) {
  const logoSizes = { sm: 24, md: 32, lg: 44 };
  const fontSizes = { sm: "15px", md: "20px", lg: "28px" };

  if (stacked) {
    return (
      <div className="flex flex-col items-center gap-1.5">
        <KovaLogo size={logoSizes[size] * 1.2} />
        <span
          style={{
            fontFamily: C.syne,
            fontSize: fontSizes[size],
            fontWeight: 700,
            color: C.textPrimary,
            letterSpacing: "-0.02em",
          }}
        >
          kova
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2.5">
      <KovaLogo size={logoSizes[size]} />
      <span
        style={{
          fontFamily: C.syne,
          fontSize: fontSizes[size],
          fontWeight: 700,
          color: C.textPrimary,
          letterSpacing: "-0.02em",
        }}
      >
        kova
      </span>
    </div>
  );
}

// ─── Section Label ────────────────────────────────────────────────────────────
export function SLabel({
  index,
  title,
  sub,
}: {
  index: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-5">
        <span
          style={{
            fontFamily: C.mono,
            fontSize: "11px",
            color: C.ember,
            letterSpacing: "0.1em",
          }}
        >
          {index}
        </span>
        <div style={{ flex: 1, height: "1px", background: C.border }} />
      </div>
      <h2
        style={{
          fontFamily: C.syne,
          fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 800,
          color: C.textPrimary,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          marginBottom: sub ? "12px" : 0,
        }}
      >
        {title}
      </h2>
      {sub && (
        <p
          style={{
            fontFamily: C.inter,
            fontSize: "16px",
            color: C.textSecondary,
            lineHeight: 1.65,
            maxWidth: "500px",
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

// ─── Ember Tag ────────────────────────────────────────────────────────────────
export function ETag({
  children,
  variant = "ember",
}: {
  children: React.ReactNode;
  variant?: "ember" | "muted" | "success";
}) {
  const styles = {
    ember: { bg: C.emberDim, color: C.ember, border: "rgba(232,99,26,0.2)" },
    muted: { bg: C.raised, color: C.textSecondary, border: C.border },
    success: { bg: C.successDim, color: C.success, border: "rgba(74,222,128,0.2)" },
  };
  const s = styles[variant];
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-md"
      style={{
        fontFamily: C.mono,
        fontSize: "10px",
        letterSpacing: "0.06em",
        background: s.bg,
        color: s.color,
        border: `1px solid ${s.border}`,
      }}
    >
      {children}
    </span>
  );
}

// ─── Thin Rule ────────────────────────────────────────────────────────────────
export function Rule({ accent = false }: { accent?: boolean }) {
  if (accent) {
    return (
      <div className="flex">
        <div style={{ width: "40px", height: "2px", background: C.ember }} />
        <div style={{ flex: 1, height: "2px", background: C.border }} />
      </div>
    );
  }
  return <div style={{ height: "1px", background: C.border, width: "100%" }} />;
}

// ─── Card ─────────────────────────────────────────────────────────────────────
export function CCard({
  children,
  className = "",
  style = {},
  accent = false,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl overflow-hidden ${className}`}
      style={{
        background: C.card,
        border: `1px solid ${C.border}`,
        ...(accent ? { borderTopColor: C.ember } : {}),
        ...style,
      }}
    >
      {children}
    </div>
  );
}
