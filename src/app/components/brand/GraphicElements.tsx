import React from "react";
import { SectionLabel } from "./ColorSystem";

export function FlowPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Nodes */}
      {[
        [40, 150], [120, 80], [120, 220], [200, 150],
        [280, 80], [280, 220], [360, 150],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="8" fill="#0F0F1A" stroke="#AAFF00" strokeWidth="1.5" />
          <circle cx={x} cy={y} r="3" fill="#AAFF00" />
        </g>
      ))}
      {/* Connections */}
      {[
        [40, 150, 120, 80],
        [40, 150, 120, 220],
        [120, 80, 200, 150],
        [120, 220, 200, 150],
        [200, 150, 280, 80],
        [200, 150, 280, 220],
        [280, 80, 360, 150],
        [280, 220, 360, 150],
      ].map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={i % 2 === 0 ? "#AAFF00" : "#7C3AFF"}
          strokeWidth="1"
          strokeOpacity="0.6"
          strokeDasharray={i % 3 === 0 ? "4 4" : "none"}
        />
      ))}
      {/* Active pulse rings */}
      <circle cx="200" cy="150" r="16" stroke="#AAFF00" strokeWidth="1" strokeOpacity="0.3" fill="none" />
      <circle cx="200" cy="150" r="24" stroke="#AAFF00" strokeWidth="1" strokeOpacity="0.15" fill="none" />
    </svg>
  );
}

export function CircuitPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Grid lines */}
      {[0, 40, 80, 120, 160, 200].map((v) => (
        <g key={v}>
          <line x1={v} y1="0" x2={v} y2="200" stroke="rgba(170,255,0,0.1)" strokeWidth="0.5" />
          <line x1="0" y1={v} x2="200" y2={v} stroke="rgba(170,255,0,0.1)" strokeWidth="0.5" />
        </g>
      ))}
      {/* Circuit traces */}
      <path d="M20 100 H60 V60 H100 V100 H140 V140 H180" stroke="#AAFF00" strokeWidth="1.5" fill="none" strokeOpacity="0.7" />
      <path d="M100 20 V60 M100 140 V180" stroke="#7C3AFF" strokeWidth="1.5" strokeOpacity="0.7" />
      <path d="M20 60 H60 M140 60 H180" stroke="#AAFF00" strokeWidth="1" strokeOpacity="0.4" />
      {/* Nodes */}
      {[[60, 60], [100, 60], [100, 100], [140, 100], [140, 140], [100, 140]].map(([x, y], i) => (
        <g key={i}>
          <rect x={x - 5} y={y - 5} width="10" height="10" fill="#0F0F1A" stroke="#AAFF00" strokeWidth="1" transform={`rotate(45 ${x} ${y})`} />
        </g>
      ))}
      {/* Corner marks */}
      <rect x="0" y="0" width="8" height="8" fill="#AAFF00" />
      <rect x="192" y="0" width="8" height="8" fill="#7C3AFF" />
      <rect x="0" y="192" width="8" height="8" fill="#7C3AFF" />
      <rect x="192" y="192" width="8" height="8" fill="#AAFF00" />
    </svg>
  );
}

export function DiagonalStripe({ className = "" }: { className?: string }) {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      className={className}
    >
      {[0, 20, 40, 60, 80, 100, 120, 140].map((offset, i) => (
        <line
          key={i}
          x1={offset - 60}
          y1="0"
          x2={offset + 60}
          y2="120"
          stroke={i % 2 === 0 ? "#AAFF00" : "#7C3AFF"}
          strokeWidth={i % 2 === 0 ? "1.5" : "0.5"}
          strokeOpacity={i % 2 === 0 ? "0.6" : "0.3"}
        />
      ))}
    </svg>
  );
}

const elements = [
  {
    name: "Nodo de flujo",
    desc: "Visualiza conexiones y procesos automatizados",
    preview: "flow",
  },
  {
    name: "Trama de circuito",
    desc: "Patrón de fondo técnico y estructurado",
    preview: "circuit",
  },
  {
    name: "Líneas diagonales",
    desc: "Elemento de textura y dinamismo",
    preview: "diagonal",
  },
  {
    name: "Grid base",
    desc: "Cuadrícula de referencia estructural",
    preview: "grid",
  },
];

