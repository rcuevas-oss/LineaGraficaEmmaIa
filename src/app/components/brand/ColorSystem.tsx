import React from "react";

const palette = [
  {
    name: "Void",
    hex: "#06060A",
    role: "Fondo principal",
    usage: "Backgrounds, bases",
    light: false,
    tag: "PRIMARY BG",
  },
  {
    name: "Surface",
    hex: "#0F0F1A",
    role: "Superficies / Cards",
    usage: "Cards, modales, overlays",
    light: false,
    tag: "SURFACE",
  },
  {
    name: "Flux Green",
    hex: "#AAFF00",
    role: "Acento primario",
    usage: "CTAs, iconos activos, highlights",
    light: true,
    tag: "ACCENT 01",
  },
  {
    name: "Void Violet",
    hex: "#7C3AFF",
    role: "Acento secundario",
    usage: "Gradientes, énfasis, hovers",
    light: false,
    tag: "ACCENT 02",
  },
  {
    name: "Ghost White",
    hex: "#F4F3FF",
    role: "Texto principal",
    usage: "Headlines, texto primario",
    light: true,
    tag: "TEXT 01",
  },
  {
    name: "Mist",
    hex: "#6B6A85",
    role: "Texto secundario",
    usage: "Subtítulos, metadata, labels",
    light: false,
    tag: "TEXT 02",
  },
  {
    name: "Wire",
    hex: "#1C1C2E",
    role: "Bordes / Líneas",
    usage: "Divisores, bordes, grids",
    light: false,
    tag: "BORDER",
  },
  {
    name: "Signal",
    hex: "#FF4D6D",
    role: "Error / Alerta",
    usage: "Estados críticos, errores",
    light: false,
    tag: "ALERT",
  },
];

const gradients = [
  {
    name: "Plasma",
    css: "linear-gradient(135deg, #AAFF00 0%, #7C3AFF 100%)",
    desc: "Uso en hero banners y CTAs destacados",
  },
  {
    name: "Deep Tunnel",
    css: "linear-gradient(180deg, #0F0F1A 0%, #06060A 100%)",
    desc: "Fondos de cards y secciones",
  },
  {
    name: "Void Glow",
    css: "radial-gradient(circle at 30% 50%, rgba(124,58,255,0.4) 0%, #06060A 70%)",
    desc: "Efectos de profundidad, overlays",
  },
  {
    name: "Electric",
    css: "linear-gradient(90deg, #AAFF00 0%, rgba(170,255,0,0) 100%)",
    desc: "Líneas de énfasis, barras decorativas",
  },
];

export function ColorSystem() {
  return (
    <section
      style={{
        background: "#06060A",
        fontFamily: "'Space Grotesk', sans-serif",
        padding: "80px 0",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionLabel label="02" title="Sistema de Color" />

        {/* Main palette */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
          {palette.map((color) => (
            <div
              key={color.hex}
              className="group cursor-pointer"
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                style={{
                  height: "100px",
                  background: color.hex,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="absolute top-2 right-2 px-2 py-1"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "8px",
                    letterSpacing: "0.1em",
                    background: "rgba(0,0,0,0.5)",
                    color: "#AAFF00",
                  }}
                >
                  {color.tag}
                </div>
                {/* Grid overlay for void/surface */}
                {(color.hex === "#06060A" || color.hex === "#0F0F1A") && (
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `linear-gradient(rgba(170,255,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(170,255,0,0.5) 1px, transparent 1px)`,
                      backgroundSize: "20px 20px",
                    }}
                  />
                )}
              </div>
              <div
                className="p-3"
                style={{ background: "#0F0F1A" }}
              >
                <div
                  style={{
                    color: "#F4F3FF",
                    fontSize: "13px",
                    fontWeight: 600,
                    marginBottom: "2px",
                  }}
                >
                  {color.name}
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "10px",
                    color: "#AAFF00",
                    marginBottom: "4px",
                  }}
                >
                  {color.hex}
                </div>
                <div
                  style={{ fontSize: "11px", color: "#6B6A85", lineHeight: 1.4 }}
                >
                  {color.usage}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradients */}
        <div className="mt-12">
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.2em",
              color: "#7C3AFF",
              marginBottom: "16px",
            }}
          >
            — GRADIENTES DEL SISTEMA
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {gradients.map((g) => (
              <div
                key={g.name}
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  style={{ height: "70px", background: g.css }}
                />
                <div className="p-3" style={{ background: "#0F0F1A" }}>
                  <div
                    style={{
                      color: "#F4F3FF",
                      fontSize: "12px",
                      fontWeight: 600,
                      marginBottom: "4px",
                    }}
                  >
                    {g.name}
                  </div>
                  <div style={{ fontSize: "11px", color: "#6B6A85", lineHeight: 1.4 }}>
                    {g.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Color usage rules */}
        <div
          className="mt-12 p-6"
          style={{
            background: "#0F0F1A",
            border: "1px solid rgba(170,255,0,0.15)",
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
            — REGLAS DE USO
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                rule: "No más de 2 acentos por pieza gráfica.",
                icon: "◈",
              },
              {
                rule: "Flux Green siempre sobre fondos oscuros. Nunca sobre blanco.",
                icon: "◈",
              },
              {
                rule: "El fondo principal (#06060A) no puede ser sustituido por negro puro.",
                icon: "◈",
              },
            ].map((r, i) => (
              <div key={i} className="flex gap-3">
                <span style={{ color: "#7C3AFF", fontSize: "16px", marginTop: "1px" }}>
                  {r.icon}
                </span>
                <p
                  style={{
                    color: "rgba(244,243,255,0.6)",
                    fontSize: "13px",
                    lineHeight: 1.6,
                  }}
                >
                  {r.rule}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "11px",
          color: "#AAFF00",
          letterSpacing: "0.2em",
        }}
      >
        /{label}
      </span>
      <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
      <h2
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(22px, 3vw, 32px)",
          fontWeight: 700,
          color: "#F4F3FF",
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>
    </div>
  );
}
