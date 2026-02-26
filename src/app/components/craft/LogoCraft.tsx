import React from "react";
import { C } from "./tokens";
import { SLabel, CCard, KovaLogo, KovaWordmark, ETag } from "./SharedCraft";

const variants = [
  { label: "Principal", bg: C.card, border: C.border, inverted: false, note: "Uso principal, sobre Card o Raised" },
  { label: "Sobre oscuro", bg: C.base, border: C.border, inverted: false, note: "Sobre Base, el contraste más alto" },
  { label: "Ícono solo", bg: C.raised, border: C.border, iconOnly: true, note: "Favicon, app icon, espacio reducido" },
  { label: "Sobre claro", bg: "#F5F3EF", border: "#E0DDD8", light: true, note: "Documentos, propuestas impresas" },
];

export function LogoCraft() {
  return (
    <section style={{ background: C.base, padding: "88px 0", fontFamily: C.inter }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <SLabel
          index="03 — LOGO"
          title="Logotipo"
          sub="El ícono de kova representa dos rombos superpuestos — un loop de automatización. La marca en minúscula proyecta confianza sin arrogancia."
        />

        {/* Variants */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {variants.map((v) => (
            <div
              key={v.label}
              className="rounded-2xl overflow-hidden"
              style={{ border: `1px solid ${v.border}` }}
            >
              <div
                className="flex items-center justify-center py-10"
                style={{ background: v.bg }}
              >
                {v.iconOnly ? (
                  <KovaLogo size={48} />
                ) : v.light ? (
                  // Light version: Ink wordmark
                  <div className="flex items-center gap-2.5">
                    <KovaLogo size={32} />
                    <span
                      style={{
                        fontFamily: C.syne,
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "#0D0C0A",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      kova
                    </span>
                  </div>
                ) : (
                  <KovaWordmark size="md" />
                )}
              </div>
              <div className="p-3" style={{ background: C.card, borderTop: `1px solid ${C.border}` }}>
                <div style={{ fontSize: "12px", fontWeight: 600, color: C.textPrimary, marginBottom: "2px" }}>
                  {v.label}
                </div>
                <div style={{ fontSize: "11px", color: C.textMuted, lineHeight: 1.4 }}>{v.note}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Anatomy */}
        <CCard className="mb-4">
          <div className="p-6 sm:p-8">
            <div style={{ fontFamily: C.mono, fontSize: "10px", color: C.textMuted, letterSpacing: "0.08em", marginBottom: "24px" }}>
              ANATOMÍA DEL ÍCONO
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
              {/* Icon breakdown */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  {/* Shape 1 annotation */}
                  <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
                    {/* BG */}
                    <rect width="180" height="180" rx="40" fill={C.raised} />
                    {/* Shape 1 */}
                    <path d="M52 90L90 52L108 70L70 108L52 90Z" fill={C.ember} />
                    {/* Shape 2 */}
                    <path d="M70 108L108 70L126 88L88 126L70 108Z" fill={C.ember} opacity="0.4" />
                    {/* Annotation: shape 1 */}
                    <line x1="52" y1="90" x2="24" y2="90" stroke={C.ember} strokeWidth="1" strokeDasharray="3 2" />
                    <text x="4" y="94" fontFamily="monospace" fontSize="8" fill={C.ember}>01</text>
                    {/* Annotation: shape 2 */}
                    <line x1="126" y1="88" x2="154" y2="88" stroke={C.textMuted} strokeWidth="1" strokeDasharray="3 2" />
                    <text x="158" y="92" fontFamily="monospace" fontSize="8" fill={C.textMuted}>02</text>
                  </svg>
                </div>
              </div>
              {/* Explanation */}
              <div className="space-y-4">
                {[
                  {
                    n: "01",
                    title: "Forma primaria",
                    desc: "Rombo sólido en Ember. Representa el flujo de entrada — el proceso que llega.",
                    color: C.ember,
                  },
                  {
                    n: "02",
                    title: "Forma secundaria",
                    desc: "Rombo en Ember al 40%. El flujo de salida — el proceso transformado.",
                    color: C.textMuted,
                  },
                  {
                    n: "→",
                    title: "Superposición",
                    desc: "La intersección simboliza automatización: entrada + proceso = salida limpia.",
                    color: C.success,
                  },
                ].map((item) => (
                  <div key={item.n} className="flex items-start gap-3">
                    <span style={{ fontFamily: C.mono, fontSize: "11px", color: item.color, minWidth: "20px", marginTop: "2px" }}>
                      {item.n}
                    </span>
                    <div>
                      <div style={{ fontFamily: C.syne, fontSize: "13px", fontWeight: 700, color: C.textPrimary, marginBottom: "2px" }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: "12px", color: C.textSecondary, lineHeight: 1.5 }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CCard>

        {/* Rules */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CCard>
            <div className="p-5">
              <div style={{ fontFamily: C.mono, fontSize: "10px", color: C.textMuted, letterSpacing: "0.08em", marginBottom: "14px" }}>
                ESPECIFICACIONES
              </div>
              <div className="space-y-3">
                {[
                  ["Espacio libre mínimo", "1× altura del ícono alrededor"],
                  ["Tamaño digital mínimo", "Ícono: 20px · Wordmark: 120px ancho"],
                  ["Tamaño impreso mínimo", "Wordmark: 20mm ancho"],
                  ["Formato preferido", "SVG vectorial / PNG @2x en raster"],
                  ["Fondo ideal", "Base, Raised o Card — fondo oscuro"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-start gap-3 pb-3" style={{ borderBottom: `1px solid ${C.border}` }}>
                    <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: C.ember }} />
                    <div>
                      <div style={{ fontFamily: C.mono, fontSize: "9px", color: C.textMuted, letterSpacing: "0.07em", marginBottom: "1px" }}>
                        {k.toUpperCase()}
                      </div>
                      <div style={{ fontSize: "12px", color: C.textSecondary }}>{v}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CCard>

          <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.border}` }}>
            <div className="px-5 py-3" style={{ background: "rgba(239,68,68,0.06)", borderBottom: `1px solid rgba(239,68,68,0.15)` }}>
              <span style={{ fontFamily: C.mono, fontSize: "10px", color: "#EF4444", letterSpacing: "0.07em" }}>
                USOS INCORRECTOS
              </span>
            </div>
            <div className="p-5 space-y-2.5" style={{ background: C.card }}>
              {[
                "No cambiar el color Ember del ícono",
                "No usar el wordmark en minúsculas distintas a 'kova'",
                "No agregar efectos: sombra, glow, outline externo",
                "No distorsionar proporciones ícono/texto",
                "No colocar sobre fondos sin contraste suficiente",
                "No usar ícono y wordmark como elementos separados externamente",
              ].map((d, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(239,68,68,0.15)" }}
                  >
                    <span style={{ fontSize: "9px", color: "#EF4444", fontWeight: 700 }}>×</span>
                  </div>
                  <span style={{ fontSize: "12px", color: C.textSecondary, lineHeight: 1.5 }}>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
