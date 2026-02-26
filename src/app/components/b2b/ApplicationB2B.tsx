import React from "react";
import { T } from "./tokens";
import { SectionLabel, NexoWordmark, NexoLogo, Tag, DotGrid } from "./SharedB2B";
import { StatCard, ProcessFlow } from "./ElementsB2B";

// ─── Mock Email ────────────────────────────────────────────────────────────────
function MockEmail() {
  return (
    <div
      className="rounded-2xl overflow-hidden mx-auto"
      style={{
        maxWidth: "520px",
        border: `1px solid ${T.border}`,
        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
      }}
    >
      {/* Header */}
      <div
        className="px-8 py-5 flex items-center justify-between"
        style={{ background: T.canvas, borderBottom: `1px solid ${T.border}` }}
      >
        <NexoWordmark size="md" />
        <div style={{ fontFamily: T.mono, fontSize: "10px", color: T.muted }}>
          hola@nexo.io
        </div>
      </div>
      {/* Blue accent */}
      <div className="h-0.5" style={{ background: T.blue }} />
      {/* Body */}
      <div className="px-8 py-6" style={{ background: T.white }}>
        <Tag color="blue">Reporte mensual · Enero 2026</Tag>
        <h2
          className="mt-4 mb-2"
          style={{
            fontFamily: T.sans,
            fontSize: "22px",
            fontWeight: 700,
            color: T.ink,
            letterSpacing: "-0.025em",
          }}
        >
          Tu sistema procesó 4.820 tareas este mes.
        </h2>
        <p style={{ fontSize: "14px", color: T.slate, lineHeight: 1.7, marginBottom: "20px" }}>
          Aquí un resumen del rendimiento de tus flujos automatizados.
        </p>
        <div className="grid grid-cols-3 gap-3 mb-6">
          <StatCard value="4.8K" label="Tareas procesadas" />
          <StatCard value="99.7%" label="Éxito" trend="+0.2%" />
          <StatCard value="−41h" label="Tiempo ahorrado" />
        </div>
        <div
          className="flex items-center justify-between px-4 py-3 rounded-xl"
          style={{ background: T.blue }}
        >
          <span style={{ fontSize: "13px", fontWeight: 600, color: T.white }}>
            Ver reporte completo
          </span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      {/* Footer */}
      <div
        className="px-8 py-4 text-center"
        style={{ background: T.canvas, borderTop: `1px solid ${T.border}` }}
      >
        <p style={{ fontSize: "12px", color: T.muted }}>
          nexo.io · hola@nexo.io · Dar de baja
        </p>
      </div>
    </div>
  );
}

