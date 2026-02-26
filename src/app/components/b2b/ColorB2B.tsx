import React from "react";
import { T } from "./tokens";
import { SectionLabel, Divider } from "./SharedB2B";

const palette = [
  {
    name: "Ink",
    hex: "#0D0D10",
    role: "Color primario",
    use: "Textos, encabezados, UI principal",
    tag: "Primary",
    light: false,
  },
  {
    name: "Electric Blue",
    hex: "#1A44FF",
    role: "Acento de marca",
    use: "CTAs, links, elementos activos",
    tag: "Brand",
    light: false,
  },
  {
    name: "Canvas",
    hex: "#F8F7F2",
    role: "Fondo principal",
    use: "Fondo de página, backgrounds",
    tag: "BG Primary",
    light: true,
  },
  {
    name: "White",
    hex: "#FFFFFF",
    role: "Superficies",
    use: "Cards, modales, paneles",
    tag: "Surface",
    light: true,
  },
  {
    name: "Blue Tint",
    hex: "#EEF1FF",
    role: "Fondo de acento",
    use: "Tags, highlights, badges",
    tag: "BG Accent",
    light: true,
  },
  {
    name: "Slate",
    hex: "#64647A",
    role: "Texto secundario",
    use: "Subtítulos, metadata, placeholders",
    tag: "Text 02",
    light: true,
  },
  {
    name: "Muted",
    hex: "#9494A8",
    role: "Texto terciario",
    use: "Captions, etiquetas, ayuda",
    tag: "Text 03",
    light: true,
  },
  {
    name: "Border",
    hex: "#E3E2DB",
    role: "Líneas / separadores",
    use: "Bordes de cards, divisores",
    tag: "Border",
    light: true,
  },
];

const gradients = [
  {
    name: "Brand Gradient",
    css: "linear-gradient(135deg, #1A44FF 0%, #4063FF 100%)",
    desc: "Botones CTA primarios, banners destacados",
    onDark: false,
  },
  {
    name: "Canvas Fade",
    css: "linear-gradient(180deg, #F8F7F2 0%, #FFFFFF 100%)",
    desc: "Transiciones entre secciones",
    onDark: false,
  },
  {
    name: "Blue Glow",
    css: "radial-gradient(circle at 60% 40%, rgba(26,68,255,0.12) 0%, transparent 60%)",
    desc: "Efecto de profundidad sutil en fondos",
    onDark: false,
  },
  {
    name: "Ink Fade",
    css: "linear-gradient(135deg, #0D0D10 0%, #1a1a2e 100%)",
    desc: "Banners oscuros, hero alternativo",
    onDark: true,
  },
];

