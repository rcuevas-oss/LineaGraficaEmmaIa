import React from "react";
import { C } from "./tokens";
import { SLabel, CCard, KovaWordmark, KovaLogo, ETag } from "./SharedCraft";
import { DiagonalAccent, StatBlock, FlowDiagram } from "./ElementsCraft";

// ─── Mock Email ────────────────────────────────────────────────────────────────
function MockEmail() {
  return (
    <div
      className="rounded-2xl overflow-hidden mx-auto"
      style={{
        maxWidth: "520px",
        background: "#F5F3EF",
        border: `1px solid #D8D5CF`,
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      }}
    >
      {/* Ember top bar */}
      <div style={{ height: "3px", background: C.ember }} />

      {/* Header */}
      <div className="px-8 py-5 flex items-center justify-between" style={{ background: "#F5F3EF", borderBottom: `1px solid #E0DDD8` }}>
        <div className="flex items-center gap-2.5">
          <KovaLogo size={28} />
          <span style={{ fontFamily: C.syne, fontSize: "16px", fontWeight: 700, color: "#0D0C0A", letterSpacing: "-0.02em" }}>kova</span>
        </div>
        <span style={{ fontFamily: C.mono, fontSize: "10px", color: "#9C9890" }}>hola@kova.io</span>
      </div>

      {/* Body */}
      <div className="px-8 py-6" style={{ background: "white" }}>
        <ETag>Reporte mensual · Enero 2026</ETag>
        <h2
          className="mt-4 mb-2"
          style={{
            fontFamily: C.syne,
            fontSize: "22px",
            fontWeight: 800,
            color: "#0D0C0A",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
          }}
        >
          Tu sistema procesó 4.820 tareas este mes.
        </h2>
        <p style={{ fontFamily: C.inter, fontSize: "14px", color: "#64615C", lineHeight: 1.7, marginBottom: "20px" }}>
          Aquí el resumen de rendimiento de tus flujos automatizados.
        </p>

        {/* Stats — light version */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { v: "4.8K", l: "Tareas procesadas" },
            { v: "99.7%", l: "Éxito" },
            { v: "−41h", l: "Tiempo ahorrado" },
          ].map((s) => (
            <div
              key={s.l}
              className="p-3 rounded-xl text-center"
              style={{ background: "#F5F3EF", border: `1px solid #E0DDD8`, borderTopColor: C.ember, borderTopWidth: "2px" }}
            >
              <div style={{ fontFamily: C.syne, fontSize: "22px", fontWeight: 800, color: "#0D0C0A", letterSpacing: "-0.04em" }}>
                {s.v}
              </div>
              <div style={{ fontFamily: C.inter, fontSize: "11px", color: "#9C9890", marginTop: "2px" }}>{s.l}</div>
            </div>
          ))}
        </div>

        <div
          className="flex items-center justify-between px-4 py-3 rounded-xl"
          style={{ background: C.ember }}
        >
          <span style={{ fontFamily: C.syne, fontSize: "13px", fontWeight: 700, color: "white" }}>
            Ver reporte completo
          </span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Footer */}
      <div className="px-8 py-4 text-center" style={{ background: "#F5F3EF", borderTop: `1px solid #E0DDD8` }}>
        <p style={{ fontFamily: C.mono, fontSize: "10px", color: "#9C9890" }}>
          kova.io · hola@kova.io · Dar de baja
        </p>
      </div>
    </div>
  );
}

