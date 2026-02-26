import React from "react";
import { SectionLabel } from "./ColorSystem";

// ─── MARK A: "SIGNAL" ─────────────────────────────────────────────────────────
// Double-peak waveform inside a bordered square.
// Los dos picos = la M doble de EMMA. Lectura: señal de IA activa.
export function FluxMarkSignal({
  size = 48,
  mono = false,
}: {
  size?: number;
  mono?: boolean;
}) {
  const lime = mono ? "rgba(244,243,255,0.7)" : "#AAFF00";
  const violet = mono ? "rgba(244,243,255,0.4)" : "#7C3AFF";
  const scale = size / 40;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer square */}
      <rect x="1.5" y="1.5" width="37" height="37" stroke={lime} strokeWidth="1" />
      {/* Corner accent squares */}
      <rect x="0" y="0" width="4" height="4" fill={lime} />
      <rect x="36" y="0" width="4" height="4" fill={lime} />
      <rect x="0" y="36" width="4" height="4" fill={lime} />
      <rect x="36" y="36" width="4" height="4" fill={lime} />
      {/* Dim midline */}
      <line x1="1.5" y1="20" x2="38.5" y2="20" stroke={lime} strokeWidth="0.5" strokeOpacity="0.15" />
      {/* SIGNAL waveform — double M peaks */}
      <polyline
        points="1.5,20 6,20 9,11 12,27 15.5,11 19,27 22,20 26,20 28.5,14 31,20 33.5,14 36,20 38.5,20"
        stroke={lime}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Center node — IA dot */}
      <circle cx="22" cy="20" r="2" fill={violet} />
    </svg>
  );
}

// ─── MARK B: "LATTICE" ────────────────────────────────────────────────────────
// 3×3 node grid with E-shaped active connections.
// Lime = estructura, Violet = inteligencia (el nodo central).
export function FluxMarkLattice({
  size = 48,
  mono = false,
}: {
  size?: number;
  mono?: boolean;
}) {
  const lime = mono ? "rgba(244,243,255,0.7)" : "#AAFF00";
  const violet = mono ? "rgba(244,243,255,0.45)" : "#7C3AFF";
  const dim = mono ? "rgba(244,243,255,0.1)" : "rgba(170,255,0,0.12)";

  // Node positions: 3×3 grid
  const nodes = [
    { cx: 8, cy: 8 },   // 0: TL
    { cx: 20, cy: 8 },  // 1: TC
    { cx: 32, cy: 8 },  // 2: TR
    { cx: 8, cy: 20 },  // 3: ML
    { cx: 20, cy: 20 }, // 4: MC
    { cx: 32, cy: 20 }, // 5: MR
    { cx: 8, cy: 32 },  // 6: BL
    { cx: 20, cy: 32 }, // 7: BC
    { cx: 32, cy: 32 }, // 8: BR
  ];

  // Connections that form E: top bar, left side, mid bar (short), bottom bar
  const activeLines = [
    [0, 1], [1, 2],        // top horizontal
    [0, 3], [3, 6],        // left vertical
    [3, 4],                // mid horizontal (shorter)
    [6, 7], [7, 8],        // bottom horizontal
  ];

  // Dim background lines (full grid feel)
  const dimLines = [
    [2, 5], [5, 8],        // right vertical (inactive)
    [1, 4], [4, 7],        // center vertical (inactive)
  ];

  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Dim lines */}
      {dimLines.map(([a, b], i) => (
        <line
          key={`d${i}`}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke={dim} strokeWidth="1"
        />
      ))}
      {/* Active lines */}
      {activeLines.map(([a, b], i) => (
        <line
          key={`a${i}`}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke={lime} strokeWidth="1.2"
        />
      ))}
      {/* Nodes */}
      {nodes.map((n, i) => {
        const isCenter = i === 4;
        const isActive = [0, 1, 2, 3, 4, 6, 7, 8].includes(i);
        return (
          <circle
            key={i}
            cx={n.cx}
            cy={n.cy}
            r={isCenter ? 3 : isActive ? 2.5 : 1.5}
            fill={isCenter ? violet : isActive ? lime : dim}
          />
        );
      })}
    </svg>
  );
}

// ─── Wordmark A ───────────────────────────────────────────────────────────────
function WordmarkA({ dark = false }: { dark?: boolean }) {
  const textColor = dark ? "#06060A" : "#F4F3FF";
  const lime = dark ? "#06060A" : "#AAFF00";

  return (
    <div className="flex items-center gap-0">
      <span
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "22px",
          fontWeight: 700,
          color: textColor,
          letterSpacing: "-0.02em",
        }}
      >
        EMMA
      </span>
      <div
        className="mx-2 self-stretch"
        style={{ width: "1px", background: lime, opacity: 0.4 }}
      />
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "13px",
          fontWeight: 700,
          color: lime,
          letterSpacing: "0.1em",
        }}
      >
        IA
      </span>
    </div>
  );
}

