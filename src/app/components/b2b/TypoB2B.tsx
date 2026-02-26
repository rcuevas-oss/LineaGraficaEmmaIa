import React from "react";
import { T } from "./tokens";
import { SectionLabel } from "./SharedB2B";

const scale = [
  {
    name: "Display",
    weight: 700,
    sampleSize: "clamp(40px, 6vw, 64px)",
    spacing: "-0.04em",
    text: "Procesos que escalan.",
    use: "Hero headlines, portadas",
  },
  {
    name: "H1",
    weight: 700,
    sampleSize: "clamp(28px, 4vw, 40px)",
    spacing: "-0.03em",
    text: "Automatiza. Mide. Crece.",
    use: "Títulos de sección, posts principales",
  },
  {
    name: "H2",
    weight: 600,
    sampleSize: "clamp(20px, 3vw, 28px)",
    spacing: "-0.02em",
    text: "Construido para equipos que escalan.",
    use: "Subtítulos, cards, slides",
  },
  {
    name: "Body Large",
    weight: 400,
    sampleSize: "18px",
    spacing: "-0.005em",
    text: "Diseñamos e implementamos flujos de trabajo automatizados que reducen la fricción y liberan a tu equipo para enfocarse en lo que importa.",
    use: "Texto introductorio, abstracts",
  },
  {
    name: "Body",
    weight: 400,
    sampleSize: "15px",
    spacing: "0",
    text: "Cada integración se construye con la arquitectura adecuada para tu stack, asegurando escalabilidad y mantenimiento a largo plazo.",
    use: "Cuerpo de texto, descripciones",
  },
];

