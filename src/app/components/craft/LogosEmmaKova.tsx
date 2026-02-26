import React from "react";
import { C } from "./tokens";
import { CCard, ETag } from "./SharedCraft";

// ─── MARK A: "EMBER MARK" ─────────────────────────────────────────────────────
// Ícono cuadrado redondeado en ember con E geométrica blanca dentro.
// La E tiene grosor variable: la barra media es más corta (dejando espacio para "IA").
// Se lee: marca cálida, crafted, con carácter.
export function KovaMarkEmber({
  size = 48,
  light = false,
}: {
  size?: number;
  light?: boolean;
}) {
  const bgFill = light ? "#0D0C0A" : C.ember;
  const markFill = light ? C.ember : "white";

  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Background */}
      <rect width="40" height="40" rx="10" fill={bgFill} />
      {/* E — vertical stroke */}
      <rect x="11" y="9" width="4" height="22" rx="1.5" fill={markFill} />
      {/* E — top bar */}
      <rect x="11" y="9" width="17" height="4" rx="1.5" fill={markFill} />
      {/* E — middle bar (shorter: IA space) */}
      <rect x="11" y="18" width="12" height="4" rx="1.5" fill={markFill} />
      {/* E — bottom bar */}
      <rect x="11" y="27" width="17" height="4" rx="1.5" fill={markFill} />
      {/* IA dot — to the right of mid bar */}
      <rect x="26" y="18" width="4" height="4" rx="2" fill={markFill} opacity={light ? 1 : 0.5} />
    </svg>
  );
}

// ─── MARK B: "DUAL FLOW" ──────────────────────────────────────────────────────
// Dos rombos superpuestos — evolución del ícono de KOVA para EMMA IA.
// Rombo izquierdo sólido (entrada), rombo derecho outline (salida/proceso).
// Juntos forman el ritmo de doble M — automático como respirar.
export function KovaMarkDualFlow({
  size = 48,
  inverted = false,
}: {
  size?: number;
  inverted?: boolean;
}) {
  const ember = inverted ? "#0D0C0A" : C.ember;
  const bg = inverted ? C.ember : "transparent";

  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {inverted && <rect width="40" height="40" rx="10" fill={bg} />}
      {/* Rombo izquierdo — sólido (flujo de entrada) */}
      <path d="M 6 20 L 14 10 L 22 20 L 14 30 Z" fill={ember} />
      {/* Rombo derecho — outline (flujo de salida) */}
      <path d="M 18 20 L 26 10 L 34 20 L 26 30 Z" fill="none" stroke={ember} strokeWidth="1.8" />
      {/* Nodo de intersección */}
      <circle cx="20" cy="20" r="2.5" fill={ember} opacity={inverted ? 0.6 : 0.45} />
    </svg>
  );
}

// ─── Wordmark A — "emma ia" Syne ─────────────────────────────────────────────
function KovaWordmarkA({
  onLight = false,
}: {
  onLight?: boolean;
}) {
  const mainColor = onLight ? "#0D0C0A" : C.textPrimary;
  const accentColor = onLight ? C.ember : C.ember;
  const monoColor = onLight ? "rgba(13,12,10,0.45)" : C.textMuted;

  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex items-baseline gap-1.5">
        <span
          style={{
            fontFamily: C.syne,
            fontSize: "22px",
            fontWeight: 800,
            color: mainColor,
            letterSpacing: "-0.035em",
          }}
        >
          emma
        </span>
        <span
          style={{
            fontFamily: C.mono,
            fontSize: "12px",
            fontWeight: 700,
            color: accentColor,
            letterSpacing: "0.06em",
          }}
        >
          ia
        </span>
      </div>
      <span
        style={{
          fontFamily: C.mono,
          fontSize: "8px",
          color: monoColor,
          letterSpacing: "0.14em",
        }}
      >
        SOFTWARE & AUTOMATION
      </span>
    </div>
  );
}