// ─── Mock Proposal Card ────────────────────────────────────────────────────────
function MockProposal() {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: T.white,
        border: `1px solid ${T.border}`,
        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
      }}
    >
      {/* Header */}
      <div
        className="p-6"
        style={{ background: T.ink, position: "relative", overflow: "hidden" }}
      >
        <div
          className="absolute"
          style={{
            top: "-30px", right: "-30px",
            width: "140px", height: "140px",
            background: "radial-gradient(circle, rgba(26,68,255,0.5) 0%, transparent 70%)",
          }}
        />
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <NexoWordmark size="sm" inverted />
            <span style={{ fontFamily: T.mono, fontSize: "10px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em" }}>
              PROPUESTA COMERCIAL
            </span>
          </div>
          <h3
            style={{
              fontFamily: T.sans,
              fontSize: "20px",
              fontWeight: 700,
              color: T.white,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Automatización de procesos<br />operativos — Proyecto Piloto
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-5">
          <div style={{ fontFamily: T.mono, fontSize: "10px", color: T.muted, letterSpacing: "0.07em", marginBottom: "12px" }}>
            ALCANCE DEL PROYECTO
          </div>
          <div className="space-y-2">
            {[
              "Diagnóstico de procesos (2 semanas)",
              "Diseño de arquitectura de flujos",
              "Desarrollo e integración con CRM",
              "Capacitación y documentación",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: T.blueTint, border: `1px solid rgba(26,68,255,0.2)` }}
                >
                  <span style={{ fontFamily: T.mono, fontSize: "9px", color: T.blue }}>
                    0{i + 1}
                  </span>
                </div>
                <span style={{ fontSize: "13px", color: T.slate }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex items-center justify-between p-4 rounded-xl"
          style={{ background: T.canvas, border: `1px solid ${T.border}` }}
        >
          <div>
            <div style={{ fontFamily: T.mono, fontSize: "10px", color: T.muted, marginBottom: "2px" }}>
              INVERSIÓN TOTAL
            </div>
            <div style={{ fontSize: "22px", fontWeight: 700, color: T.ink, letterSpacing: "-0.03em" }}>
              €4.800
            </div>
          </div>
          <div
            className="px-4 py-2 rounded-xl"
            style={{ background: T.blue }}
          >
            <span style={{ fontSize: "12px", fontWeight: 600, color: T.white }}>
              Aceptar propuesta
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Tone of voice ────────────────────────────────────────────────────────────
function ToneOfVoice() {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ border: `1px solid ${T.border}` }}
    >
      <div
        className="px-6 py-4"
        style={{ background: T.canvas, borderBottom: `1px solid ${T.border}` }}
      >
        <span style={{ fontFamily: T.mono, fontSize: "10px", color: T.muted, letterSpacing: "0.08em" }}>
          VOZ Y TONO DE COMUNICACIÓN
        </span>
      </div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" style={{ background: T.white }}>
        {[
          {
            trait: "Claro",
            color: T.blue,
            desc: "Sin jerga innecesaria. El interlocutor B2B valora la precisión.",
            good: "Reducimos tu proceso de facturación de 3 días a 4 horas.",
            bad: "Nuestras soluciones de automatización RPA de última generación…",
          },
          {
            trait: "Directo",
            color: "#16A34A",
            desc: "Titular = beneficio concreto. No feature, sino impacto.",
            good: "−62% tiempo operativo. Garantizado o devolvemos la diferencia.",
            bad: "Contamos con un equipo especializado en automatización de procesos.",
          },
          {
            trait: "Confiable",
            color: T.ink,
            desc: "Datos reales, no promesas vagas. Casos de clientes con números.",
            good: "3 de cada 4 clientes recuperan la inversión en el primer trimestre.",
            bad: "Muchos clientes han mejorado significativamente sus operaciones.",
          },
          {
            trait: "Humano",
            color: "#9333EA",
            desc: "Técnico pero accesible. No frío ni corporativo.",
            good: "¿Qué tarea te quita más tiempo hoy? Empezamos por ahí.",
            bad: "Procedemos a identificar los nodos de ineficiencia del sistema.",
          },
        ].map((t) => (
          <div key={t.trait}>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3"
              style={{
                background: `${t.color}15`,
                border: `1px solid ${t.color}30`,
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: t.color }} />
              <span style={{ fontSize: "11px", fontWeight: 600, color: t.color }}>
                {t.trait}
              </span>
            </div>
            <p style={{ fontSize: "12px", color: T.slate, lineHeight: 1.6, marginBottom: "10px" }}>
              {t.desc}
            </p>
            <div className="space-y-2">
              <div
                className="p-2 rounded-lg"
                style={{ background: "#F0FDF4", border: "1px solid #BBF7D0" }}
              >
                <span style={{ fontSize: "10px", color: "#16A34A", fontWeight: 700 }}>✓ </span>
                <span style={{ fontSize: "11px", color: "#166534", lineHeight: 1.5 }}>{t.good}</span>
              </div>
              <div
                className="p-2 rounded-lg"
                style={{ background: "#FEF2F2", border: "1px solid #FECACA" }}
              >
                <span style={{ fontSize: "10px", color: "#DC2626", fontWeight: 700 }}>✗ </span>
                <span style={{ fontSize: "11px", color: "#991B1B", lineHeight: 1.5 }}>{t.bad}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main ──────────────────────────────────────────────────────────────────────
export function ApplicationB2B() {
  return (
    <section
      style={{
        background: T.canvas,
        fontFamily: T.sans,
        padding: "80px 0",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <SectionLabel
          step="07 — Aplicación"
          title="Aplicación de la marca"
          subtitle="Ejemplos de la identidad en contextos reales: email, propuestas, y tono de comunicación."
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
