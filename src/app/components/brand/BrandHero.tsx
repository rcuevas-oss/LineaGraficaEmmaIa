import React from "react";

export function BrandHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "#06060A",
        minHeight: "100vh",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(170,255,0,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(170,255,0,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Diagonal accent */}
      <div
        className="absolute"
        style={{
          width: "900px",
          height: "900px",
          top: "-300px",
          right: "-200px",
          background:
            "radial-gradient(circle, rgba(124,58,255,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Corner brackets */}
      <CornerBracket pos="tl" />
      <CornerBracket pos="tr" />
      <CornerBracket pos="bl" />
      <CornerBracket pos="br" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        {/* System tag */}
        <div
          className="mb-10 flex items-center gap-3 px-4 py-2 border"
          style={{
            borderColor: "rgba(170,255,0,0.3)",
            background: "rgba(170,255,0,0.05)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "#AAFF00" }}
          />
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "#AAFF00",
            }}
          >
            SISTEMA DE IDENTIDAD VISUAL — v2.5
          </span>
        </div>

        {/* Logo Mark */}
        <LogoMark size="xl" />

        <div className="mt-8 mb-4">
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(64px, 10vw, 120px)",
              fontWeight: 700,
              color: "#F4F3FF",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            FLUX
          </h1>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "13px",
              letterSpacing: "0.35em",
              color: "#AAFF00",
              marginTop: "8px",
            }}
          >
            SOFTWARE & AUTOMATION STUDIO
          </div>
        </div>

        <p
          className="max-w-lg mt-6"
          style={{
            color: "rgba(244,243,255,0.45)",
            fontSize: "16px",
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          Flujos inteligentes. Sistemas que trabajan solos. Tecnología que no
          necesita ser explicada para ser poderosa.
        </p>

        {/* Divider with nodes */}
        <div className="flex items-center gap-4 mt-12">
          <div
            className="w-24 h-px"
            style={{ background: "linear-gradient(to right, transparent, rgba(170,255,0,0.5))" }}
          />
          <div
            className="w-3 h-3 rotate-45"
            style={{ background: "#AAFF00" }}
          />
          <div
            className="w-24 h-px"
            style={{ background: "linear-gradient(to left, transparent, rgba(170,255,0,0.5))" }}
          />
        </div>

        {/* Tagline options */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl w-full">
          {[
            { code: "01", text: "Automatiza lo repetible" },
            { code: "02", text: "Escala lo importante" },
            { code: "03", text: "Construye sin límites" },
          ].map((item) => (
            <div
              key={item.code}
              className="px-4 py-3 border text-left"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "10px",
                  color: "#7C3AFF",
                  marginBottom: "6px",
                  letterSpacing: "0.15em",
                }}
              >
                /{item.code}
              </div>
              <div style={{ color: "#F4F3FF", fontSize: "13px", fontWeight: 500 }}>
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LogoMark({
  size = "md",
  inverted = false,
}: {
  size?: "sm" | "md" | "lg" | "xl";
  inverted?: boolean;
}) {
  const sizes = { sm: 32, md: 48, lg: 64, xl: 80 };
  const px = sizes[size];
  const accent = inverted ? "#06060A" : "#AAFF00";
  const bg = inverted ? "#AAFF00" : "transparent";
  const stroke = inverted ? "#06060A" : "#AAFF00";
  const strokeSecond = inverted ? "rgba(6,6,10,0.5)" : "#7C3AFF";

  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer square rotated */}
      <rect
        x="4"
        y="4"
        width="72"
        height="72"
        stroke={stroke}
        strokeWidth="1.5"
        fill={bg}
      />
      {/* Inner diamond */}
      <rect
        x="24"
        y="24"
        width="32"
        height="32"
        transform="rotate(45 40 40)"
        stroke={strokeSecond}
        strokeWidth="1.5"
        fill="none"
      />
      {/* Center dot */}
      <circle cx="40" cy="40" r="5" fill={accent} />
      {/* Lines */}
      <line x1="40" y1="4" x2="40" y2="20" stroke={stroke} strokeWidth="1.5" />
      <line x1="40" y1="60" x2="40" y2="76" stroke={stroke} strokeWidth="1.5" />
      <line x1="4" y1="40" x2="20" y2="40" stroke={stroke} strokeWidth="1.5" />
      <line x1="60" y1="40" x2="76" y2="40" stroke={stroke} strokeWidth="1.5" />
      {/* Corner nodes */}
      <rect x="2" y="2" width="5" height="5" fill={accent} />
      <rect x="73" y="2" width="5" height="5" fill={accent} />
      <rect x="2" y="73" width="5" height="5" fill={accent} />
      <rect x="73" y="73" width="5" height="5" fill={accent} />
    </svg>
  );
}

function CornerBracket({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const isTop = pos.startsWith("t");
  const isLeft = pos.endsWith("l");

  return (
    <div
      className="absolute"
      style={{
        top: isTop ? "24px" : undefined,
        bottom: !isTop ? "24px" : undefined,
        left: isLeft ? "24px" : undefined,
        right: !isLeft ? "24px" : undefined,
        width: "32px",
        height: "32px",
        borderTop: isTop ? "2px solid rgba(170,255,0,0.3)" : undefined,
        borderBottom: !isTop ? "2px solid rgba(170,255,0,0.3)" : undefined,
        borderLeft: isLeft ? "2px solid rgba(170,255,0,0.3)" : undefined,
        borderRight: !isLeft ? "2px solid rgba(170,255,0,0.3)" : undefined,
      }}
    />
  );
}
