import React from "react";
import { T } from "./tokens";
import { SectionLabel } from "./SharedB2B";

// ─── MARK A: "NUCLEUS" ────────────────────────────────────────────────────────
// Dos círculos concéntricos desplazados + punto central sólido.
// Evoca: átomo, órbita de IA, sistema en movimiento. Clean, premium, Stripe-level.
export function B2BMarkNucleus({
  size = 48,
  inverted = false,
}: {
  size?: number;
  inverted?: boolean;
}) {
  const blue = inverted ? "#FFFFFF" : T.blue;
  const blueFill = inverted ? "#FFFFFF" : T.blue;
  const outerOpacity = inverted ? 0.7 : 1;

  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Outer orbit — thin, full */}
      <circle cx="19" cy="20" r="14" stroke={blue} strokeWidth="1.2" opacity={outerOpacity} />
      {/* Inner orbit — thinner, slightly offset */}
      <circle cx="22" cy="20" r="9" stroke={blue} strokeWidth="0.8" opacity={inverted ? 0.4 : 0.35} />
      {/* Small arc: top-right only, creating asymmetry */}
      <path
        d="M 28 11 A 11 11 0 0 1 33 20"
        stroke={blue}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity={inverted ? 0.8 : 0.7}
      />
      {/* Center dot — IA core */}
      <circle cx="20" cy="20" r="3.5" fill={blueFill} />
      {/* Orbit dot */}
      <circle cx="33" cy="20" r="1.5" fill={blue} opacity={inverted ? 0.7 : 0.6} />
    </svg>
  );
}

// ─── MARK B: "STRATA" ─────────────────────────────────────────────────────────
// Tres barras horizontales de ancho variable que abstraen la letra E.
// Full 100% flat, muy Stripe/Linear. Sin gradientes, sin sombras.
export function B2BMarkStrata({
  size = 48,
  inverted = false,
}: {
  size?: number;
  inverted?: boolean;
}) {
  const fill = inverted ? "#FFFFFF" : T.blue;

  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Top bar — full */}
      <rect x="8" y="8.5" width="24" height="4.5" rx="2.25" fill={fill} />
      {/* Mid bar — 3/4 width (the IA) */}
      <rect x="8" y="17.75" width="16" height="4.5" rx="2.25" fill={fill} />
      {/* Mid bar right — "IA" dot accent */}
      <rect x="27" y="17.75" width="5" height="4.5" rx="2.25" fill={fill} opacity="0.35" />
      {/* Bottom bar — full */}
      <rect x="8" y="27" width="24" height="4.5" rx="2.25" fill={fill} />
    </svg>
  );
}

// ─── Wordmark A — "emma ia" DM Sans ──────────────────────────────────────────
function NexusWordmarkA({
  inverted = false,
  onColor = false,
}: {
  inverted?: boolean;
  onColor?: boolean;
}) {
  const mainColor = onColor ? "#FFFFFF" : T.ink;
  const accentColor = onColor ? "rgba(255,255,255,0.7)" : T.blue;
  const subColor = onColor ? "rgba(255,255,255,0.5)" : T.muted;

  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex items-baseline gap-1.5">
        <span
          style={{
            fontFamily: T.sans,
            fontSize: "22px",
            fontWeight: 600,
            color: mainColor,
            letterSpacing: "-0.025em",
          }}
        >
          emma
        </span>
        <span
          style={{
            fontFamily: T.mono,
            fontSize: "13px",
            fontWeight: 500,
            color: accentColor,
            letterSpacing: "0.05em",
          }}
        >
          ia
        </span>
      </div>
      <span
        style={{
          fontFamily: T.mono,
          fontSize: "8px",
          color: subColor,
          letterSpacing: "0.12em",
        }}
      >
        SOFTWARE & AUTOMATION
      </span>
    </div>
  );
}

