import React from "react";
import { C } from "./tokens";
import { KovaWordmark, ETag } from "./SharedCraft";

export function HeroCraft() {
  return (
    <section
      style={{
        background: C.base,
        fontFamily: C.inter,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ember glow — top right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-120px",
          right: "-80px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle at 70% 30%, rgba(232,99,26,0.14) 0%, transparent 60%)",
        }}
      />
      {/* Warm glow — bottom left */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-80px",
          left: "10%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(232,99,26,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Vertical rule — decorative */}
      <div
        className="absolute hidden lg:block pointer-events-none"
        style={{
          top: 0,
          left: "calc(50% + 240px)",
          width: "1px",
          height: "100%",
          background: `linear-gradient(to bottom, transparent, ${C.border} 20%, ${C.border} 80%, transparent)`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 py-24 w-full">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-20">
          <KovaWordmark size="md" />
          <div
            className="hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-lg"
            style={{
              background: C.raised,
              border: `1px solid ${C.border}`,
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: C.success }} />
            <span
              style={{
                fontFamily: C.mono,
                fontSize: "10px",
                color: C.textMuted,
                letterSpacing: "0.06em",
              }}
            >
              Brand Guidelines · v1.0
            </span>
          </div>
        </div>

        {/* Hero body */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-end">
          <div className="lg:col-span-3">
            <ETag>Software & Automation · B2B</ETag>

            <h1
              className="mt-6"
              style={{
                fontFamily: C.syne,
                fontSize: "clamp(52px, 9vw, 104px)",
                fontWeight: 800,
                color: C.textPrimary,
                letterSpacing: "-0.045em",
                lineHeight: 0.95,
              }}
            >
              Opera{" "}
              <span
                style={{
                  WebkitTextStroke: `1px ${C.ember}`,
                  color: "transparent",
                }}
              >
                sin
              </span>
              <br />
              fricción.
            </h1>

            <p
              className="mt-7"
              style={{
                fontFamily: C.inter,
                fontSize: "17px",
                color: C.textSecondary,
                lineHeight: 1.7,
                maxWidth: "420px",
              }}
            >
              Identidad visual para empresas que automatizan procesos B2B.
              Craft sobre canvas oscuro, energía sobre precisión.
            </p>

            {/* System index */}
            <div className="mt-10 flex flex-wrap gap-2">
              {[
                "01 Color",
                "02 Tipo",
                "03 Logo",
                "04 Elementos",
                "05 Social",
                "06 Aplicación",
              ].map((item) => (
                <div
                  key={item}
                  className="px-3 py-1.5 rounded-lg"
                  style={{
                    fontFamily: C.mono,
                    fontSize: "11px",
                    color: C.textMuted,
                    background: C.raised,
                    border: `1px solid ${C.border}`,
                    letterSpacing: "0.04em",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div className="lg:col-span-2">
            <div
              className="rounded-2xl p-6"
              style={{
                background: C.raised,
                border: `1px solid ${C.border}`,
                borderTopColor: C.ember,
                borderTopWidth: "2px",
              }}
            >
              <div
                style={{
                  fontFamily: C.mono,
                  fontSize: "10px",
                  color: C.textMuted,
                  letterSpacing: "0.08em",
                  marginBottom: "16px",
                }}
              >
                PRINCIPIOS DE MARCA
              </div>
              {[
                { n: "Cálida", d: "Charcoal cálido, no frío azul corporativo." },
                { n: "Directa", d: "Tipografía que habla, patrones que acompañan." },
                { n: "Técnica", d: "Credibilidad sin frases de agencia." },
                { n: "Distintiva", d: "Ember orange — casi nadie lo usa en B2B." },
              ].map((p, i) => (
                <div
                  key={p.n}
                  className="flex items-start gap-3 py-3"
                  style={{
                    borderBottom: i < 3 ? `1px solid ${C.border}` : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: C.mono,
                      fontSize: "10px",
                      color: C.ember,
                      marginTop: "2px",
                      minWidth: "20px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: C.syne,
                        fontSize: "13px",
                        fontWeight: 700,
                        color: C.textPrimary,
                        marginBottom: "2px",
                      }}
                    >
                      {p.n}
                    </div>
                    <div style={{ fontSize: "12px", color: C.textSecondary, lineHeight: 1.5 }}>
                      {p.d}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div
          className="mt-16 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6"
          style={{ borderTop: `1px solid ${C.border}` }}
        >
          {[
            { val: "3", unit: "familias tipo", label: "Syne · Inter · JetBrains" },
            { val: "6", unit: "plantillas sociales", label: "LinkedIn-first" },
            { val: "1", unit: "acento de color", label: "Ember — #E8631A" },
            { val: "∞", unit: "aplicaciones", label: "Sistema extensible" },
          ].map((s) => (
            <div key={s.val}>
              <span
                style={{
                  fontFamily: C.syne,
                  fontSize: "32px",
                  fontWeight: 800,
                  color: C.textPrimary,
                  letterSpacing: "-0.04em",
                }}
              >
                {s.val}
              </span>
              <div
                style={{
                  fontFamily: C.mono,
                  fontSize: "10px",
                  color: C.ember,
                  marginTop: "2px",
                  letterSpacing: "0.06em",
                }}
              >
                {s.unit.toUpperCase()}
              </div>
              <div style={{ fontSize: "11px", color: C.textMuted, marginTop: "2px" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