export function GraphicElements() {
  return (
    <section
      style={{
        background: "#08080E",
        fontFamily: "'Space Grotesk', sans-serif",
        padding: "80px 0",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionLabel label="05" title="Elementos Gráficos" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {elements.map((el) => (
            <div
              key={el.name}
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div
                className="flex items-center justify-center overflow-hidden"
                style={{
                  background: "#0A0A12",
                  height: "180px",
                }}
              >
                {el.preview === "flow" && <FlowPattern />}
                {el.preview === "circuit" && <CircuitPattern />}
                {el.preview === "diagonal" && <DiagonalStripe />}
                {el.preview === "grid" && (
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(170,255,0,0.2) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(170,255,0,0.2) 1px, transparent 1px),
                        linear-gradient(rgba(124,58,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(124,58,255,0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: "40px 40px, 40px 40px, 10px 10px, 10px 10px",
                    }}
                  />
                )}
              </div>
              <div className="p-3" style={{ background: "#0F0F1A" }}>
                <div
                  style={{
                    color: "#F4F3FF",
                    fontSize: "12px",
                    fontWeight: 600,
                    marginBottom: "3px",
                  }}
                >
                  {el.name}
                </div>
                <div style={{ fontSize: "11px", color: "#6B6A85" }}>
                  {el.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pattern combinations */}
        <div
          className="mt-8 p-6 sm:p-8"
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
              color: "#AAFF00",
              marginBottom: "20px",
            }}
          >
            — COMBINACIONES DE FONDO
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Combo 1: Grid + Glow */}
            <div
              className="h-32 relative overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: "#06060A",
                  backgroundImage: `linear-gradient(rgba(170,255,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(170,255,0,0.08) 1px, transparent 1px)`,
                  backgroundSize: "30px 30px",
                }}
              />
              <div
                className="absolute"
                style={{
                  bottom: "-30px",
                  right: "-30px",
                  width: "120px",
                  height: "120px",
                  background: "radial-gradient(circle, rgba(124,58,255,0.4) 0%, transparent 70%)",
                }}
              />
              <div className="absolute bottom-3 left-3">
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "9px",
                    color: "#6B6A85",
                    letterSpacing: "0.1em",
                  }}
                >
                  GRID + GLOW VIOLETA
                </div>
              </div>
            </div>

            {/* Combo 2: Circuit + Green */}
            <div
              className="h-32 relative overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div
                className="absolute inset-0"
                style={{ background: "#06060A" }}
              />
              <CircuitPattern className="absolute inset-0 opacity-50" />
              <div
                className="absolute"
                style={{
                  top: "-20px",
                  left: "-20px",
                  width: "100px",
                  height: "100px",
                  background: "radial-gradient(circle, rgba(170,255,0,0.2) 0%, transparent 70%)",
                }}
              />
              <div className="absolute bottom-3 left-3">
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "9px",
                    color: "#6B6A85",
                    letterSpacing: "0.1em",
                  }}
                >
                  CIRCUITO + GLOW VERDE
                </div>
              </div>
            </div>

            {/* Combo 3: Diagonal + Dark */}
            <div
              className="h-32 relative overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div
                className="absolute inset-0"
                style={{ background: "#0F0F1A" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    -45deg,
                    transparent,
                    transparent 20px,
                    rgba(170,255,0,0.04) 20px,
                    rgba(170,255,0,0.04) 22px
                  )`,
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(to right, #AAFF00, transparent)" }}
              />
              <div className="absolute bottom-3 left-3">
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "9px",
                    color: "#6B6A85",
                    letterSpacing: "0.1em",
                  }}
                >
                  DIAGONAL + LÍNEA BASE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Icon style */}
        <div
          className="mt-6 p-6"
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
              marginBottom: "20px",
            }}
          >
            — ESTILO DE ICONOS
          </div>
          <div className="flex flex-wrap gap-6 items-center">
            {[
              { d: "M4 6h16M4 12h16M4 18h16", label: "Menu" },
              { d: "M13 10V3L4 14h7v7l9-11h-7z", label: "Proceso" },
              { d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", label: "Stack" },
              { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z", label: "Módulo" },
              { d: "M18 20V10M12 20V4M6 20v-6", label: "Data" },
              { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", label: "Seguro" },
            ].map((icon) => (
              <div key={icon.label} className="flex flex-col items-center gap-2">
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    border: "1px solid rgba(170,255,0,0.25)",
                    background: "rgba(170,255,0,0.05)",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#AAFF00"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  >
                    <path d={icon.d} />
                  </svg>
                </div>
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "9px",
                    color: "#6B6A85",
                    letterSpacing: "0.1em",
                  }}
                >
                  {icon.label.toUpperCase()}
                </span>
              </div>
            ))}
            <div
              className="ml-4 p-3"
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)",
                maxWidth: "200px",
              }}
            >
              <p style={{ fontSize: "11px", color: "#6B6A85", lineHeight: 1.6 }}>
                Stroke de 1.5px · Sin relleno · Esquinas cuadradas · Trazo
                simple · Color Flux Green o Ghost White
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
