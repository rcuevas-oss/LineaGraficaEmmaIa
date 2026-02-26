import React from "react";
import { SectionLabel } from "./ColorSystem";

const typeScale = [
  {
    name: "Display",
    sample: "Automatiza el futuro.",
    font: "Space Grotesk",
    weight: 700,
    size: "clamp(48px, 6vw, 80px)",
    spacing: "-0.04em",
    use: "Titulares hero, portadas",
  },
  {
    name: "Headline",
    sample: "Software que trabaja solo.",
    font: "Space Grotesk",
    weight: 600,
    size: "clamp(28px, 4vw, 48px)",
    spacing: "-0.03em",
    use: "Títulos de sección, posts",
  },
  {
    name: "Subheading",
    sample: "Construye sistemas inteligentes.",
    font: "Space Grotesk",
    weight: 500,
    size: "clamp(18px, 2.5vw, 28px)",
    spacing: "-0.01em",
    use: "Subtítulos, descripciones",
  },
  {
    name: "Body",
    sample:
      "Flujo continuo de datos, decisiones y acciones automatizadas que transforman procesos.",
    font: "Space Grotesk",
    weight: 400,
    size: "16px",
    spacing: "0em",
    use: "Texto corrido, captions",
  },
];

const monoExamples = [
  "$ flux init --project automation",
  "STATUS: RUNNING ● NODES: 48",
  "API_KEY=sk_live_••••••7f3a",
  "{ process: 'active', uptime: '99.9%' }",
];

export function TypographySystem() {
  return (
    <section
      style={{
        background: "#08080E",
        fontFamily: "'Space Grotesk', sans-serif",
        padding: "80px 0",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionLabel label="03" title="Tipografía" />

        {/* Font families */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {/* Space Grotesk */}
          <div
            className="p-6"
            style={{
              background: "#0F0F1A",
              border: "1px solid rgba(170,255,0,0.12)",
            }}
          >
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.2em",
                color: "#AAFF00",
                marginBottom: "16px",
              }}
            >
              TIPOGRAFÍA PRIMARIA
            </div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 700,
                color: "#F4F3FF",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Space Grotesk
            </div>
            <div
              className="mt-4"
              style={{ color: "#6B6A85", fontSize: "13px" }}
            >
              Headlines · UI Text · Branding
            </div>
            <div className="flex gap-3 mt-4 flex-wrap">
              {[300, 400, 500, 600, 700].map((w) => (
                <span
                  key={w}
                  className="px-2 py-1"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: w,
                    fontSize: "12px",
                    color: "#F4F3FF",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {w}
                </span>
              ))}
            </div>
          </div>

          {/* Space Mono */}
          <div
            className="p-6"
            style={{
              background: "#0F0F1A",
              border: "1px solid rgba(124,58,255,0.2)",
            }}
          >
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.2em",
                color: "#7C3AFF",
                marginBottom: "16px",
              }}
            >
              TIPOGRAFÍA TÉCNICA
            </div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 700,
                color: "#F4F3FF",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Space Mono
            </div>
            <div
              className="mt-4"
              style={{ color: "#6B6A85", fontSize: "13px" }}
            >
              Código · Labels · Metadata
            </div>
            <div className="flex gap-3 mt-4 flex-wrap">
              {[400, 700].map((w) => (
                <span
                  key={w}
                  className="px-2 py-1"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontWeight: w,
                    fontSize: "12px",
                    color: "#F4F3FF",
                    background: "rgba(124,58,255,0.1)",
                    border: "1px solid rgba(124,58,255,0.2)",
                  }}
                >
                  {w}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Type scale */}
        <div
          className="mt-8 p-6"
          style={{
            background: "#0F0F1A",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.2em",
              color: "#6B6A85",
              marginBottom: "24px",
            }}
          >
            — ESCALA TIPOGRÁFICA
          </div>
          <div className="space-y-8">
            {typeScale.map((t, i) => (
              <div
                key={t.name}
                className="flex flex-col sm:flex-row sm:items-start gap-4"
                style={{
                  paddingBottom: i < typeScale.length - 1 ? "32px" : "0",
                  borderBottom:
                    i < typeScale.length - 1
                      ? "1px solid rgba(255,255,255,0.04)"
                      : "none",
                }}
              >
                <div className="sm:w-28 shrink-0">
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "9px",
                      letterSpacing: "0.15em",
                      color: "#AAFF00",
                      marginBottom: "4px",
                    }}
                  >
                    {t.name.toUpperCase()}
                  </div>
                  <div style={{ fontSize: "11px", color: "#6B6A85" }}>
                    {t.use}
                  </div>
                </div>
                <div className="flex-1">
                  <div
                    style={{
                      fontFamily: `'${t.font}', sans-serif`,
                      fontSize: t.size,
                      fontWeight: t.weight,
                      letterSpacing: t.spacing,
                      color: "#F4F3FF",
                      lineHeight: 1.15,
                    }}
                  >
                    {t.sample}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mono examples */}
        <div
          className="mt-6 p-6"
          style={{
            background: "#0A0A12",
            border: "1px solid rgba(124,58,255,0.2)",
          }}
        >
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.2em",
              color: "#7C3AFF",
              marginBottom: "16px",
            }}
          >
            — USO DE TIPOGRAFÍA TÉCNICA
          </div>
          <div className="space-y-3">
            {monoExamples.map((ex, i) => (
              <div
                key={i}
                className="flex items-center gap-3"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "13px",
                  color: i % 2 === 0 ? "#AAFF00" : "#F4F3FF",
                }}
              >
                <span style={{ color: "#7C3AFF", opacity: 0.6 }}>›</span>
                {ex}
              </div>
            ))}
          </div>
        </div>

        {/* Hierarchy example */}
        <div
          className="mt-6 p-6 sm:p-10"
          style={{
            background: "#06060A",
            border: "1px solid rgba(255,255,255,0.06)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "200px",
              height: "200px",
              background:
                "radial-gradient(circle, rgba(124,58,255,0.12) 0%, transparent 70%)",
            }}
          />
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "9px",
              letterSpacing: "0.2em",
              color: "#AAFF00",
              marginBottom: "12px",
            }}
          >
            EJEMPLO DE JERARQUÍA
          </div>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 700,
              color: "#F4F3FF",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "12px",
            }}
          >
            Procesos que escalan solos.
          </h1>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "16px",
              color: "rgba(244,243,255,0.5)",
              lineHeight: 1.7,
              maxWidth: "500px",
              marginBottom: "20px",
            }}
          >
            Diseñamos flujos de trabajo inteligentes que transforman tareas
            manuales en sistemas que operan de forma autónoma.
          </p>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.1em",
              color: "#AAFF00",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            VER CASOS DE USO
            <span style={{ fontSize: "14px" }}>→</span>
          </div>
        </div>
      </div>
    </section>
  );
}