// ─── Wordmark B ───────────────────────────────────────────────────────────────
function WordmarkB({ dark = false }: { dark?: boolean }) {
  const textColor = dark ? "#06060A" : "#F4F3FF";
  const lime = dark ? "#06060A" : "#AAFF00";

  return (
    <div className="flex flex-col gap-0">
      <div className="flex items-baseline gap-1.5">
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "20px",
            fontWeight: 700,
            color: textColor,
            letterSpacing: "0.08em",
          }}
        >
          EMMA
        </span>
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "10px",
            fontWeight: 700,
            color: lime,
            letterSpacing: "0.2em",
            paddingBottom: "2px",
          }}
        >
          IA
        </span>
      </div>
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "8px",
          letterSpacing: "0.25em",
          color: dark ? "rgba(6,6,10,0.4)" : "rgba(244,243,255,0.3)",
        }}
      >
        SOFTWARE & AUTOMATION
      </span>
    </div>
  );
}

// ─── Logo lockup ──────────────────────────────────────────────────────────────
function LockupH({
  mark,
  wordmark,
  gap = 14,
}: {
  mark: React.ReactNode;
  wordmark: React.ReactNode;
  gap?: number;
}) {
  return (
    <div className="flex items-center" style={{ gap }}>
      {mark}
      {wordmark}
    </div>
  );
}

// ─── Spec row ─────────────────────────────────────────────────────────────────
function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="flex items-center justify-between py-2.5"
      style={{ borderBottom: "1px solid rgba(170,255,0,0.08)" }}
    >
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "10px",
          color: "rgba(170,255,0,0.4)",
          letterSpacing: "0.08em",
        }}
      >
        {label}
      </span>
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", color: "#F4F3FF" }}>
        {value}
      </span>
    </div>
  );
}