// ─── Mock Proposal ─────────────────────────────────────────────────────────────
function MockProposal() {
  return (
    <CCard accent>
      {/* Dark header */}
      <div className="relative overflow-hidden p-6" style={{ background: C.raised }}>
        <div className="absolute inset-0 pointer-events-none">
          <DiagonalAccent width={520} height={180} color={C.ember} opacity={0.07} />
        </div>
        <div className="relative">
          <div className="flex items-center justify-between mb-5">
            <KovaWordmark size="sm" />
            <span style={{ fontFamily: C.mono, fontSize: "9px", color: C.textMuted, letterSpacing: "0.08em" }}>
              PROPUESTA COMERCIAL
            </span>
          </div>
          <h3
            style={{
              fontFamily: C.syne,
              fontSize: "22px",
              fontWeight: 800,
              color: C.textPrimary,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}
          >
            Automatización de procesos
            <br />
            operativos — Proyecto Piloto
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div style={{ fontFamily: C.mono, fontSize: "10px", color: C.textMuted, letterSpacing: "0.08em", marginBottom: "14px" }}>
          ALCANCE DEL PROYECTO
        </div>
        <div className="space-y-2 mb-6">
          {[
            "Diagnóstico de procesos (2 semanas)",
            "Diseño de arquitectura de flujos",
            "Desarrollo e integración con CRM",
            "Capacitación y documentación",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 py-2.5" style={{ borderBottom: `1px solid ${C.border}` }}>
              <div
                className="flex items-center justify-center rounded-lg shrink-0"
                style={{
                  width: "22px",
                  height: "22px",
                  background: C.emberDim,
                  border: `1px solid rgba(232,99,26,0.2)`,
                }}
              >
                <span style={{ fontFamily: C.mono, fontSize: "9px", color: C.ember }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <span style={{ fontFamily: C.inter, fontSize: "13px", color: C.textSecondary }}>{item}</span>
            </div>
          ))}
        </div>

        <div
          className="flex items-center justify-between p-4 rounded-xl"
          style={{ background: C.raised, border: `1px solid ${C.border}` }}
        >
          <div>
            <div style={{ fontFamily: C.mono, fontSize: "9px", color: C.textMuted, letterSpacing: "0.07em", marginBottom: "2px" }}>
              INVERSIÓN TOTAL
            </div>
            <div style={{ fontFamily: C.syne, fontSize: "24px", fontWeight: 800, color: C.textPrimary, letterSpacing: "-0.04em" }}>
              €4.800
            </div>
          </div>
          <div className="px-4 py-2.5 rounded-xl" style={{ background: C.ember }}>
            <span style={{ fontFamily: C.syne, fontSize: "13px", fontWeight: 700, color: "white" }}>
              Aceptar →
            </span>
          </div>
        </div>
      </div>
    </CCard>
  );
}

// ─── Tone of voice ─────────────────────────────────────────────────────────────
function ToneOfVoice() {
  return (
    <CCard>
      <div className="px-6 py-4" style={{ borderBottom: `1px solid ${C.border}` }}>
        <span style={{ fontFamily: C.mono, fontSize: "10px", color: C.textMuted, letterSpacing: "0.08em" }}>
          VOZ Y TONO DE COMUNICACIÓN
        </span>
      </div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            trait: "Directa",
            color: C.ember,
            desc: "Titular = beneficio. No feature, sino impacto medible.",
            good: "−62% tiempo operativo en 30 días, garantizado.",
            bad: "Contamos con soluciones avanzadas de automatización.",
          },
          {
            trait: "Técnica",
            color: C.success,
            desc: "Usa datos reales. La credibilidad se construye con números.",
            good: "3 de cada 4 clientes recuperan la inversión en Q1.",
            bad: "Muchos clientes han mejorado significativamente.",
          },
          {
            trait: "Humana",
            color: "#60A5FA",
            desc: "Técnico pero accesible. Sin frío corporativo.",
            good: "¿Qué tarea te quita más tiempo hoy? Empezamos ahí.",
            bad: "Procedemos a identificar nodos de ineficiencia.",
          },
          {
            trait: "Segura",
            color: "#C084FC",
            desc: "Confianza sin arrogancia. Sabe lo que hace.",
            good: "No vendemos software. Resolvemos procesos.",
            bad: "Somos líderes en soluciones de automatización RPA.",
          },
        ].map((t) => (
          <div key={t.trait}>
            <div
              className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md mb-3"
              style={{
                background: `${t.color}12`,
                border: `1px solid ${t.color}25`,
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: t.color }} />
              <span style={{ fontFamily: C.syne, fontSize: "12px", fontWeight: 700, color: t.color }}>
                {t.trait}
              </span>
            </div>
            <p style={{ fontFamily: C.inter, fontSize: "12px", color: C.textSecondary, lineHeight: 1.6, marginBottom: "10px" }}>
              {t.desc}
            </p>
            <div className="space-y-2">
              <div className="p-2 rounded-lg" style={{ background: "rgba(74,222,128,0.07)", border: "1px solid rgba(74,222,128,0.15)" }}>
                <span style={{ fontSize: "10px", color: C.success, fontWeight: 700 }}>✓ </span>
                <span style={{ fontFamily: C.inter, fontSize: "11px", color: "rgba(74,222,128,0.8)", lineHeight: 1.5 }}>{t.good}</span>
              </div>
              <div className="p-2 rounded-lg" style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)" }}>
                <span style={{ fontSize: "10px", color: "#EF4444", fontWeight: 700 }}>✗ </span>
                <span style={{ fontFamily: C.inter, fontSize: "11px", color: "rgba(239,68,68,0.7)", lineHeight: 1.5 }}>{t.bad}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CCard>
  );
}

// ─── Main ──────────────────────────────────────────────────────────────────────
export function ApplicationCraft() {
  return (
    <section style={{ background: C.raised, padding: "88px 0", fontFamily: C.inter }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <SLabel
          index="06 — APLICACIÓN"
          title="Aplicación de la marca"
          sub="La identidad en contextos reales: emails, propuestas comerciales y criterios de comunicación."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <MockEmail />
          <MockProposal />
        </div>

        <ToneOfVoice />
      </div>
    </section>
  );
}