// ─── Wordmark B — "EMMA IA" con separador ─────────────────────────────────────
function NexusWordmarkB({
  inverted = false,
  onColor = false,
}: {
  inverted?: boolean;
  onColor?: boolean;
}) {
  const mainColor = onColor ? "#FFFFFF" : T.ink;
  const accentColor = onColor ? "rgba(255,255,255,0.85)" : T.blue;

  return (
    <div className="flex items-center gap-2">
      <span
        style={{
          fontFamily: T.sans,
          fontSize: "20px",
          fontWeight: 700,
          color: mainColor,
          letterSpacing: "-0.02em",
        }}
      >
        EMMA
      </span>
      <div
        style={{
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          background: accentColor,
        }}
      />
      <span
        style={{
          fontFamily: T.sans,
          fontSize: "20px",
          fontWeight: 300,
          color: accentColor,
          letterSpacing: "0.04em",
        }}
      >
        IA
      </span>
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────
function B2BCard({
  children,
  accent = false,
}: {
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: T.white,
        border: `1px solid ${accent ? "rgba(26,68,255,0.25)" : T.border}`,
        boxShadow: accent
          ? "0 0 0 3px rgba(26,68,255,0.06), 0 4px 20px rgba(0,0,0,0.06)"
          : "0 2px 12px rgba(0,0,0,0.04)",
      }}
    >
      {children}
    </div>
  );
}