// ─── CARD ─────────────────────────────────────────────────────────────────────
function Card({
  children,
  bg = "#0F0F1A",
  accent = false,
}: {
  children: React.ReactNode;
  bg?: string;
  accent?: boolean;
}) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: bg,
        border: `1px solid ${accent ? "rgba(170,255,0,0.3)" : "rgba(255,255,255,0.06)"}`,
      }}
    >
      {children}
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export function LogosEmmaFlux() {
  return (
    <section
      style={{
        background: "#06060A",
        padding: "88px 0",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <SectionLabel
          step="03 — LOGOTIPO"
          title="EMMA IA — Identidad visual"
          subtitle="Dos variantes diseñadas para el sistema FLUX. Cada una construida desde el lenguaje gráfico cyber-dark: señal, nodos, precisión."
        />

        {/* ── GRID: 2 variantes ───────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

          {/* ── VARIANTE A: SIGNAL ─────────────────────────────────────────── */}
          <Card accent>
            {/* Mark showcase */}
            <div
              className="relative overflow-hidden flex flex-col items-center justify-center py-12"
              style={{ background: "#06060A" }}
            >
              {/* Grid bg */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(170,255,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(170,255,0,1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <FluxMarkSignal size={96} />
            </div>

            <div className="p-5 space-y-5" style={{ borderTop: "1px solid rgba(170,255,0,0.15)" }}>
              {/* Nombre */}
              <div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "9px",
                    letterSpacing: "0.15em",
                    color: "#AAFF00",
                    marginBottom: "6px",
                  }}
                >
                  VARIANTE A · SIGNAL
                </div>
                <p style={{ fontSize: "12px", color: "rgba(244,243,255,0.45)", lineHeight: 1.6 }}>
                  Los dos picos del waveform reflejan la doble M de EMMA.
                  La señal activa dentro de la grilla cuadrada evoca monitoreo IA en tiempo real.
                </p>
              </div>

              {/* Lockup horizontal */}
              <div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", color: "rgba(170,255,0,0.3)", letterSpacing: "0.1em", marginBottom: "10px" }}>
                  LOCKUP HORIZONTAL
                </div>
                <div
                  className="flex items-center justify-center py-6 px-4 rounded-lg"
                  style={{ background: "#0A0A12", border: "1px solid rgba(170,255,0,0.08)" }}
                >
                  <LockupH
                    mark={<FluxMarkSignal size={38} />}
                    wordmark={<WordmarkA />}
                  />
                </div>
              </div>

              {/* Lockup sobre claro */}
              <div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", color: "rgba(170,255,0,0.3)", letterSpacing: "0.1em", marginBottom: "10px" }}>
                  SOBRE FONDO CLARO
                </div>
                <div
                  className="flex items-center justify-center py-6 px-4 rounded-lg"
                  style={{ background: "#AAFF00" }}
                >
                  <LockupH
                    mark={<FluxMarkSignal size={38} mono />}
                    wordmark={<WordmarkA dark />}
                  />
                </div>
              </div>

              {/* Specs */}
              <div>
                <SpecRow label="ÍCONO MÍNIMO" value="24px digital · 8mm impreso" />
                <SpecRow label="FUENTE DISPLAY" value="Space Grotesk 700" />
                <SpecRow label="FUENTE BADGE" value="Space Mono 700" />
                <SpecRow label="FONDO IDEAL" value="Void #06060A · #0F0F1A" />
              </div>
            </div>
          </Card>

          {/* ── VARIANTE B: LATTICE ────────────────────────────────────────── */}
          <Card>
            {/* Mark showcase */}
            <div
              className="relative flex flex-col items-center justify-center py-12"
              style={{ background: "#06060A" }}
            >
              <div
                className="absolute inset-0 opacity-4"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(170,255,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(170,255,0,1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                  opacity: 0.04,
                }}
              />
              <FluxMarkLattice size={96} />
            </div>

            <div className="p-5 space-y-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "9px",
                    letterSpacing: "0.15em",
                    color: "#7C3AFF",
                    marginBottom: "6px",
                  }}
                >
                  VARIANTE B · LATTICE
                </div>
                <p style={{ fontSize: "12px", color: "rgba(244,243,255,0.45)", lineHeight: 1.6 }}>
                  Red de nodos con conectividad en forma de E. El nodo central en violet
                  representa la inteligencia artificial como núcleo del sistema.
                </p>
              </div>

              {/* Lockup horizontal */}
              <div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", color: "rgba(170,255,0,0.3)", letterSpacing: "0.1em", marginBottom: "10px" }}>
                  LOCKUP HORIZONTAL
                </div>
                <div
                  className="flex items-center justify-center py-6 px-4 rounded-lg"
                  style={{ background: "#0A0A12", border: "1px solid rgba(255,255,255,0.04)" }}
                >
                  <LockupH
                    mark={<FluxMarkLattice size={38} />}
                    wordmark={<WordmarkB />}
                  />
                </div>
              </div>

              {/* Lockup stacked */}
              <div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", color: "rgba(170,255,0,0.3)", letterSpacing: "0.1em", marginBottom: "10px" }}>
                  LOCKUP APILADO
                </div>
                <div
                  className="flex flex-col items-center justify-center py-6 px-4 rounded-lg gap-3"
                  style={{ background: "#0A0A12", border: "1px solid rgba(255,255,255,0.04)" }}
                >
                  <FluxMarkLattice size={52} />
                  <WordmarkB />
                </div>
              </div>

              {/* Specs */}
              <div>
                <SpecRow label="ÍCONO MÍNIMO" value="24px digital · 8mm impreso" />
                <SpecRow label="FUENTE DISPLAY" value="Space Grotesk 700" />
                <SpecRow label="FUENTE TAGLINE" value="Space Mono 400" />
                <SpecRow label="ACENTO NODO" value="Void Violet #7C3AFF" />
              </div>
            </div>
          </Card>
        </div>

        {/* ── COMPARATIVA DE TAMAÑOS ──────────────────────────────────────────── */}
        <div
          className="rounded-xl p-6"
          style={{ background: "#0A0A12", border: "1px solid rgba(170,255,0,0.08)" }}
        >
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "9px",
              letterSpacing: "0.15em",
              color: "rgba(170,255,0,0.35)",
              marginBottom: "24px",
            }}
          >
            ESCALA DE TAMAÑOS — AMBAS VARIANTES
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Signal sizes */}
            <div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", color: "rgba(170,255,0,0.3)", letterSpacing: "0.1em", marginBottom: "16px" }}>
                A · SIGNAL
              </div>
              <div className="flex items-end gap-5 flex-wrap">
                {[16, 24, 32, 48, 64].map((s) => (
                  <div key={s} className="flex flex-col items-center gap-2">
                    <FluxMarkSignal size={s} />
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", color: "rgba(170,255,0,0.3)" }}>
                      {s}px
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Lattice sizes */}
            <div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", color: "rgba(124,58,255,0.5)", letterSpacing: "0.1em", marginBottom: "16px" }}>
                B · LATTICE
              </div>
              <div className="flex items-end gap-5 flex-wrap">
                {[16, 24, 32, 48, 64].map((s) => (
                  <div key={s} className="flex flex-col items-center gap-2">
                    <FluxMarkLattice size={s} />
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", color: "rgba(170,255,0,0.3)" }}>
                      {s}px
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
