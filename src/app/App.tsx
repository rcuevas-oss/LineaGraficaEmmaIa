import React, { useState, useRef, useEffect } from "react";

// ── FLUX imports
import { BrandHero } from "./components/brand/BrandHero";
import { ColorSystem } from "./components/brand/ColorSystem";
import { TypographySystem } from "./components/brand/TypographySystem";
import { LogosEmmaFlux } from "./components/brand/LogosEmmaFlux";
import { GraphicElements } from "./components/brand/GraphicElements";
import { SocialTemplates } from "./components/brand/SocialTemplates";
import { UsageExamples } from "./components/brand/UsageExamples";

// ── NEXO imports
import { HeroB2B } from "./components/b2b/HeroB2B";
import { ColorB2B } from "./components/b2b/ColorB2B";
import { TypoB2B } from "./components/b2b/TypoB2B";
import { LogosEmmaB2B } from "./components/b2b/LogosEmmaB2B";
import { ElementsB2B } from "./components/b2b/ElementsB2B";
import { SocialB2B } from "./components/b2b/SocialB2B";
import { ApplicationB2B } from "./components/b2b/ApplicationB2B";

// ── KOVA imports
import { HeroCraft } from "./components/craft/HeroCraft";
import { ColorCraft } from "./components/craft/ColorCraft";
import { TypoCraft } from "./components/craft/TypoCraft";
import { LogosEmmaKova } from "./components/craft/LogosEmmaKova";
import { ElementsCraft } from "./components/craft/ElementsCraft";
import { SocialCraft } from "./components/craft/SocialCraft";
import { ApplicationCraft } from "./components/craft/ApplicationCraft";

// ── Tab definitions ────────────────────────────────────────────────────────────
type BrandId = "flux" | "nexo" | "kova";

const BRANDS: {
  id: BrandId;
  label: string;
  sub: string;
  accent: string;
  accentText: string;
  bgFrom: string;
  dot: string;
  tagBg: string;
  tagBorder: string;
}[] = [
  {
    id: "flux",
    label: "FLUX",
    sub: "Cyber Dark",
    accent: "#AAFF00",
    accentText: "#06060A",
    bgFrom: "#06060A",
    dot: "#AAFF00",
    tagBg: "rgba(170,255,0,0.07)",
    tagBorder: "rgba(170,255,0,0.2)",
  },
  {
    id: "nexo",
    label: "NEXO",
    sub: "SaaS B2B",
    accent: "#1A44FF",
    accentText: "#FFFFFF",
    bgFrom: "#F8F7F2",
    dot: "#1A44FF",
    tagBg: "rgba(26,68,255,0.07)",
    tagBorder: "rgba(26,68,255,0.2)",
  },
  {
    id: "kova",
    label: "KOVA",
    sub: "Warm Craft",
    accent: "#E8631A",
    accentText: "#FFFFFF",
    bgFrom: "#0D0C0A",
    dot: "#E8631A",
    tagBg: "rgba(232,99,26,0.08)",
    tagBorder: "rgba(232,99,26,0.2)",
  },
];

