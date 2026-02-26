import React from "react";
import { T } from "./tokens";
import { SectionLabel, DotGrid } from "./SharedB2B";

// ─── Clean Process Flow ───────────────────────────────────────────────────────
export function ProcessFlow({ compact = false }: { compact?: boolean }) {
  const steps = ["Diagnóstico", "Diseño", "Desarrollo", "Deploy", "Monitoreo"];
  return (
    <div className="flex items-center gap-0 overflow-x-auto">
      {steps.map((s, i) => (
        <div key={s} style={{ display: "contents" }}>
          <div
            className="flex flex-col items-center gap-2 shrink-0"
            style={{ minWidth: compact ? "64px" : "80px" }}
          >
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: compact ? "32px" : "40px",
                height: compact ? "32px" : "40px",
                background: i === 2 ? T.blue : T.canvas,
                border: `1.5px solid ${i === 2 ? T.blue : T.border}`,
              }}
            >
              <span
                style={{
                  fontFamily: T.mono,
                  fontSize: "11px",
                  color: i === 2 ? T.white : T.slate,
                  fontWeight: 500,
                }}
              >
                0{i + 1}
              </span>
            </div>
            {!compact && (
              <span
                style={{
                  fontSize: "11px",
                  color: i === 2 ? T.ink : T.muted,
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
                height: "1.5px",
                minWidth: "16px",
                background: i < 2 ? T.blue : T.border,
                marginBottom: compact ? 0 : "22px",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────────
export function StatCard({
  value,
  label,
  trend,
}: {
  value: string;
  label: string;
  trend?: string;
}) {
  return (
    <div
      className="p-4 rounded-xl"
      style={{
        background: T.white,
        border: `1px solid ${T.border}`,
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      {trend && (
        <div
          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full mb-3"
          style={{
            background: "#F0FDF4",
            border: "1px solid #BBF7D0",
          }}
        >
          <span style={{ fontSize: "10px", color: "#16A34A" }}>↑</span>
          <span
            style={{
              fontFamily: T.mono,
              fontSize: "10px",
              color: "#16A34A",
            }}
          >
            {trend}
          </span>
        </div>
      )}
      <div
        style={{
          fontFamily: T.sans,
          fontSize: "clamp(28px, 4vw, 36px)",
          fontWeight: 700,
          color: T.ink,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          marginBottom: "4px",
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: "13px", color: T.slate }}>{label}</div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export function ElementsB2B() {
  return (
    <section
      style={{
        background: T.canvas,
        fontFamily: T.sans,
        padding: "80px 0",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <SectionLabel
          step="05 — Elementos"
          title="Elementos gráficos"
          subtitle="Patrones y componentes visuales que construyen un lenguaje consistente en todos los puntos de contacto."
        />

        {/* Dot grid pattern */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {/* Dot grid */}
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: `1px solid ${T.border}` }}
          >
            <div
              className="relative h-36"
              style={{ background: T.white }}
            >
              <DotGrid opacity={0.6} />
              <div
                className="absolute"
                style={{
                  bottom: "20px",
                  right: "20px",
                  width: "60px",
                  height: "60px",
                  background: `radial-gradient(circle, rgba(26,68,255,0.15) 0%, transparent 70%)`,
                }}
              />
            </div>
            <div
              className="p-4"
              style={{ background: T.white, borderTop: `1px solid ${T.border}` }}
            >
              <div style={{ fontSize: "13px", fontWeight: 600, color: T.ink, marginBottom: "3px" }}>
                Grid de puntos
              </div>
              <div style={{ fontSize: "12px", color: T.muted }}>
                Fondo estructural sutil. Nunca más saturado que el mostrado.
              </div>
            </div>
          </div>

          {/* Line pattern */}
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: `1px solid ${T.border}` }}
          >
            <div
              className="relative h-36 flex items-center justify-center"
              style={{ background: T.white }}
            >
              <svg width="100%" height="100%" viewBox="0 0 280 140" preserveAspectRatio="none">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <line
                    key={i}
                    x1={i * 40}
                    y1="0"
                    x2={i * 40}
                    y2="140"
                    stroke={T.border}
                    strokeWidth="1"
                  />
                ))}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={i * 35}
                    x2="280"
                    y2={i * 35}
                    stroke={T.border}
                    strokeWidth="1"
                  />
                ))}
                <rect x="80" y="35" width="120" height="70" rx="4" fill={T.blueTint} stroke={T.blue} strokeWidth="1" strokeOpacity="0.4" />
                <circle cx="80" cy="35" r="4" fill={T.blue} />
                <circle cx="200" cy="35" r="4" fill={T.blue} />
                <circle cx="80" cy="105" r="4" fill={T.blue} />
                <circle cx="200" cy="105" r="4" fill={T.blue} />
              </svg>
            </div>
            <div
              className="p-4"
              style={{ background: T.white, borderTop: `1px solid ${T.border}` }}
            >
              <div style={{ fontSize: "13px", fontWeight: 600, color: T.ink, marginBottom: "3px" }}>
                Grid estructural
              </div>
              <div style={{ fontSize: "12px", color: T.muted }}>
                Para dashboards, diagramas y layouts técnicos.
              </div>
            </div>
          </div>

          {/* Blue shape */}
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: `1px solid ${T.border}` }}
          >
            <div
              className="relative h-36"
              style={{ background: T.ink }}
            >
              <div
                className="absolute"
                style={{
                  top: "-20px",
                  right: "-20px",
                  width: "120px",
                  height: "120px",
                  background: "radial-gradient(circle, rgba(26,68,255,0.5) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute"
                style={{
                  bottom: "-10px",
                  left: "-10px",
                  width: "80px",
                  height: "80px",
                  background: "radial-gradient(circle, rgba(26,68,255,0.2) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              />
            </div>
            <div
              className="p-4"
              style={{ background: T.white, borderTop: `1px solid ${T.border}` }}
            >
              <div style={{ fontSize: "13px", fontWeight: 600, color: T.ink, marginBottom: "3px" }}>
                Glow oscuro
              </div>
              <div style={{ fontSize: "12px", color: T.muted }}>
                Para banners CTA, secciones de conversión.
              </div>
            </div>
          </div>
        </div>

        {/* Process flow element */}
        <div
          className="rounded-2xl p-6 mb-6"
          style={{
            background: T.white,
            border: `1px solid ${T.border}`,
          }}
        >
          <div
            style={{
              fontFamily: T.mono,
              fontSize: "10px",
              color: T.muted,
              letterSpacing: "0.08em",
              marginBottom: "20px",
            }}
          >
            ELEMENTO DE PROCESO / FLUJO
          </div>
          <ProcessFlow />
        </div>

        {/* Stat cards */}
        <div
          className="rounded-2xl p-6 mb-6"
          style={{
            background: T.white,
            border: `1px solid ${T.border}`,
          }}
        >
          <div
            style={{
              fontFamily: T.mono,
              fontSize: "10px",
              color: T.muted,
              letterSpacing: "0.08em",
              marginBottom: "16px",
            }}
          >
            TARJETAS DE MÉTRICAS
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <StatCard value="3.4×" label="ROI promedio" trend="+12% este mes" />
            <StatCard value="99.9%" label="Uptime garantizado" trend="SLA cumplido" />
            <StatCard value="−62%" label="Tiempo manual" trend="vs. línea base" />
            <StatCard value="48h" label="Implementación inicial" />
          </div>
        </div>

        {/* Icon system */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: T.white,
            border: `1px solid ${T.border}`,
          }}
        >
          <div
            style={{
              fontFamily: T.mono,
              fontSize: "10px",
              color: T.muted,
              letterSpacing: "0.08em",
              marginBottom: "20px",
            }}
          >
            SISTEMA DE ICONOS — ESTILO OUTLINE 1.5PX
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              { d: "M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z M13 2v7h7", label: "Documento" },
              { d: "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z", label: "Módulo" },
              { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", label: "Seguridad" },
              { d: "M18 20V10 M12 20V4 M6 20v-6", label: "Analytics" },
              { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 11a4 4 0 100-8 4 4 0 000 8z M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75", label: "Equipo" },
              { d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z M12 9v4 M12 17h.01", label: "Alerta" },
              { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22", label: "Dev" },
              { d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", label: "Automatización" },
            ].map((icon) => (
              <div key={icon.label} className="flex flex-col items-center gap-2">
                <div
                  className="flex items-center justify-center rounded-xl"
                  style={{
                    width: "44px",
                    height: "44px",
                    background: T.canvas,
                    border: `1px solid ${T.border}`,
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={T.blue}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={icon.d} />
                  </svg>
                </div>
                <span
                  style={{
                    fontFamily: T.mono,
                    fontSize: "9px",
                    color: T.muted,
                    letterSpacing: "0.05em",
                  }}
                >
                  {icon.label}
                </span>
              </div>
            ))}
            <div
              className="ml-2 flex items-center px-4 rounded-xl self-start"
              style={{
                height: "44px",
                background: T.blueTint,
                border: `1px solid rgba(26,68,255,0.15)`,
                maxWidth: "200px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  color: T.blue,
                  lineHeight: 1.5,
                  fontFamily: T.mono,
                }}
              >
                Stroke 1.5px · Rounded · Color: Electric Blue o Ink
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}