export function ColorB2B() {
  return (
    <section
      style={{
        background: T.white,
        fontFamily: T.sans,
        padding: "80px 0",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <SectionLabel
          step="02 — Color"
          title="Sistema de color"
          subtitle="Una paleta construida para comunicar claridad y confianza. Sin saturación innecesaria."
        />

        {/* Main palette */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {palette.map((c) => (
            <div
              key={c.hex}
              className="overflow-hidden rounded-xl"
              style={{
                border: `1px solid ${T.border}`,
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              {/* Swatch */}
              <div
                style={{
                  height: "88px",
                  background: c.hex,
                  position: "relative",
                }}
              >
                <span
                  className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded text-xs"
                  style={{
                    fontFamily: T.mono,
                    fontSize: "9px",
                    background: c.light
                      ? "rgba(13,13,16,0.08)"
                      : "rgba(255,255,255,0.15)",
                    color: c.light ? T.slate : "rgba(255,255,255,0.8)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {c.tag}
                </span>
              </div>
              {/* Info */}
              <div className="p-3" style={{ background: T.white }}>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: T.ink,
                    marginBottom: "2px",
                  }}
                >
                  {c.name}
                </div>
                <div
                  style={{
                    fontFamily: T.mono,
                    fontSize: "10px",
                    color: T.blue,
                    marginBottom: "4px",
                  }}
                >
                  {c.hex}
                </div>
                <div style={{ fontSize: "11px", color: T.muted, lineHeight: 1.4 }}>
                  {c.use}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradients */}
        <div className="mt-10">
          <div
            style={{
              fontFamily: T.mono,
              fontSize: "11px",
              color: T.muted,
              letterSpacing: "0.06em",
              marginBottom: "14px",
            }}
          >
            GRADIENTES
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {gradients.map((g) => (
              <div
                key={g.name}
                className="rounded-xl overflow-hidden"
                style={{ border: `1px solid ${T.border}` }}
              >
                <div style={{ height: "64px", background: g.css }} />
                <div className="p-3" style={{ background: T.white }}>
                  <div style={{ fontSize: "12px", fontWeight: 600, color: T.ink, marginBottom: "3px" }}>
                    {g.name}
                  </div>
                  <div style={{ fontSize: "11px", color: T.muted, lineHeight: 1.4 }}>
                    {g.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Color combinations */}
        <div
          className="mt-10 rounded-2xl overflow-hidden"
          style={{ border: `1px solid ${T.border}` }}
        >
          <div className="p-5 sm:p-6" style={{ background: T.canvas }}>
            <div
              style={{
                fontFamily: T.mono,
                fontSize: "11px",
                color: T.muted,
                letterSpacing: "0.06em",
                marginBottom: "16px",
              }}
            >
              COMBINACIONES APROBADAS
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Combo 1 */}
              <div
                className="p-4 rounded-xl"
                style={{
                  background: T.white,
                  border: `1px solid ${T.border}`,
                }}
              >
                <div
                  className="w-full rounded-lg flex items-center justify-center py-3 mb-3"
                  style={{ background: T.blue }}
                >
                  <span
                    style={{
                      color: T.white,
                      fontSize: "13px",
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Botón primario
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: T.mono,
                    fontSize: "10px",
                    color: T.muted,
                  }}
                >
                  White sobre Electric Blue
                </div>
              </div>

              {/* Combo 2 */}
              <div
                className="p-4 rounded-xl"
                style={{
                  background: T.canvas,
                  border: `1px solid ${T.border}`,
                }}
              >
                <div
                  className="mb-3"
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: T.ink,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Texto principal
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: T.slate,
                    lineHeight: 1.6,
                  }}
                >
                  Subtítulo secundario.
                </div>
                <div
                  style={{
                    fontFamily: T.mono,
                    fontSize: "10px",
                    color: T.muted,
                    marginTop: "8px",
                  }}
                >
                  Ink + Slate sobre Canvas
                </div>
              </div>

              {/* Combo 3 */}
              <div
                className="p-4 rounded-xl"
                style={{
                  background: T.ink,
                  border: `1px solid ${T.ink}`,
                }}
              >
                <div
                  className="mb-3"
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: T.white,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Banner oscuro
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.6,
                  }}
                >
                  Para secciones CTA.
                </div>
                <div
                  style={{
                    fontFamily: T.mono,
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.3)",
                    marginTop: "8px",
                  }}
                >
                  White sobre Ink
                </div>
              </div>
            </div>
          </div>

          {/* Rules */}
          <div
            className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-4"
            style={{ background: T.white, borderTop: `1px solid ${T.border}` }}
          >
            {[
              { icon: "✓", text: "Electric Blue siempre acompañado de blanco o Canvas", ok: true },
              { icon: "✓", text: "Ratio de contraste mínimo 4.5:1 en texto sobre fondo", ok: true },
              { icon: "✗", text: "No usar Electric Blue sobre Canvas — contraste insuficiente", ok: false },
            ].map((r, i) => (
              <div key={i} className="flex items-start gap-2">
                <span
                  style={{
                    fontSize: "13px",
                    color: r.ok ? "#16A34A" : "#DC2626",
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  {r.icon}
                </span>
                <span style={{ fontSize: "12px", color: T.slate, lineHeight: 1.5 }}>
                  {r.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