// ─── Wordmark B — "EMMA · IA" horizontal ─────────────────────────────────────
function KovaWordmarkB({
  onLight = false,
  onEmber = false,
}: {
  onLight?: boolean;
  onEmber?: boolean;
}) {
  const mainColor = onLight ? "#0D0C0A" : onEmber ? "white" : C.textPrimary;
  const badgeBg = onLight ? "rgba(232,99,26,0.1)" : onEmber ? "rgba(255,255,255,0.2)" : C.emberDim;
  const badgeBorder = onLight ? "rgba(232,99,26,0.25)" : onEmber ? "rgba(255,255,255,0.3)" : "rgba(232,99,26,0.2)";
  const badgeText = onLight ? C.ember : onEmber ? "white" : C.ember;

  return (
    <div className="flex items-center gap-3">
      <span
        style={{
          fontFamily: C.syne,
          fontSize: "22px",
          fontWeight: 800,
          color: mainColor,
          letterSpacing: "-0.035em",
        }}
      >
        EMMA
      </span>
      <div
        className="flex items-center px-2 py-1 rounded-md"
        style={{
          background: badgeBg,
          border: `1px solid ${badgeBorder}`,
        }}
      >
        <span
          style={{
            fontFamily: C.mono,
            fontSize: "11px",
            fontWeight: 700,
            color: badgeText,
            letterSpacing: "0.08em",
          }}
        >
          IA
        </span>
      </div>
    </div>
  );
}

// ─── Spec row ─────────────────────────────────────────────────────────────────
function KSpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="flex items-center justify-between py-2.5"
      style={{ borderBottom: `1px solid ${C.border}` }}
    >
      <span style={{ fontFamily: C.mono, fontSize: "10px", color: C.textMuted, letterSpacing: "0.06em" }}>
        {label}
      </span>
      <span style={{ fontFamily: C.inter, fontSize: "12px", color: C.textPrimary, fontWeight: 500 }}>
        {value}
      </span>
    </div>
  );
}