// ── Tab bar ───────────────────────────────────────────────────────────────────
function TabBar({
  active,
  onChange,
}: {
  active: BrandId;
  onChange: (id: BrandId) => void;
}) {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 sm:px-6"
      style={{
        height: "52px",
        background: "rgba(10,9,8,0.92)",
        backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.5)",
      }}
    >
      {/* Left label */}
      <span
        className="hidden sm:block shrink-0"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "10px",
          color: "rgba(255,255,255,0.25)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        Propuestas de marca
      </span>

      {/* Tabs */}
      <div
        className="flex items-center rounded-xl p-1 gap-0.5 mx-auto sm:mx-0"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {BRANDS.map((b) => {
          const isActive = active === b.id;
          return (
            <button
              key={b.id}
              onClick={() => onChange(b.id)}
              className="relative flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-lg transition-all"
              style={{
                background: isActive ? "rgba(255,255,255,0.07)" : "transparent",
                border: isActive
                  ? `1px solid rgba(255,255,255,0.10)`
                  : "1px solid transparent",
                cursor: "pointer",
                outline: "none",
              }}
            >
              {/* Accent dot */}
              <div
                className="w-1.5 h-1.5 rounded-full shrink-0 transition-all"
                style={{
                  background: isActive ? b.dot : "rgba(255,255,255,0.2)",
                  boxShadow: isActive ? `0 0 6px ${b.dot}80` : "none",
                }}
              />
              <div className="flex items-center gap-1.5">
                <span
                  style={{
                    fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.4)",
                    letterSpacing: "-0.01em",
                    transition: "color 0.2s",
                  }}
                >
                  {b.label}
                </span>
                <span
                  className="hidden sm:inline"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    color: isActive ? b.dot : "rgba(255,255,255,0.2)",
                    letterSpacing: "0.04em",
                    transition: "color 0.2s",
                  }}
                >
                  {b.sub}
                </span>
              </div>
              {/* Active underline accent */}
              {isActive && (
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full"
                  style={{
                    width: "20px",
                    height: "2px",
                    background: b.dot,
                    boxShadow: `0 0 8px ${b.dot}`,
                    bottom: "-1px",
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Right badge */}
      <div
        className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg shrink-0"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ADE80", boxShadow: "0 0 4px #4ADE80" }} />
        <span
          style={{
            fontFamily: "'JetBrains Mono', 'DM Mono', monospace",
            fontSize: "10px",
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "0.05em",
          }}
        >
          v1.0 · 2026
        </span>
      </div>
    </div>
  );
}

// ── Divider used inside each proposal ─────────────────────────────────────────
function FluxDivider() {
  return (
    <div
      style={{
        height: "1px",
        background: "linear-gradient(to right, transparent, rgba(170,255,0,0.15), transparent)",
      }}
    />
  );
}
function B2BDivider() {
  return <div style={{ height: "1px", background: "#E3E2DB" }} />;
}
function CraftDivider() {
  return <div style={{ height: "1px", background: "#2D2924" }} />;
}

// ── Proposal views ─────────────────────────────────────────────────────────────
function FluxProposal() {
  return (
    <div style={{ background: "#06060A" }}>
      <BrandHero />
      <FluxDivider />
      <ColorSystem />
      <FluxDivider />
      <TypographySystem />
      <FluxDivider />
      <LogosEmmaFlux />
      <FluxDivider />
      <GraphicElements />
      <FluxDivider />
      <SocialTemplates />
      <FluxDivider />
      <UsageExamples />
    </div>
  );
}

function NexoProposal() {
  return (
    <div style={{ background: "#F8F7F2" }}>
      <HeroB2B />
      <B2BDivider />
      <ColorB2B />
      <B2BDivider />
      <TypoB2B />
      <B2BDivider />
      <LogosEmmaB2B />
      <B2BDivider />
      <ElementsB2B />
      <B2BDivider />
      <SocialB2B />
      <B2BDivider />
      <ApplicationB2B />
    </div>
  );
}

function KovaProposal() {
  return (
    <div style={{ background: "#0D0C0A" }}>
      <HeroCraft />
      <CraftDivider />
      <ColorCraft />
      <CraftDivider />
      <TypoCraft />
      <CraftDivider />
      <LogosEmmaKova />
      <CraftDivider />
      <ElementsCraft />
      <CraftDivider />
      <SocialCraft />
      <CraftDivider />
      <ApplicationCraft />
    </div>
  );
}

// ── Root ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState<BrandId>("flux");
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleChange = (id: BrandId) => {
    setActive(id);
    // Scroll content pane to top on tab switch
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden" }}>
      <TabBar active={active} onChange={handleChange} />

      {/* Scrollable content — offset by tab bar height */}
      <div
        ref={scrollRef}
        style={{
          flex: 1,
          overflowY: "auto",
          marginTop: "52px",
        }}
      >
        {active === "flux" && <FluxProposal />}
        {active === "nexo" && <NexoProposal />}
        {active === "kova" && <KovaProposal />}
      </div>
    </div>
  );
}