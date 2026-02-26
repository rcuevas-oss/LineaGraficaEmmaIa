import React from "react";
import { C } from "./tokens";
import { SLabel, CCard, Rule, ETag } from "./SharedCraft";

const palette = [
  { name: "Base", hex: "#0D0C0A", role: "Fondo de página", tag: "BASE" },
  { name: "Raised", hex: "#181613", role: "Superficies elevadas", tag: "RAISED" },
  { name: "Card", hex: "#211E1A", role: "Tarjetas, paneles", tag: "CARD" },
  { name: "Border", hex: "#2D2924", role: "Divisores, bordes", tag: "BORDER" },
  { name: "Ember", hex: "#E8631A", role: "Acento principal de marca", tag: "BRAND" },
  { name: "Ember Bright", hex: "#F07432", role: "Hover, estados activos", tag: "HOVER" },
  { name: "Text 01", hex: "#F5F3EF", role: "Texto principal", tag: "TEXT 01" },
  { name: "Text 02", hex: "#9C9890", role: "Texto secundario", tag: "TEXT 02" },
];

export function ColorCraft() {
  return (
    <section style={{ background: C.base, padding: "88px 0", fontFamily: C.inter }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <SLabel
          index="01 — COLOR"
          title="Sistema de color"
          sub="Un stack oscuro cálido. El ember orange como único acento de marca — legible, energético y casi inexistente en el espacio B2B de automatización."
        />

        {/* Palette grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
          {palette.map((p) => {
            const isLight = ["#F5F3EF", "#9C9890"].includes(p.hex);
            return (
              <div
                key={p.hex}
                className="rounded-xl overflow-hidden"
                style={{ border: `1px solid ${C.border}` }}
              >
                <div style={{ height: "80px", background: p.hex, position: "relative" }}>
                  <span
                    className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded text-xs"
                    style={{
                      fontFamily: C.mono,
                      fontSize: "9px",
                      color: isLight ? "rgba(13,12,10,0.5)" : "rgba(245,243,239,0.4)",
                      background: isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.07)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {p.tag}
                  </span>
                </div>
                <div className="p-3" style={{ background: C.card }}>
                  <div style={{ fontSize: "12px", fontWeight: 600, color: C.textPrimary, marginBottom: "2px" }}>
                    {p.name}
                  </div>
                  <div style={{ fontFamily: C.mono, fontSize: "10px", color: C.ember, marginBottom: "3px" }}>
                    {p.hex}
                  </div>
                  <div style={{ fontSize: "11px", color: C.textMuted, lineHeight: 1.4 }}>
                    {p.role}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Warm dark stack — visual */}
        <CCard className="mb-6">
          <div className="p-5 sm:p-6">
            <div style={{ fontFamily: C.mono, fontSize: "10px", color: C.textMuted, letterSpacing: "0.08em", marginBottom: "20px" }}>
              STACK OSCURO CÁLIDO — ELEVACIÓN DE CAPAS
            </div>
            <div className="flex flex-col gap-2">
              {[
                { label: "Base", hex: "#0D0C0A", note: "Fondo de página" },
                { label: "Raised", hex: "#181613", note: "Secciones, nav" },
                { label: "Card", hex: "#211E1A", note: "Tarjetas" },
                { label: "Overlay", hex: "#2A2620", note: "Modales, dropdowns" },
                { label: "Border", hex: "#2D2924", note: "Siempre sutil" },
              ].map((l, i) => (
                <div key={l.label} className="flex items-center gap-4">
                  <div
                    className="rounded-lg shrink-0"
                    style={{
                      width: `${220 - i * 28}px`,
                      height: "36px",
                      background: l.hex,
                      border: `1px solid ${C.border}`,
                    }}
                  />
                  <div>
                    <span style={{ fontFamily: C.mono, fontSize: "11px", color: C.ember }}>{l.label} </span>
                    <span style={{ fontFamily: C.mono, fontSize: "11px", color: C.textMuted }}>{l.hex} · {l.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CCard>

        {/* Ember usage + combos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Ember showcase */}
          <CCard accent>
            <div className="p-5">
              <div style={{ fontFamily: C.mono, fontSize: "10px", color: C.textMuted, letterSpacing: "0.08em", marginBottom: "16px" }}>
                ACENTO — EMBER ORANGE
              </div>
              <div
                className="flex items-center justify-center py-8 rounded-xl mb-4"
                style={{ background: `linear-gradient(135deg, ${C.ember} 0%, ${C.emberBright} 100%)` }}
              >
                <span style={{ fontFamily: C.syne, fontSize: "36px", fontWeight: 800, color: "white", letterSpacing: "-0.04em" }}>
                  E8631A
                </span>
              </div>
              <div className="space-y-2">
                {[
                  "CTAs primarios, botones de acción",
                  "Líneas de acento, separadores de sección",
                  "Tags de estado, badges, highlights",
                  "Hover states en elementos interactivos",
                ].map((u, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: C.ember }} />
                    <span style={{ fontSize: "12px", color: C.textSecondary }}>{u}</span>
                  </div>
                ))}
              </div>
            </div>
          </CCard>

          {/* Combos */}
          <CCard>
            <div className="p-5">
              <div style={{ fontFamily: C.mono, fontSize: "10px", color: C.textMuted, letterSpacing: "0.08em", marginBottom: "16px" }}>
                COMBINACIONES APROBADAS
              </div>
              <div className="space-y-3">
                {/* Combo 1 */}
                <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: C.ember }}>
                  <span style={{ fontFamily: C.syne, fontSize: "14px", fontWeight: 700, color: "white", letterSpacing: "-0.02em" }}>
                    Botón CTA
                  </span>
                  <div style={{ flex: 1 }} />
                  <span style={{ fontFamily: C.mono, fontSize: "9px", color: "rgba(255,255,255,0.6)" }}>
                    White / Ember
                  </span>
                </div>
                {/* Combo 2 */}
                <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: C.raised, border: `1px solid ${C.border}` }}>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: C.textPrimary, marginBottom: "1px" }}>Título principal</div>
                    <div style={{ fontSize: "11px", color: C.textSecondary }}>Subtítulo secundario</div>
                  </div>
                  <div style={{ flex: 1 }} />
                  <span style={{ fontFamily: C.mono, fontSize: "9px", color: C.textMuted }}>
                    Text 01/02 / Raised
                  </span>
                </div>
                {/* Combo 3 */}
                <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: C.emberDim, border: `1px solid rgba(232,99,26,0.2)` }}>
                  <span style={{ fontFamily: C.mono, fontSize: "11px", color: C.ember }}>STATUS: ACTIVO</span>
                  <div style={{ flex: 1 }} />
                  <span style={{ fontFamily: C.mono, fontSize: "9px", color: C.ember, opacity: 0.6 }}>
                    Ember / Dim
                  </span>
                </div>
                {/* Rule: never */}
                <div className="flex items-start gap-2 pt-2" style={{ borderTop: `1px solid ${C.border}` }}>
                  <span style={{ color: "#EF4444", fontSize: "11px", fontWeight: 700 }}>✗</span>
                  <span style={{ fontSize: "11px", color: C.textMuted, lineHeight: 1.5 }}>
                    Nunca usar Ember como color de texto largo sobre Base — solo para acento corto
                  </span>
                </div>
              </div>
            </div>
          </CCard>
        </div>
      </div>
    </section>
  );
}
