import React from "react";
import { T } from "./tokens";

// ─── Section Label ────────────────────────────────────────────────────────────
export function SectionLabel({
  step,
  title,
  subtitle,
}: {
  step: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      <div
        className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full"
        style={{
          background: T.blueTint,
          border: `1px solid rgba(26,68,255,0.15)`,
        }}
      >
        <span
          style={{
            fontFamily: T.mono,
            fontSize: "11px",
            color: T.blue,
            letterSpacing: "0.05em",
          }}
        >
          {step}
        </span>
      </div>
      <h2
        style={{
          fontFamily: T.sans,
          fontSize: "clamp(26px, 3.5vw, 38px)",
          fontWeight: 700,
          color: T.ink,
          letterSpacing: "-0.025em",
          lineHeight: 1.15,
          marginBottom: subtitle ? "10px" : 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontFamily: T.sans,
            fontSize: "16px",
            color: T.slate,
            lineHeight: 1.6,
            fontWeight: 400,
            maxWidth: "520px",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Divider ──────────────────────────────────────────────────────────────────
export function Divider() {
  return (
    <div
      className="w-full h-px"
      style={{ background: T.border }}
    />
  );
}

// ─── Tag ─────────────────────────────────────────────────────────────────────
export function Tag({
  children,
  color = "blue",
}: {
  children: React.ReactNode;
  color?: "blue" | "ink" | "warm";
}) {
  const styles = {
    blue: { bg: T.blueTint, text: T.blue, border: "rgba(26,68,255,0.15)" },
    ink: { bg: T.surface, text: T.slate, border: T.border },
    warm: { bg: T.warm, text: "#92400E", border: "rgba(146,64,14,0.2)" },
  };
  const s = styles[color];
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-full"
      style={{
        fontFamily: T.mono,
        fontSize: "11px",
        background: s.bg,
        color: s.text,
        border: `1px solid ${s.border}`,
        letterSpacing: "0.04em",
      }}
    >
      {children}
    </span>
  );
}

// ─── Dot Grid ─────────────────────────────────────────────────────────────────
export function DotGrid({
  cols = 12,
  rows = 6,
  opacity = 0.5,
}: {
  cols?: number;
  rows?: number;
  opacity?: number;
}) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ opacity }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="dots"
            x="0"
            y="0"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill={T.borderStrong} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  );
}

// ─── Logo Mark ────────────────────────────────────────────────────────────────
export function NexoLogo({
  size = 40,
  inverted = false,
}: {
  size?: number;
  inverted?: boolean;
}) {
  const fill = inverted ? T.white : T.blue;
  const bg = inverted ? T.blue : T.white;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="40" height="40" rx="10" fill={fill} />
      {/* N mark — two verticals + diagonal */}
      <rect x="10" y="10" width="4" height="20" rx="1" fill={bg} />
      <rect x="26" y="10" width="4" height="20" rx="1" fill={bg} />
      <path d="M14 10 L26 30" stroke={bg} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function NexoWordmark({
  size = "md",
  inverted = false,
}: {
  size?: "sm" | "md" | "lg";
  inverted?: boolean;
}) {
  const fontSizes = { sm: "16px", md: "22px", lg: "32px" };
  const logoSizes = { sm: 24, md: 32, lg: 44 };
  const textColor = inverted ? T.white : T.ink;

  return (
    <div className="flex items-center gap-2.5">
      <NexoLogo size={logoSizes[size]} inverted={inverted} />
      <span
        style={{
          fontFamily: T.sans,
          fontSize: fontSizes[size],
          fontWeight: 700,
          color: textColor,
          letterSpacing: "-0.03em",
        }}
      >
        nexo
      </span>
    </div>
  );
}
