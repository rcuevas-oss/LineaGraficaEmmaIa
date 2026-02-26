import React from "react";
import { T } from "./tokens";
import { SectionLabel, NexoWordmark, NexoLogo } from "./SharedB2B";

const variants = [
  {
    name: "Principal",
    bg: T.white,
    border: T.border,
    desc: "Fondo blanco o Canvas. Uso prioritario.",
    inverted: false,
  },
  {
    name: "Sobre oscuro",
    bg: T.ink,
    border: "transparent",
    desc: "Sobre fondos Ink o banners oscuros.",
    inverted: true,
  },
  {
    name: "Sobre azul",
    bg: T.blue,
    border: "transparent",
    desc: "Sobre fondos del color de marca.",
    invertedBlue: true,
  },
  {
    name: "Solo ícono",
    bg: T.canvas,
    border: T.border,
    desc: "Favicons, apps, espacios reducidos.",
    iconOnly: true,
  },
];

export function LogoB2B() {
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
          step="04 — Logo"
          title="Logotipo"
          subtitle="El logotipo de nexo combina un ícono geométrico que evoca la letra N con un wordmark limpio y legible."
        />

        {/* Variants */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {variants.map((v) => (
            <div
              key={v.name}
              className="rounded-xl overflow-hidden"
              style={{ border: `1px solid ${T.border}` }}
            >
              <div
                className="flex items-center justify-center py-10"
                style={{ background: v.bg }}
              >
                {v.iconOnly ? (
                  <NexoLogo size={44} />
                ) : v.invertedBlue ? (
                  <NexoWordmark size="md" inverted />
                ) : (
                  <NexoWordmark size="md" inverted={v.inverted} />
                )}
              </div>
              <div
                className="p-3"
                style={{ background: T.white, borderTop: `1px solid ${T.border}` }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: T.ink,
                    marginBottom: "2px",
                  }}
                >
                  {v.name}
                </div>
                <div style={{ fontSize: "11px", color: T.muted }}>{v.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Anatomy */}
        <div
          className="rounded-2xl p-6 sm:p-8 mb-6"
          style={{
            background: T.canvas,
            border: `1px solid ${T.border}`,
          }}
        >
          <div
            style={{
              fontFamily: T.mono,
              fontSize: "10px",
              color: T.muted,
              letterSpacing: "0.08em",
              marginBottom: "24px",
            }}
          >
            ANATOMÍA DEL LOGOTIPO
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-10">
            {/* Visual */}
            <div className="flex-1 flex items-center justify-center py-6">
              <div className="relative">
                <NexoWordmark size="lg" />
                {/* Annotation lines */}
                <div
                  className="absolute"
                  style={{
                    top: "-20px",
                    left: "0",
                    width: "40px",
                    height: "1px",
                    background: T.blue,
                    opacity: 0.5,
                  }}
                />
                <div
                  className="absolute"
                  style={{
                    top: "-28px",
                    left: "0",
                    fontFamily: T.mono,
                    fontSize: "9px",
                    color: T.blue,
                  }}
                >
                  ícono
                </div>
                <div
                  className="absolute"
                  style={{
                    top: "-20px",
                    left: "52px",
                    right: "0",
                    height: "1px",
                    background: T.slate,
                    opacity: 0.5,
                  }}
                />
                <div
                  className="absolute"
                  style={{
                    top: "-28px",
                    left: "56px",
                    fontFamily: T.mono,
                    fontSize: "9px",
                    color: T.slate,
                  }}
                >
                  wordmark
                </div>
              </div>
            </div>

            {/* Rules */}
            <div className="flex-1">
              <div className="space-y-4">
                {[
                  {
                    label: "Espacio mínimo",
                    value: "1× altura del ícono en todos los lados",
                  },
                  {
                    label: "Tamaño mínimo digital",
                    value: "120px de ancho total",
                  },
                  {
                    label: "Tamaño mínimo impreso",
                    value: "25mm de ancho total",
                  },
                  {
                    label: "Relación ícono / texto",
                    value: "Siempre proporcional, nunca por separado en externo",
                  },
                ].map((r) => (
                  <div
                    key={r.label}
                    className="flex items-start gap-3 pb-4"
                    style={{ borderBottom: `1px solid ${T.border}` }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                      style={{ background: T.blue }}
                    />
                    <div>
                      <div
                        style={{
                          fontFamily: T.mono,
                          fontSize: "10px",
                          color: T.muted,
                          marginBottom: "2px",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {r.label.toUpperCase()}
                      </div>
                      <div style={{ fontSize: "13px", color: T.ink }}>
                        {r.value}
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
          className="rounded-2xl overflow-hidden"
          style={{ border: `1px solid ${T.border}` }}
        >
          <div
            className="px-6 py-3 flex items-center gap-2"
            style={{ background: "#FEF2F2", borderBottom: `1px solid #FECACA` }}
          >
            <span
              style={{
                fontFamily: T.mono,
                fontSize: "10px",
                color: "#DC2626",
                letterSpacing: "0.08em",
              }}
            >
              USOS INCORRECTOS
            </span>
          </div>
          <div className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" style={{ background: T.white }}>
            {[
              "No estirar ni distorsionar el logotipo",
              "No cambiar el color del ícono independientemente",
              "No aplicar sombras, efectos o contornos",
              "No usar sobre fondos con bajo contraste",
              "No rotar ni inclinar ningún elemento",
              "No recrear el ícono con otras fuentes o formas",
            ].map((d, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div
                  className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "#FEE2E2" }}
                >
                  <span style={{ fontSize: "10px", color: "#DC2626", fontWeight: 700 }}>×</span>
                </div>
                <span style={{ fontSize: "13px", color: T.slate, lineHeight: 1.5 }}>
                  {d}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
