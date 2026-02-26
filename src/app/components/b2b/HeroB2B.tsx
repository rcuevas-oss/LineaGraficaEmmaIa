import React from "react";
import { T } from "./tokens";
import { NexoWordmark, DotGrid } from "./SharedB2B";

export function HeroB2B() {
  return (
    <section
      style={{
        background: T.canvas,
        fontFamily: T.sans,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <DotGrid opacity={0.35} />

      {/* Blue accent shape top-right */}
      <div
        className="absolute"
        style={{
          top: 0,
          right: 0,
          width: "480px",
          height: "480px",
          background:
            "radial-gradient(circle at 80% 20%, rgba(26,68,255,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      {/* Warm tint bottom left */}
      <div
        className="absolute"
        style={{
          bottom: 0,
          left: 0,
          width: "360px",
          height: "360px",
          background:
            "radial-gradient(circle at 20% 80%, rgba(245,240,232,0.8) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Thin line border at top */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{
          background: `linear-gradient(to right, transparent, ${T.blue}60, transparent)`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 py-24 w-full">
        {/* Top wordmark row */}
        <div className="flex items-center justify-between mb-16">
          <NexoWordmark size="md" />
          <div
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full"
            style={{
              background: T.white,
              border: `1px solid ${T.border}`,
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#22C55E" }}
            />
            <span
              style={{
                fontFamily: T.mono,
                fontSize: "11px",
                color: T.slate,
                letterSpacing: "0.04em",
              }}
            >
              Brand Guidelines — v1.0
            </span>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full"
            style={{
              background: T.blueTint,
              border: `1px solid rgba(26,68,255,0.18)`,
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <rect width="12" height="12" rx="3" fill={T.blue} />
              <path
                d="M3 6l2 2 4-4"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
                fontFamily: T.mono,
                fontSize: "11px",
                color: T.blue,
                letterSpacing: "0.04em",
              }}
            >
              Software & Automation · B2B
            </span>
          </div>

          <h1
            style={{
              fontFamily: T.sans,
              fontSize: "clamp(48px, 7vw, 88px)",
              fontWeight: 700,
              color: T.ink,
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              marginBottom: "24px",
            }}
          >
            La identidad
            <br />
            <span style={{ color: T.blue }}>que genera</span>
            <br />
            confianza.
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: T.slate,
              lineHeight: 1.7,
              fontWeight: 400,
              maxWidth: "520px",
              marginBottom: "40px",
            }}
          >
            Sistema de identidad visual para empresas B2B que necesitan comunicar
            claridad, solidez y capacidad técnica.
          </p>

          {/* Key pillars */}
          <div className="flex flex-wrap gap-3">
            {["Color", "Tipografía", "Logo", "Elementos", "Redes sociales", "Aplicación"].map(
              (p) => (
                <div
                  key={p}
                  className="flex items-center gap-2 px-4 py-2 rounded-md"
                  style={{
                    background: T.white,
                    border: `1px solid ${T.border}`,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: T.blue }}
                  />
                  <span
                    style={{
                      fontSize: "13px",
                      color: T.ink,
                      fontWeight: 500,
                    }}
                  >
                    {p}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Bottom metrics row */}
        <div
          className="mt-20 pt-8 flex flex-wrap gap-8 sm:gap-16"
          style={{ borderTop: `1px solid ${T.border}` }}
        >
          {[
            { num: "7", label: "Secciones del sistema" },
            { num: "2", label: "Familias tipográficas" },
            { num: "6", label: "Plantillas para redes" },
            { num: "1", label: "Identidad cohesiva" },
          ].map((m) => (
            <div key={m.label}>
              <div
                style={{
                  fontFamily: T.sans,
                  fontSize: "28px",
                  fontWeight: 700,
                  color: T.ink,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {m.num}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: T.muted,
                  marginTop: "4px",
                  fontWeight: 400,
                }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
