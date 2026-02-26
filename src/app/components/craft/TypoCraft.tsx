import React from "react";
import { C } from "./tokens";
import { SLabel, CCard, ETag } from "./SharedCraft";

const scale = [
  {
    name: "DISPLAY",
    font: C.syne,
    weight: 800,
    size: "clamp(48px, 8vw, 80px)",
    tracking: "-0.045em",
    lh: "0.95",
    text: "Automatiza todo.",
    use: "Hero, portadas",
  },
  {
    name: "H1",
    font: C.syne,
    weight: 800,
    size: "clamp(32px, 5vw, 48px)",
    tracking: "-0.035em",
    lh: "1.05",
    text: "Procesos que escalan solos.",
    use: "Títulos de sección",
  },
  {
    name: "H2",
    font: C.syne,
    weight: 700,
    size: "clamp(22px, 3vw, 30px)",
    tracking: "-0.025em",
    lh: "1.15",
    text: "Menos fricción. Más resultado.",
    use: "Subtítulos, posts",
  },
  {
    name: "BODY LG",
    font: C.inter,
    weight: 400,
    size: "17px",
    tracking: "-0.005em",
    lh: "1.7",
    text: "Diseñamos e implementamos flujos que eliminan el trabajo repetitivo y liberan a tu equipo para lo que importa.",
    use: "Intro, abstracts",
  },
  {
    name: "BODY",
    font: C.inter,
    weight: 400,
    size: "15px",
    tracking: "0",
    lh: "1.65",
    text: "Cada integración se construye con la arquitectura correcta para tu stack: escalable, mantenible y documentada desde el primer día.",
    use: "Texto general",
  },
];

export function TypoCraft() {
  return (
    <section style={{ background: C.raised, padding: "88px 0", fontFamily: C.inter }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <SLabel
          index="02 — TIPOGRAFÍA"
          title="Sistema tipográfico"
          sub="Syne para impacto y personalidad. Inter para claridad y legibilidad. JetBrains Mono para datos técnicos y credibilidad."
        />

        {/* Font families */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {/* Syne */}
          <CCard accent className="sm:col-span-1">
            <div className="p-6">
              <ETag>DISPLAY</ETag>
              <div
                className="my-5"
                style={{
                  fontFamily: C.syne,
                  fontSize: "52px",
                  fontWeight: 800,
                  color: C.textPrimary,
                  letterSpacing: "-0.05em",
                  lineHeight: 0.9,
                }}
              >
                Syne
              </div>
              <p style={{ fontSize: "13px", color: C.textSecondary, lineHeight: 1.6, marginBottom: "14px" }}>
                Geométrica y expresiva. Construida para titulares de alto impacto con personalidad propia.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[700, 800].map((w) => (
                  <span
                    key={w}
                    className="px-2 py-1 rounded-md"
                    style={{
                      fontFamily: C.syne,
                      fontWeight: w,
                      fontSize: "11px",
                      color: C.textPrimary,
                      background: C.overlay,
                      border: `1px solid ${C.border}`,
                    }}
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>
          </CCard>

          {/* Inter */}
          <CCard className="sm:col-span-1">
            <div className="p-6">
              <ETag variant="muted">CUERPO</ETag>
              <div
                className="my-5"
                style={{
                  fontFamily: C.inter,
                  fontSize: "52px",
                  fontWeight: 600,
                  color: C.textPrimary,
                  letterSpacing: "-0.04em",
                  lineHeight: 0.9,
                }}
              >
                Inter
              </div>
              <p style={{ fontSize: "13px", color: C.textSecondary, lineHeight: 1.6, marginBottom: "14px" }}>
                El estándar de legibilidad digital. Funciona en cualquier tamaño, en cualquier pantalla.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[400, 500, 600, 700].map((w) => (
                  <span
                    key={w}
                    className="px-2 py-1 rounded-md"
                    style={{
                      fontFamily: C.inter,
                      fontWeight: w,
                      fontSize: "11px",
                      color: C.textPrimary,
                      background: C.overlay,
                      border: `1px solid ${C.border}`,
                    }}
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>
          </CCard>

          {/* JetBrains Mono */}
          <CCard className="sm:col-span-1">
            <div className="p-6">
              <ETag variant="success">TÉCNICA</ETag>
              <div
                className="my-5"
                style={{
                  fontFamily: C.mono,
                  fontSize: "34px",
                  fontWeight: 700,
                  color: C.textPrimary,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.0,
                }}
              >
                JetBrains<br />Mono
              </div>
              <p style={{ fontSize: "13px", color: C.textSecondary, lineHeight: 1.6, marginBottom: "14px" }}>
                Para métricas, tags, código y cualquier elemento que deba transmitir datos técnicos.
              </p>
              <div
                className="p-3 rounded-lg"
                style={{ background: C.base, border: `1px solid ${C.border}` }}
              >
                <span style={{ fontFamily: C.mono, fontSize: "11px", color: C.success }}>
                  status: active · uptime: 99.9%
                </span>
              </div>
            </div>
          </CCard>
        </div>

        {/* Scale */}
        <CCard>
          <div
            className="px-6 py-3"
            style={{ borderBottom: `1px solid ${C.border}` }}
          >
            <span style={{ fontFamily: C.mono, fontSize: "10px", color: C.textMuted, letterSpacing: "0.08em" }}>
              ESCALA TIPOGRÁFICA
            </span>
          </div>
          {scale.map((s, i) => (
            <div
              key={s.name}
              className="flex flex-col sm:flex-row sm:items-start gap-4 px-6 py-6"
              style={{ borderBottom: i < scale.length - 1 ? `1px solid ${C.border}` : "none" }}
            >
              <div className="sm:w-28 shrink-0">
                <div style={{ fontFamily: C.mono, fontSize: "10px", color: C.ember, letterSpacing: "0.07em", marginBottom: "3px" }}>
                  {s.name}
                </div>
                <div style={{ fontSize: "11px", color: C.textMuted }}>{s.use}</div>
              </div>
              <div className="flex-1">
                <div
                  style={{
                    fontFamily: s.font,
                    fontSize: s.size,
                    fontWeight: s.weight,
                    color: C.textPrimary,
                    letterSpacing: s.tracking,
                    lineHeight: s.lh,
                  }}
                >
                  {s.text}
                </div>
              </div>
            </div>
          ))}
        </CCard>

        {/* Mono samples */}
        <div
          className="mt-4 rounded-2xl overflow-hidden p-6 grid grid-cols-1 sm:grid-cols-3 gap-6"
          style={{ background: C.base, border: `1px solid ${C.border}` }}
        >
          {[
            {
              label: "MÉTRICAS",
              color: C.ember,
              items: ["↑ 340% ROI", "−62% tiempo", "2.3s latencia"],
            },
            {
              label: "ESTADOS",
              color: C.success,
              items: ["ACTIVO", "EN PRODUCCIÓN", "API CONECTADA"],
            },
            {
              label: "TÉCNICO",
              color: C.textSecondary,
              items: ["v2.4.1 stable", "POST /api/flows", "node: 18.x"],
            },
          ].map((g) => (
            <div key={g.label}>
              <div style={{ fontFamily: C.mono, fontSize: "9px", color: C.textMuted, letterSpacing: "0.1em", marginBottom: "10px" }}>
                {g.label}
              </div>
              <div className="space-y-2">
                {g.items.map((item, j) => (
                  <div key={j} style={{ fontFamily: C.mono, fontSize: "13px", color: g.color }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