// ─── Spec row ─────────────────────────────────────────────────────────────────
function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="flex items-center justify-between py-2.5"
      style={{ borderBottom: `1px solid ${T.border}` }}
    >
      <span style={{ fontFamily: T.mono, fontSize: "10px", color: T.muted, letterSpacing: "0.05em" }}>
        {label}
      </span>
      <span style={{ fontFamily: T.sans, fontSize: "12px", fontWeight: 500, color: T.ink }}>
        {value}
      </span>
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export function LogosEmmaB2B() {
  return (
    <section style={{ background: T.canvas, padding: "88px 0", fontFamily: T.sans }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <SectionLabel
          step="03 — Logotipo"
          title="EMMA IA — Identidad visual"
          subtitle="Dos variantes diseñadas para el sistema NEXO. Geometría precisa, sin ornamentos. Cada trazo tiene propósito."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

          {/* ── VARIANTE A: NUCLEUS ────────────────────────────────────────── */}
          <B2BCard accent>
            {/* Mark showcase */}
            <div
              className="relative overflow-hidden flex items-center justify-center py-14"
              style={{ background: T.canvas }}
            >
              {/* Subtle dot grid */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle, ${T.blue}18 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                  opacity: 0.6,
                }}
              />
              <B2BMarkNucleus size={100} />
            </div>

            <div className="p-6 space-y-5" style={{ borderTop: `1px solid ${T.border}` }}>
              <div>
                <div
                  style={{
                    fontFamily: T.mono,
                    fontSize: "9px",
                    letterSpacing: "0.12em",
                    color: T.blue,
                    marginBottom: "6px",
                  }}
                >
                  VARIANTE A · NUCLEUS
                </div>
                <p style={{ fontFamily: T.sans, fontSize: "13px", color: T.slate, lineHeight: 1.65 }}>
                  Órbita asimétrica con núcleo sólido. Representa un sistema IA en
                  movimiento constante — la automatización que nunca se detiene.
                </p>
              </div>

              {/* Lockup horizontal sobre canvas */}
              <div>
                <div style={{ fontFamily: T.mono, fontSize: "9px", color: T.muted, letterSpacing: "0.1em", marginBottom: "10px" }}>
                  LOCKUP HORIZONTAL
                </div>
                <div
                  className="flex items-center justify-center py-7 rounded-xl gap-3"
                  style={{ background: T.canvas, border: `1px solid ${T.border}` }}
                >
                  <B2BMarkNucleus size={40} />
                  <NexusWordmarkA />
                </div>
              </div>

              {/* Lockup sobre azul */}
              <div>
                <div style={{ fontFamily: T.mono, fontSize: "9px", color: T.muted, letterSpacing: "0.1em", marginBottom: "10px" }}>
                  SOBRE COLOR PRIMARIO
                </div>
                <div
                  className="flex items-center justify-center py-7 rounded-xl gap-3"
                  style={{ background: T.blue }}
                >
                  <B2BMarkNucleus size={40} inverted />
                  <NexusWordmarkA onColor />
                </div>
              </div>

              <div>
                <SpecRow label="ÍCONO MÍNIMO" value="24px digital · 8mm impreso" />
                <SpecRow label="FUENTE WORDMARK" value="DM Sans 600" />
                <SpecRow label="FUENTE BADGE" value="DM Mono 500" />
                <SpecRow label="COLOR PRINCIPAL" value="Electric Blue #1A44FF" />
              </div>
            </div>
          </B2BCard>

          {/* ── VARIANTE B: STRATA ─────────────────────────────────────────── */}
          <B2BCard>
            {/* Mark showcase */}
            <div
              className="relative overflow-hidden flex items-center justify-center py-14"
              style={{ background: T.canvas }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle, ${T.blue}15 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                  opacity: 0.5,
                }}
              />
              <B2BMarkStrata size={100} />
            </div>

            <div className="p-6 space-y-5" style={{ borderTop: `1px solid ${T.border}` }}>
              <div>
                <div
                  style={{
                    fontFamily: T.mono,
                    fontSize: "9px",
                    letterSpacing: "0.12em",
                    color: T.blue,
                    marginBottom: "6px",
                  }}
                >
                  VARIANTE B · STRATA
                </div>
                <p style={{ fontFamily: T.sans, fontSize: "13px", color: T.slate, lineHeight: 1.65 }}>
                  Tres capas de datos que abstraen la letra E. Lectura inmediata:
                  estructurado, sistemático. El punto desplazado del medio señala la IA.
                </p>
              </div>

              {/* Lockup horizontal */}
              <div>
                <div style={{ fontFamily: T.mono, fontSize: "9px", color: T.muted, letterSpacing: "0.1em", marginBottom: "10px" }}>
                  LOCKUP HORIZONTAL
                </div>
                <div
                  className="flex items-center justify-center py-7 rounded-xl gap-3"
                  style={{ background: T.canvas, border: `1px solid ${T.border}` }}
                >
                  <B2BMarkStrata size={40} />
                  <NexusWordmarkB />
                </div>
              </div>

              {/* Lockup apilado */}
              <div>
                <div style={{ fontFamily: T.mono, fontSize: "9px", color: T.muted, letterSpacing: "0.1em", marginBottom: "10px" }}>
                  LOCKUP APILADO
                </div>
                <div
                  className="flex flex-col items-center justify-center py-7 rounded-xl gap-3"
                  style={{ background: T.canvas, border: `1px solid ${T.border}` }}
                >
                  <B2BMarkStrata size={52} />
                  <NexusWordmarkB />
                </div>
              </div>

              <div>
                <SpecRow label="ÍCONO MÍNIMO" value="24px digital · 8mm impreso" />
                <SpecRow label="FUENTE WORDMARK" value="DM Sans 700 + 300" />
                <SpecRow label="SEPARADOR" value="Punto · Electric Blue" />
                <SpecRow label="VERSIÓN OSCURA" value="Texto e ícono en blanco" />
              </div>
            </div>
          </B2BCard>
        </div>

        {/* ── ESCALA DE TAMAÑOS ──────────────────────────────────────────── */}
        <div
          className="rounded-2xl p-6"
          style={{ background: T.white, border: `1px solid ${T.border}` }}
        >
          <div style={{ fontFamily: T.mono, fontSize: "9px", color: T.muted, letterSpacing: "0.12em", marginBottom: "24px" }}>
            ESCALA DE TAMAÑOS — AMBAS VARIANTES
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <div style={{ fontFamily: T.mono, fontSize: "9px", color: T.blue, letterSpacing: "0.1em", marginBottom: "16px" }}>
                A · NUCLEUS
              </div>
              <div className="flex items-end gap-6 flex-wrap">
                {[16, 24, 32, 48, 64].map((s) => (
                  <div key={s} className="flex flex-col items-center gap-2">
                    <B2BMarkNucleus size={s} />
                    <span style={{ fontFamily: T.mono, fontSize: "9px", color: T.muted }}>
                      {s}px
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: T.mono, fontSize: "9px", color: T.blue, letterSpacing: "0.1em", marginBottom: "16px" }}>
                B · STRATA
              </div>
              <div className="flex items-end gap-6 flex-wrap">
                {[16, 24, 32, 48, 64].map((s) => (
                  <div key={s} className="flex flex-col items-center gap-2">
                    <B2BMarkStrata size={s} />
                    <span style={{ fontFamily: T.mono, fontSize: "9px", color: T.muted }}>
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