export function TypoB2B() {
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
          step="03 — Tipografía"
          title="Sistema tipográfico"
          subtitle="DM Sans para comunicación humana y directa. DM Mono para contexto técnico y datos."
        />

        {/* Font families */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div
            className="p-6 rounded-2xl"
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
              TIPOGRAFÍA PRINCIPAL
            </div>
            <div
              style={{
                fontFamily: T.sans,
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 700,
                color: T.ink,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: "12px",
              }}
            >
              DM Sans
            </div>
            <p style={{ fontSize: "14px", color: T.slate, lineHeight: 1.6, marginBottom: "16px" }}>
              Geométrica y humanista. Ideal para marcas que necesitan transmitir
              confianza sin frialdad. Excelente legibilidad en pantalla.
            </p>
            <div className="flex flex-wrap gap-2">
              {[300, 400, 500, 600, 700].map((w) => (
                <span
                  key={w}
                  className="px-3 py-1 rounded-full"
                  style={{
                    fontFamily: T.sans,
                    fontWeight: w,
                    fontSize: "12px",
                    color: T.ink,
                    background: T.canvas,
                    border: `1px solid ${T.border}`,
                  }}
                >
                  {w}
                </span>
              ))}
            </div>
            <div
              className="mt-4 pt-4 flex gap-1"
              style={{ borderTop: `1px solid ${T.border}` }}
            >
              <span style={{ fontSize: "22px", fontFamily: T.sans, fontWeight: 700, color: T.ink }}>Aa</span>
              <span style={{ fontSize: "22px", fontFamily: T.sans, fontWeight: 400, color: T.slate, marginLeft: "8px" }}>Bb Cc Dd Ee Ff 0123</span>
            </div>
          </div>

          <div
            className="p-6 rounded-2xl"
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
              TIPOGRAFÍA TÉCNICA
            </div>
            <div
              style={{
                fontFamily: T.mono,
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 500,
                color: T.ink,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                marginBottom: "12px",
              }}
            >
              DM Mono
            </div>
            <p style={{ fontSize: "14px", color: T.slate, lineHeight: 1.6, marginBottom: "16px" }}>
              Para métricas, tags, etiquetas de estado, código y cualquier elemento
              que necesite diferenciarse visualmente como dato técnico.
            </p>
            <div className="flex flex-wrap gap-2">
              {[300, 400, 500].map((w) => (
                <span
                  key={w}
                  className="px-3 py-1 rounded-full"
                  style={{
                    fontFamily: T.mono,
                    fontWeight: w,
                    fontSize: "12px",
                    color: T.blue,
                    background: T.blueTint,
                    border: `1px solid rgba(26,68,255,0.15)`,
                  }}
                >
                  {w}
                </span>
              ))}
            </div>
            <div
              className="mt-4 pt-4"
              style={{ borderTop: `1px solid ${T.border}` }}
            >
              <span
                style={{
                  fontFamily: T.mono,
                  fontSize: "14px",
                  color: T.blue,
                  display: "block",
                }}
              >
                status: active · nodes: 48 · uptime: 99.9%
              </span>
            </div>
          </div>
        </div>

        {/* Scale */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: `1px solid ${T.border}` }}
        >
          <div
            className="px-6 py-3"
            style={{
              background: T.canvas,
              borderBottom: `1px solid ${T.border}`,
            }}
          >
            <span
              style={{
                fontFamily: T.mono,
                fontSize: "10px",
                color: T.muted,
                letterSpacing: "0.08em",
              }}
            >
              ESCALA TIPOGRÁFICA
            </span>
          </div>
          <div style={{ background: T.white }}>
            {scale.map((s, i) => (
              <div
                key={s.name}
                className="flex flex-col sm:flex-row sm:items-start gap-4 px-6 py-6"
                style={{
                  borderBottom:
                    i < scale.length - 1 ? `1px solid ${T.border}` : "none",
                }}
              >
                <div className="sm:w-32 shrink-0">
                  <div
                    style={{
                      fontFamily: T.mono,
                      fontSize: "10px",
                      color: T.blue,
                      letterSpacing: "0.06em",
                      marginBottom: "4px",
                    }}
                  >
                    {s.name.toUpperCase()}
                  </div>
                  <div style={{ fontSize: "11px", color: T.muted }}>
                    {s.use}
                  </div>
                </div>
                <div className="flex-1">
                  <div
                    style={{
                      fontFamily: T.sans,
                      fontSize: s.sampleSize,
                      fontWeight: s.weight,
                      color: T.ink,
                      letterSpacing: s.spacing,
                      lineHeight: 1.2,
                    }}
                  >
                    {s.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mono examples */}
        <div
          className="mt-4 rounded-2xl overflow-hidden"
          style={{ border: `1px solid ${T.border}` }}
        >
          <div
            className="px-6 py-3"
            style={{
              background: T.ink,
            }}
          >
            <span
              style={{
                fontFamily: T.mono,
                fontSize: "10px",
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.08em",
              }}
            >
              CASOS DE USO — DM MONO
            </span>
          </div>
          <div
            className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4"
            style={{ background: T.ink }}
          >
            {[
              {
                type: "Métricas",
                examples: ["↑ 340% ROI", "99.9% uptime", "2.3s avg. response"],
              },
              {
                type: "Tags / Labels",
                examples: ["AUTOMATIZADO", "EN PRODUCCIÓN", "API ACTIVA"],
              },
              {
                type: "Datos técnicos",
                examples: ["v2.4.1 stable", "POST /api/flows", "node_env=prod"],
              },
            ].map((g) => (
              <div key={g.type}>
                <div
                  style={{
                    fontFamily: T.mono,
                    fontSize: "9px",
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "0.1em",
                    marginBottom: "10px",
                  }}
                >
                  {g.type.toUpperCase()}
                </div>
                <div className="space-y-2">
                  {g.examples.map((ex, j) => (
                    <div
                      key={j}
                      style={{
                        fontFamily: T.mono,
                        fontSize: "13px",
                        color:
                          g.type === "Tags / Labels"
                            ? T.blue
                            : g.type === "Métricas"
                            ? "#22C55E"
                            : "rgba(255,255,255,0.7)",
                      }}
                    >
                      {ex}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
