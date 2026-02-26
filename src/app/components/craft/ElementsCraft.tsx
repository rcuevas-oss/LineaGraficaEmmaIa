import React from "react";
import { C } from "./tokens";
import { SLabel, CCard, ETag, Rule } from "./SharedCraft";

// ─── Diagonal accent motif ────────────────────────────────────────────────────
export function DiagonalAccent({
  width = 200,
  height = 80,
  color = C.ember,
  opacity = 0.06,
}: {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" style={{ opacity }}>
      {[-80, -40, 0, 40, 80, 120, 160, 200, 240].map((x, i) => (
        <line
          key={i}
          x1={x}
          y1={0}
          x2={x + height}
          y2={height}
          stroke={color}
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

// ─── Stat Block ───────────────────────────────────────────────────────────────
export function StatBlock({
  value,
  label,
  trend,
  mono = false,
}: {
  value: string;
  label: string;
  trend?: string;
  mono?: boolean;
}) {
  return (
    <div
      className="p-5 rounded-xl"
      style={{
        background: C.card,
        border: `1px solid ${C.border}`,
        borderTopColor: C.ember,
        borderTopWidth: "2px",
      }}
    >
      {trend && (
        <div
          className="inline-flex items-center gap-1 px-2 py-0.5 rounded mb-3"
          style={{ background: C.successDim, border: `1px solid rgba(74,222,128,0.2)` }}
        >
          <span style={{ fontFamily: C.mono, fontSize: "10px", color: C.success }}>↑ {trend}</span>
        </div>
      )}
      <div
        style={{
          fontFamily: mono ? C.mono : C.syne,
          fontSize: "clamp(28px, 5vw, 40px)",
          fontWeight: 800,
          color: C.textPrimary,
          letterSpacing: mono ? "-0.02em" : "-0.05em",
          lineHeight: 1,
          marginBottom: "6px",
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: "13px", color: C.textSecondary, fontFamily: C.inter }}>{label}</div>
    </div>
  );
}

// ─── Flow step ────────────────────────────────────────────────────────────────
export function FlowDiagram({ compact = false }: { compact?: boolean }) {
  const steps = ["Diagnóstico", "Diseño", "Desarrollo", "Deploy", "Monitoreo"];
  return (
    <div className="flex items-center overflow-x-auto">
      {steps.map((s, i) => (
        <div key={s} style={{ display: "contents" }}>
          <div
            className="flex flex-col items-center gap-2 shrink-0"
            style={{ minWidth: compact ? "52px" : "72px" }}
          >
            <div
              className="flex items-center justify-center rounded-lg"
              style={{
                width: compact ? "28px" : "36px",
                height: compact ? "28px" : "36px",
                background: i === 2 ? C.ember : C.card,
                border: `1px solid ${i === 2 ? C.ember : C.border}`,
              }}
            >
              <span
                style={{
                  fontFamily: C.mono,
                  fontSize: "10px",
                  color: i === 2 ? "white" : C.textMuted,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            {!compact && (
              <span
                style={{
                  fontFamily: C.inter,
                  fontSize: "10px",
                  color: i === 2 ? C.textPrimary : C.textMuted,
                  fontWeight: i === 2 ? 600 : 400,
                  textAlign: "center",
                }}
              >
                {s}
              </span>
            )}
          </div>
          {i < steps.length - 1 && (
            <div
              style={{
                flex: 1,
                height: "1px",
                minWidth: "12px",
                background: i < 2 ? C.ember : C.border,
                marginBottom: compact ? 0 : "20px",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Main ──────────────────────────────────────────────────────────────────────
export function ElementsCraft() {
  return (
    <section style={{ background: C.raised, padding: "88px 0", fontFamily: C.inter }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <SLabel
          index="04 — ELEMENTOS"
          title="Elementos gráficos"
          sub="Patrones diagonales, reglas tipográficas, stat blocks y diagramas de flujo — todos derivados del mismo sistema de formas."
        />

        {/* Patterns row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {/* Diagonal lines */}
          <CCard>
            <div className="relative h-36 flex items-end overflow-hidden" style={{ background: C.base }}>
              <div className="absolute inset-0">
                <DiagonalAccent width={320} height={144} color={C.ember} opacity={0.08} />
              </div>
              <div className="absolute bottom-4 left-4">
                <div className="w-8 h-0.5 mb-1.5" style={{ background: C.ember }} />
                <div className="w-8 h-0.5 mb-1.5" style={{ background: C.border }} />
                <div className="w-8 h-0.5" style={{ background: C.border }} />
              </div>
            </div>
            <div className="p-4">
              <div style={{ fontSize: "13px", fontWeight: 600, color: C.textPrimary, marginBottom: "3px" }}>
                Líneas diagonales
              </div>
              <div style={{ fontSize: "11px", color: C.textMuted }}>
                Patrón de fondo en Ember muy bajo. Dinamismo sin ruido.
              </div>
            </div>
          </CCard>

          {/* Typographic rule */}
          <CCard>
            <div
              className="h-36 flex flex-col justify-end p-5"
              style={{ background: C.base }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div style={{ width: "32px", height: "2px", background: C.ember }} />
                <span style={{ fontFamily: C.mono, fontSize: "9px", color: C.ember, letterSpacing: "0.1em" }}>
                  SECCIÓN
                </span>
              </div>
              <div
                style={{
                  fontFamily: C.syne,
                  fontSize: "22px",
                  fontWeight: 800,
                  color: C.textPrimary,
                  letterSpacing: "-0.03em",
                }}
              >
                Título de sección
              </div>
            </div>
            <div className="p-4">
              <div style={{ fontSize: "13px", fontWeight: 600, color: C.textPrimary, marginBottom: "3px" }}>
                Regla tipográfica
              </div>
              <div style={{ fontSize: "11px", color: C.textMuted }}>
                Línea Ember + label mono precede todo título de sección.
              </div>
            </div>
          </CCard>

          {/* Ember glow card */}
          <CCard>
            <div
              className="h-36 relative overflow-hidden"
              style={{ background: C.base }}
            >
              <div
                className="absolute"
                style={{
                  top: "-20px",
                  right: "-20px",
                  width: "120px",
                  height: "120px",
                  background: `radial-gradient(circle, ${C.ember}40 0%, transparent 70%)`,
                }}
              />
              <div
                className="absolute"
                style={{
                  bottom: "20px",
                  left: "20px",
                  width: "48px",
                  height: "48px",
                  background: C.ember,
                  borderRadius: "10px",
                  transform: "rotate(12deg)",
                  opacity: 0.15,
                }}
              />
              <div
                className="absolute"
                style={{
                  bottom: "20px",
                  left: "20px",
                  width: "48px",
                  height: "48px",
                  background: "transparent",
                  border: `1.5px solid ${C.ember}`,
                  borderRadius: "10px",
                  transform: "rotate(0deg)",
                  opacity: 0.5,
                }}
              />
            </div>
            <div className="p-4">
              <div style={{ fontSize: "13px", fontWeight: 600, color: C.textPrimary, marginBottom: "3px" }}>
                Glow + formas
              </div>
              <div style={{ fontSize: "11px", color: C.textMuted }}>
                Rombo con rotación — derivado del ícono del logo.
              </div>
            </div>
          </CCard>
        </div>

        {/* Flow diagram */}
        <CCard className="mb-6">
          <div className="p-6">
            <div style={{ fontFamily: C.mono, fontSize: "10px", color: C.textMuted, letterSpacing: "0.08em", marginBottom: "20px" }}>
              DIAGRAMA DE PROCESO / FLUJO
            </div>
            <FlowDiagram />
          </div>
        </CCard>

        {/* Stat blocks */}
        <CCard className="mb-6">
          <div className="p-6">
            <div style={{ fontFamily: C.mono, fontSize: "10px", color: C.textMuted, letterSpacing: "0.08em", marginBottom: "16px" }}>
              STAT BLOCKS — MÉTRICAS DE IMPACTO
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <StatBlock value="3.4×" label="ROI promedio" trend="+12% vs Q3" />
              <StatBlock value="99.9%" label="Uptime SLA" trend="último trimestre" />
              <StatBlock value="−62%" label="Tiempo manual" />
              <StatBlock value="48h" label="Time to first deploy" mono />
            </div>
          </div>
        </CCard>

        {/* Icons */}
        <CCard>
          <div className="p-6">
            <div style={{ fontFamily: C.mono, fontSize: "10px", color: C.textMuted, letterSpacing: "0.08em", marginBottom: "20px" }}>
              SISTEMA DE ICONOS — OUTLINE 1.5PX · ROUNDED
            </div>
            <div className="flex flex-wrap gap-4 items-end">
              {[
                { d: "M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z M13 2v7h7", label: "Doc" },
                { d: "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z", label: "Módulo" },
                { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", label: "Shield" },
                { d: "M18 20V10 M12 20V4 M6 20v-6", label: "Stats" },
                { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 11a4 4 0 100-8 4 4 0 000 8z M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75", label: "Team" },
                { d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", label: "Auto" },
                { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z M12 6v6l4 2", label: "Time" },
                { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22", label: "Dev" },
              ].map((icon) => (
                <div key={icon.label} className="flex flex-col items-center gap-2">
                  <div
                    className="flex items-center justify-center rounded-xl"
                    style={{
                      width: "44px",
                      height: "44px",
                      background: C.raised,
                      border: `1px solid ${C.border}`,
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={C.ember}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={icon.d} />
                    </svg>
                  </div>
                  <span style={{ fontFamily: C.mono, fontSize: "9px", color: C.textMuted }}>{icon.label}</span>
                </div>
              ))}
              <div
                className="flex items-center px-3 py-2 rounded-xl self-end"
                style={{
                  background: C.emberDim,
                  border: `1px solid rgba(232,99,26,0.2)`,
                }}
              >
                <span style={{ fontFamily: C.mono, fontSize: "10px", color: C.ember, lineHeight: 1.5 }}>
                  Stroke 1.5px · Rounded
                  <br />
                  Color: Ember o Text 02
                </span>
              </div>
            </div>
          </div>
        </CCard>
      </div>
    </section>
  );
}