// ─── Section label ─────────────────────────────────────────────────────────────
function KSectionLabel() {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-5">
        <span style={{ fontFamily: C.mono, fontSize: "11px", color: C.ember, letterSpacing: "0.1em" }}>
          03 — LOGOTIPO
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
          marginBottom: "12px",
        }}
      >
        EMMA IA — Identidad visual
      </h2>
      <p style={{ fontFamily: C.inter, fontSize: "16px", color: C.textSecondary, lineHeight: 1.65, maxWidth: "500px" }}>
        Dos variantes diseñadas para el sistema KOVA. Warm craft dark: geometría cálida,
        Ember como acento, carácter sin ruido.
      </p>
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export function LogosEmmaKova() {
  return (
    <section style={{ background: C.base, padding: "88px 0", fontFamily: C.inter }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <KSectionLabel />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

          {/* ── VARIANTE A: EMBER MARK ─────────────────────────────────────── */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: `1px solid ${C.border}`,
              borderTopColor: C.ember,
              borderTopWidth: "2px",
            }}
          >
            {/* Mark showcase */}
            <div
              className="relative overflow-hidden flex items-center justify-center py-14"
              style={{ background: C.raised }}
            >
              {/* Diagonal pattern */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.07 }}>
                {[-80, -40, 0, 40, 80, 120, 160, 200, 240, 280, 320, 360].map((x, i) => (
                  <line key={i} x1={x} y1={0} x2={x + 200} y2={200} stroke={C.ember} strokeWidth="1" />
                ))}
              </svg>
              {/* Glow */}
              <div
                className="absolute pointer-events-none"
                style={{
                  width: "160px", height: "160px",
                  background: `radial-gradient(circle, ${C.ember}22 0%, transparent 65%)`,
                }}
              />
              <KovaMarkEmber size={104} />
            </div>

            <div className="p-6 space-y-5" style={{ background: C.card }}>
              <div>
                <div
                  style={{
                    fontFamily: C.mono,
                    fontSize: "9px",
                    letterSpacing: "0.12em",
                    color: C.ember,
                    marginBottom: "6px",
                  }}
                >
                  VARIANTE A · EMBER MARK
                </div>
                <p style={{ fontSize: "13px", color: C.textSecondary, lineHeight: 1.65 }}>
                  E geométrica construida con barras de grosor uniforme sobre fondo ember.
                  El punto IA desplazado a la derecha de la barra media lo distingue de una E tipográfica genérica.
                </p>
              </div>

              {/* Lockup horizontal — dark */}
              <div>
                <div style={{ fontFamily: C.mono, fontSize: "9px", color: C.textMuted, letterSpacing: "0.1em", marginBottom: "10px" }}>
                  LOCKUP HORIZONTAL · DARK
                </div>
                <div
                  className="flex items-center justify-center py-7 rounded-xl gap-3"
                  style={{ background: C.base, border: `1px solid ${C.border}` }}
                >
                  <KovaMarkEmber size={40} />
                  <KovaWordmarkA />
                </div>
              </div>

              {/* Lockup — sobre claro */}
              <div>
                <div style={{ fontFamily: C.mono, fontSize: "9px", color: C.textMuted, letterSpacing: "0.1em", marginBottom: "10px" }}>
                  LOCKUP · SOBRE FONDO CLARO
                </div>
                <div
                  className="flex items-center justify-center py-7 rounded-xl gap-3"
                  style={{ background: "#F5F3EF", border: `1px solid #E0DDD8` }}
                >
                  <KovaMarkEmber size={40} light />
                  <KovaWordmarkA onLight />
                </div>
              </div>

              <div>
                <KSpecRow label="ÍCONO MÍNIMO" value="24px digital · 8mm impreso" />
                <KSpecRow label="FUENTE DISPLAY" value="Syne 800" />
                <KSpecRow label="FUENTE BADGE" value="JetBrains Mono 700" />
                <KSpecRow label="COLOR ICONO" value="Ember #E8631A" />
              </div>
            </div>
          </div>

          {/* ── VARIANTE B: DUAL FLOW ──────────────────────────────────────── */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: `1px solid ${C.border}` }}
          >
            {/* Mark showcase */}
            <div
              className="relative overflow-hidden flex items-center justify-center py-14"
              style={{ background: C.raised }}
            >
              <div
                className="absolute pointer-events-none"
                style={{
                  width: "180px", height: "180px",
                  background: `radial-gradient(circle, ${C.ember}18 0%, transparent 65%)`,
                }}
              />
              {/* Rotated square in bg */}
              <div
                className="absolute pointer-events-none"
                style={{
                  width: "80px",
                  height: "80px",
                  border: `1px solid ${C.ember}`,
                  opacity: 0.08,
                  transform: "rotate(12deg)",
                }}
              />
              <KovaMarkDualFlow size={104} />
            </div>

            <div className="p-6 space-y-5" style={{ background: C.card }}>
              <div>
                <div
                  style={{
                    fontFamily: C.mono,
                    fontSize: "9px",
                    letterSpacing: "0.12em",
                    color: C.ember,
                    marginBottom: "6px",
                  }}
                >
                  VARIANTE B · DUAL FLOW
                </div>
                <p style={{ fontSize: "13px", color: C.textSecondary, lineHeight: 1.65 }}>
                  Dos rombos contrapuestos — sólido y outline — que evocan el ciclo de automatización.
                  Evolución directa del sistema KOVA aplicado a la identidad EMMA IA.
                </p>
              </div>

              {/* Lockup horizontal */}
              <div>
                <div style={{ fontFamily: C.mono, fontSize: "9px", color: C.textMuted, letterSpacing: "0.1em", marginBottom: "10px" }}>
                  LOCKUP HORIZONTAL · DARK
                </div>
                <div
                  className="flex items-center justify-center py-7 rounded-xl gap-3"
                  style={{ background: C.base, border: `1px solid ${C.border}` }}
                >
                  <KovaMarkDualFlow size={40} />
                  <KovaWordmarkB />
                </div>
              </div>

              {/* Lockup sobre ember */}
              <div>
                <div style={{ fontFamily: C.mono, fontSize: "9px", color: C.textMuted, letterSpacing: "0.1em", marginBottom: "10px" }}>
                  LOCKUP · SOBRE EMBER
                </div>
                <div
                  className="flex items-center justify-center py-7 rounded-xl gap-3"
                  style={{ background: C.ember }}
                >
                  <KovaMarkDualFlow size={40} inverted />
                  <KovaWordmarkB onEmber />
                </div>
              </div>

              <div>
                <KSpecRow label="ÍCONO MÍNIMO" value="20px digital · 8mm impreso" />
                <KSpecRow label="FUENTE WORDMARK" value="Syne 800" />
                <KSpecRow label="FUENTE BADGE IA" value="JetBrains Mono 700" />
                <KSpecRow label="BADGE IA" value="Ember dim sobre dark" />
              </div>
            </div>
          </div>
        </div>

        {/* ── ESCALA + VARIANTES DE FONDO ──────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {/* Tamaños */}
          <CCard>
            <div className="p-5">
              <div style={{ fontFamily: C.mono, fontSize: "9px", color: C.textMuted, letterSpacing: "0.1em", marginBottom: "20px" }}>
                ESCALA DE TAMAÑOS
              </div>
              <div className="space-y-4">
                <div>
                  <div style={{ fontFamily: C.mono, fontSize: "9px", color: C.ember, letterSpacing: "0.1em", marginBottom: "12px" }}>
                    A · EMBER MARK
                  </div>
                  <div className="flex items-end gap-5 flex-wrap">
                    {[16, 24, 32, 48, 64].map((s) => (
                      <div key={s} className="flex flex-col items-center gap-2">
                        <KovaMarkEmber size={s} />
                        <span style={{ fontFamily: C.mono, fontSize: "9px", color: C.textMuted }}>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: "16px" }}>
                  <div style={{ fontFamily: C.mono, fontSize: "9px", color: C.ember, letterSpacing: "0.1em", marginBottom: "12px" }}>
                    B · DUAL FLOW
                  </div>
                  <div className="flex items-end gap-5 flex-wrap">
                    {[16, 24, 32, 48, 64].map((s) => (
                      <div key={s} className="flex flex-col items-center gap-2">
                        <KovaMarkDualFlow size={s} />
                        <span style={{ fontFamily: C.mono, fontSize: "9px", color: C.textMuted }}>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CCard>

          {/* Fondos aprobados */}
          <CCard>
            <div className="p-5">
              <div style={{ fontFamily: C.mono, fontSize: "9px", color: C.textMuted, letterSpacing: "0.1em", marginBottom: "16px" }}>
                FONDOS APROBADOS
              </div>
              <div className="space-y-3">
                {[
                  { bg: C.base, border: C.border, label: "Base #0D0C0A", ok: true },
                  { bg: C.raised, border: C.border, label: "Raised #181613", ok: true },
                  { bg: C.card, border: C.border, label: "Card #211E1A", ok: true },
                  { bg: C.ember, border: "transparent", label: "Ember #E8631A", ok: true },
                  { bg: "#F5F3EF", border: "#E0DDD8", label: "Off-white (docs)", ok: true },
                  { bg: "#FFFFFF", border: "#E8E8E8", label: "Blanco puro", ok: false, note: "Solo con versión oscura del ícono" },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg"
                    style={{ background: f.bg, border: `1px solid ${f.border}` }}
                  >
                    <KovaMarkEmber size={20} light={["#F5F3EF", "#FFFFFF"].includes(f.bg)} />
                    <span style={{
                      fontFamily: C.inter,
                      fontSize: "11px",
                      color: ["#F5F3EF", "#FFFFFF"].includes(f.bg) ? "#0D0C0A" : C.textSecondary,
                    }}>
                      {f.label}
                    </span>
                    {!f.ok && (
                      <span style={{ fontFamily: C.mono, fontSize: "9px", color: C.ember, marginLeft: "auto" }}>
                        ⚠
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CCard>
        </div>

        {/* ── REGLA DE USO ─────────────────────────────────────────────────── */}
        <CCard>
          <div className="p-5">
            <div style={{ fontFamily: C.mono, fontSize: "9px", color: C.textMuted, letterSpacing: "0.1em", marginBottom: "16px" }}>
              CRITERIO DE SELECCIÓN — ¿QUÉ VARIANTE USAR?
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  variant: "A · Ember Mark",
                  color: C.ember,
                  contexts: [
                    "Favicon, app icon, perfiles de RRSS",
                    "Presentaciones y propuestas comerciales",
                    "Merchandising: tarjetas, ropa, totes",
                    "Cuando se busca máxima legibilidad a pequeño tamaño",
                  ],
                },
                {
                  variant: "B · Dual Flow",
                  color: C.textSecondary,
                  contexts: [
                    "Headers de documentos técnicos",
                    "Footers de email y templates",
                    "Contextos donde el sistema KOVA es protagonista",
                    "Cuando se quiere enfatizar el concepto de automatización",
                  ],
                },
              ].map((item) => (
                <div key={item.variant}>
                  <div
                    style={{
                      fontFamily: C.mono,
                      fontSize: "10px",
                      color: item.color,
                      letterSpacing: "0.07em",
                      marginBottom: "10px",
                    }}
                  >
                    {item.variant}
                  </div>
                  <ul className="space-y-2">
                    {item.contexts.map((ctx, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: C.ember }} />
                        <span style={{ fontSize: "13px", color: C.textSecondary, lineHeight: 1.5 }}>{ctx}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </CCard>
      </div>
    </section>
  );
}
