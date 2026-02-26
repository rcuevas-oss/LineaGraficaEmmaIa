import React from "react";
import { SectionLabel } from "./ColorSystem";
import { LogoMark } from "./BrandHero";

const logoVariants = [
  {
    name: "Principal",
    bg: "#06060A",
    border: "rgba(170,255,0,0.2)",
    textColor: "#F4F3FF",
    accentColor: "#AAFF00",
    desc: "Uso principal sobre fondo oscuro",
  },
  {
    name: "Invertido",
    bg: "#AAFF00",
    border: "transparent",
    textColor: "#06060A",
    accentColor: "#06060A",
    desc: "Sobre fondos claros y acentos",
    inverted: true,
  },
  {
    name: "Monocromático",
    bg: "#0F0F1A",
    border: "rgba(255,255,255,0.1)",
    textColor: "rgba(244,243,255,0.6)",
    accentColor: "rgba(244,243,255,0.6)",
    desc: "Cuando no está disponible el color",
    mono: true,
  },
  {
    name: "Oscuro puro",
    bg: "#1C1C2E",
    border: "rgba(255,255,255,0.06)",
    textColor: "#F4F3FF",
    accentColor: "#F4F3FF",
    desc: "Sobre superficies intermedias",
    monoWhite: true,
  },
];

const incorrectUses = [
  "No usar sobre fondos blancos sin adaptación",
  "No cambiar los colores del logotipo",
  "No distorsionar o escalar de forma no proporcional",
  "No aplicar sombras o efectos no autorizados",
  "No usar el ícono sin el nombre en comunicaciones externas",
  "No rotar el logotipo",
];

export function LogoSection() {
  return (
    <section
      style={{
        background: "#06060A",
        fontFamily: "'Space Grotesk', sans-serif",
        padding: "80px 0",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionLabel label="04" title="Logotipo" />

        {/* Logo variants grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {logoVariants.map((variant) => (
            <div
              key={variant.name}
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div
                className="flex flex-col items-center justify-center gap-4 p-8"
                style={{
                  background: variant.bg,
                  border: `1px solid ${variant.border}`,
                  minHeight: "180px",
                }}
              >
                <LogoMark
                  size="lg"
                  inverted={variant.inverted || variant.mono || variant.monoWhite}
                />
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "22px",
                    fontWeight: 700,
                    color: variant.accentColor,
                    letterSpacing: "-0.03em",
                  }}
                >
                  FLUX
                </div>
              </div>
              <div
                className="p-3"
                style={{ background: "#0F0F1A" }}
              >
                <div
                  style={{
                    color: "#F4F3FF",
                    fontSize: "12px",
                    fontWeight: 600,
                    marginBottom: "2px",
                  }}
                >
                  {variant.name}
                </div>
                <div style={{ fontSize: "11px", color: "#6B6A85" }}>
                  {variant.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sizing rules */}
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
              marginBottom: "24px",
            }}
          >
            — ÁREA DE PROTECCIÓN Y TAMAÑO MÍNIMO
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Clear space */}
            <div>
              <div
                style={{ color: "#6B6A85", fontSize: "12px", marginBottom: "16px" }}
              >
                Espacio de protección = ½ altura del logotipo en todos los lados
              </div>
              <div className="flex items-center justify-center">
                <div
                  className="relative"
                  style={{
                    padding: "30px",
                    border: "1px dashed rgba(170,255,0,0.3)",
                  }}
                >
                  {/* Corner labels */}
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-2"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "9px",
                      color: "#AAFF00",
                      background: "#0F0F1A",
                    }}
                  >
                    X/2
                  </div>
                  <div
                    className="absolute -left-3 top-1/2 -translate-y-1/2 px-2"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "9px",
                      color: "#AAFF00",
                      background: "#0F0F1A",
                      writingMode: "vertical-rl",
                    }}
                  >
                    X/2
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2">
                    <LogoMark size="md" />
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "24px",
                        fontWeight: 700,
                        color: "#F4F3FF",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      FLUX
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <div
                style={{ color: "#6B6A85", fontSize: "12px", marginBottom: "16px" }}
              >
                Tamaño mínimo de uso
              </div>
              <div className="space-y-4">
                {[
                  { label: "Digital", size: "24px de altura", platform: "Ícono de app, favicon" },
                  { label: "Impreso", size: "12mm de altura", platform: "Tarjetas de visita" },
                  { label: "RRSS", size: "Nunca menor a 80px", platform: "Posts, stories" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="flex items-start gap-4 pb-4"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <span
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "9px",
                        color: "#7C3AFF",
                        letterSpacing: "0.1em",
                        marginTop: "2px",
                        minWidth: "60px",
                      }}
                    >
                      {s.label.toUpperCase()}
                    </span>
                    <div>
                      <div style={{ color: "#F4F3FF", fontSize: "13px", fontWeight: 500 }}>
                        {s.size}
                      </div>
                      <div style={{ color: "#6B6A85", fontSize: "11px", marginTop: "2px" }}>
                        {s.platform}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Don'ts */}
        <div
          className="mt-6 p-6"
          style={{
            background: "#0A0A12",
            border: "1px solid rgba(255,77,109,0.15)",
          }}
        >
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.2em",
              color: "#FF4D6D",
              marginBottom: "16px",
            }}
          >
            — USOS INCORRECTOS
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {incorrectUses.map((use, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span style={{ color: "#FF4D6D", fontSize: "16px", lineHeight: 1 }}>×</span>
                <span style={{ fontSize: "12px", color: "rgba(244,243,255,0.55)", lineHeight: 1.5 }}>
                  {use}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
