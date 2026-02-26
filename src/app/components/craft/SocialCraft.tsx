import React, { useState } from "react";
import { C } from "./tokens";
import { SLabel, CCard, KovaWordmark, KovaLogo, ETag } from "./SharedCraft";
import { DiagonalAccent, FlowDiagram, StatBlock } from "./ElementsCraft";

// ─── LinkedIn Post — Thought Leadership ───────────────────────────────────────
function LIThought() {
  return (
    <div
      className="rounded-2xl overflow-hidden mx-auto"
      style={{
        maxWidth: "520px",
        background: C.card,
        border: `1px solid ${C.border}`,
        borderTopColor: C.ember,
        borderTopWidth: "2px",
        boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
      }}
    >
      {/* Header */}
      <div className="px-6 pt-5 pb-4 flex items-center gap-3" style={{ borderBottom: `1px solid ${C.border}` }}>
        <KovaLogo size={34} />
        <div>
          <div style={{ fontSize: "14px", fontWeight: 600, color: C.textPrimary, fontFamily: C.syne }}>kova</div>
          <div style={{ fontSize: "11px", color: C.textMuted, fontFamily: C.inter }}>Software & Automation · 2.1K seguidores</div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <ETag>Automatización B2B</ETag>

        <h3
          className="mt-4 mb-3"
          style={{
            fontFamily: C.syne,
            fontSize: "22px",
            fontWeight: 800,
            color: C.textPrimary,
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
          }}
        >
          El 73% del tiempo de tu equipo se pierde en tareas que ya existen herramientas para automatizar.
        </h3>

        <p style={{ fontFamily: C.inter, fontSize: "14px", color: C.textSecondary, lineHeight: 1.7, marginBottom: "20px" }}>
          No es tecnología lo que falta. Es implementación.
          En kova lo resolvemos en menos de 30 días.
        </p>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-3 p-4 rounded-xl mb-4"
          style={{ background: C.raised, border: `1px solid ${C.border}` }}
        >
          {[
            { v: "−62%", l: "Tiempo manual" },
            { v: "3.4×", l: "ROI promedio" },
            { v: "30d", l: "Time to value" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div style={{ fontFamily: C.syne, fontSize: "20px", fontWeight: 800, color: C.ember, letterSpacing: "-0.04em" }}>
                {s.v}
              </div>
              <div style={{ fontFamily: C.inter, fontSize: "10px", color: C.textMuted }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="flex items-center justify-between px-4 py-3 rounded-xl"
          style={{ background: C.ember }}
        >
          <span style={{ fontFamily: C.syne, fontSize: "13px", fontWeight: 700, color: "white" }}>
            Calculadora gratuita de ROI →
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-3 flex items-center justify-between" style={{ borderTop: `1px solid ${C.border}`, background: C.raised }}>
        <span style={{ fontFamily: C.mono, fontSize: "10px", color: C.textMuted }}>kova.io · hola@kova.io</span>
        <KovaWordmark size="sm" />
      </div>
    </div>
  );
}

// ─── LinkedIn Post — Case Study ────────────────────────────────────────────────
function LICaseStudy() {
  return (
    <div
      className="rounded-2xl overflow-hidden mx-auto relative"
      style={{
        maxWidth: "520px",
        background: C.base,
        border: `1px solid ${C.border}`,
        boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
        overflow: "hidden",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <DiagonalAccent width={520} height={320} color={C.ember} opacity={0.05} />
      </div>
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: `linear-gradient(to right, ${C.ember}, transparent)` }}
      />

      <div className="relative p-6">
        <div className="flex items-center justify-between mb-5">
          <ETag>Caso de éxito</ETag>
          <KovaLogo size={28} />
        </div>

        <h3
          style={{
            fontFamily: C.syne,
            fontSize: "28px",
            fontWeight: 800,
            color: C.textPrimary,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            marginBottom: "10px",
          }}
        >
          De 3 días<br />a 4 horas.
        </h3>

        <p style={{ fontFamily: C.inter, fontSize: "14px", color: C.textSecondary, lineHeight: 1.7, marginBottom: "20px" }}>
          Así redujimos el proceso de facturación de una empresa de logística con 200 clientes activos.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {["−87% tiempo", "0 errores manuales", "2 semanas de integración"].map((t) => (
            <div key={t} className="px-2.5 py-1 rounded-lg" style={{ background: C.raised, border: `1px solid ${C.border}` }}>
              <span style={{ fontFamily: C.mono, fontSize: "10px", color: C.textSecondary }}>{t}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4" style={{ borderTop: `1px solid ${C.border}` }}>
          <KovaWordmark size="sm" />
          <span style={{ fontFamily: C.mono, fontSize: "10px", color: C.textMuted }}>kova.io</span>
        </div>
      </div>
    </div>
  );
}

// ─── LinkedIn Banner ────────────────────────────────────────────────────────────
function LIBanner() {
  return (
    <div
      className="w-full relative overflow-hidden rounded-2xl"
      style={{
        aspectRatio: "4/1",
        background: C.base,
        border: `1px solid ${C.border}`,
        minHeight: "80px",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <DiagonalAccent width={1600} height={400} color={C.ember} opacity={0.05} />
      </div>
      <div
        className="absolute"
        style={{
          top: "-40px", right: "15%",
          width: "200px", height: "200px",
          background: `radial-gradient(circle, ${C.ember}20 0%, transparent 65%)`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "2px", background: `linear-gradient(to right, ${C.ember}80, transparent)` }}
      />

      <div className="absolute inset-0 flex items-center px-6 sm:px-10 gap-6">
        <KovaWordmark size="md" />
        <div className="h-6 w-px" style={{ background: C.border }} />
        <div className="hidden sm:block">
          <p style={{ fontFamily: C.inter, fontSize: "13px", color: C.textSecondary }}>
            Software & Automation para empresas B2B
          </p>
          <p style={{ fontFamily: C.mono, fontSize: "10px", color: C.textMuted, marginTop: "2px" }}>
            Flujos · Integraciones · IA aplicada
          </p>
        </div>
        <div style={{ flex: 1 }} />
        <div
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg"
          style={{ background: C.ember }}
        >
          <span style={{ fontFamily: C.syne, fontSize: "12px", fontWeight: 700, color: "white" }}>
            kova.io →
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Instagram Post ────────────────────────────────────────────────────────────
function IGPost({ dark = true }: { dark?: boolean }) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl mx-auto"
      style={{
        width: "100%",
        maxWidth: "380px",
        aspectRatio: "1/1",
        background: dark ? C.base : "#F5F3EF",
        border: `1px solid ${dark ? C.border : "#E0DDD8"}`,
      }}
    >
      {dark && (
        <div className="absolute inset-0 pointer-events-none">
          <DiagonalAccent width={380} height={380} color={C.ember} opacity={0.06} />
        </div>
      )}
      <div
        className="absolute"
        style={{
          top: 0,
          right: 0,
          width: "160px",
          height: "160px",
          background: `radial-gradient(circle at 80% 20%, ${C.ember}25 0%, transparent 65%)`,
        }}
      />
      {/* Top ember line */}
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: C.ember }} />

      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className="flex items-center justify-between">
          <ETag>{dark ? "Dato" : "Proceso"}</ETag>
          <KovaLogo size={28} />
        </div>

        {dark ? (
          <div className="text-center">
            <div
              style={{
                fontFamily: C.syne,
                fontSize: "clamp(60px, 16vw, 76px)",
                fontWeight: 800,
                color: C.textPrimary,
                letterSpacing: "-0.06em",
                lineHeight: 1,
              }}
            >
              3.4<span style={{ color: C.ember }}>×</span>
            </div>
            <p style={{ fontFamily: C.inter, fontSize: "14px", color: C.textSecondary, marginTop: "8px", lineHeight: 1.5 }}>
              de retorno promedio en clientes
              <br />
              que automatizan sus operaciones.
            </p>
          </div>
        ) : (
          <div>
            <h2
              style={{
                fontFamily: C.syne,
                fontSize: "clamp(22px, 6vw, 30px)",
                fontWeight: 800,
                color: "#0D0C0A",
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                marginBottom: "12px",
              }}
            >
              Construye flujos que trabajan mientras duermes.
            </h2>
            <div className="flex gap-2">
              {["RPA", "APIs", "IA"].map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded-md"
                  style={{
                    fontFamily: C.mono,
                    fontSize: "10px",
                    color: C.ember,
                    background: `${C.ember}15`,
                    border: `1px solid ${C.ember}30`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          {dark ? <KovaWordmark size="sm" /> : (
            <div className="flex items-center gap-2">
              <KovaLogo size={20} />
              <span style={{ fontFamily: C.syne, fontSize: "14px", fontWeight: 700, color: "#0D0C0A" }}>kova</span>
            </div>
          )}
          <span style={{ fontFamily: C.mono, fontSize: "10px", color: dark ? C.textMuted : "#9C9890" }}>@kova.studio</span>
        </div>
      </div>
    </div>
  );
}

// ─── Story ────────────────────────────────────────────────────────────────────
function Story() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl mx-auto"
      style={{
        width: "100%",
        maxWidth: "240px",
        aspectRatio: "9/16",
        background: C.base,
        border: `1px solid ${C.border}`,
        boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <DiagonalAccent width={240} height={500} color={C.ember} opacity={0.06} />
      </div>
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: C.ember }}
      />

      <div className="absolute inset-0 flex flex-col justify-between p-5">
        {/* Top */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <KovaWordmark size="sm" />
          </div>
          <ETag>Proceso</ETag>
          <h3
            className="mt-3"
            style={{
              fontFamily: C.syne,
              fontSize: "22px",
              fontWeight: 800,
              color: C.textPrimary,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
            }}
          >
            Cómo lo hacemos en 5 pasos.
          </h3>
        </div>

        {/* Flow */}
        <div>
          <FlowDiagram compact />
        </div>

        {/* Bottom */}
        <div>
          <div className="space-y-2 mb-4">
            {["Sin compromisos", "Resultados en 30 días", "Garantía de ROI"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-md flex items-center justify-center shrink-0"
                  style={{ background: C.emberDim, border: `1px solid rgba(232,99,26,0.2)` }}
                >
                  <span style={{ fontSize: "8px", color: C.ember, fontWeight: 700 }}>✓</span>
                </div>
                <span style={{ fontFamily: C.inter, fontSize: "12px", color: C.textSecondary }}>{item}</span>
              </div>
            ))}
          </div>
          <div
            className="flex items-center justify-center py-2.5 rounded-xl"
            style={{ background: C.ember }}
          >
            <span style={{ fontFamily: C.syne, fontSize: "13px", fontWeight: 700, color: "white" }}>
              Agenda una llamada →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Twitter/X Header ──────────────────────────────────────────────────────────
function TwitterHeader() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl w-full"
      style={{
        aspectRatio: "3/1",
        background: C.base,
        border: `1px solid ${C.border}`,
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <DiagonalAccent width={1600} height={500} color={C.ember} opacity={0.07} />
      </div>
      <div
        className="absolute"
        style={{
          top: "-30px",
          left: "40%",
          width: "220px",
          height: "220px",
          background: `radial-gradient(circle, ${C.ember}15 0%, transparent 65%)`,
        }}
      />

      <div className="absolute inset-0 flex items-center justify-between px-8">
        <div>
          <KovaWordmark size="lg" />
          <p style={{ fontFamily: C.mono, fontSize: "clamp(9px, 1.5vw, 12px)", color: C.textMuted, marginTop: "6px", letterSpacing: "0.06em" }}>
            AUTOMATIZA · INTEGRA · ESCALA
          </p>
        </div>
        <div className="hidden sm:flex flex-col items-end gap-1.5">
          {["RPA", "API", "IA"].map((tag) => (
            <div
              key={tag}
              className="px-3 py-1 rounded-md"
              style={{ fontFamily: C.mono, fontSize: "10px", color: C.ember, background: C.emberDim, border: `1px solid rgba(232,99,26,0.2)` }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{ background: `linear-gradient(to right, ${C.ember}80, transparent)` }}
      />
    </div>
  );
}

// ─── Spec box ──────────────────────────────────────────────────────────────────
function SpecBox({ specs, note }: { specs: string[]; note: string }) {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="p-4 rounded-xl" style={{ background: C.card, border: `1px solid ${C.border}` }}>
        <div style={{ fontFamily: C.mono, fontSize: "10px", color: C.textMuted, letterSpacing: "0.08em", marginBottom: "10px" }}>
          ESPECIFICACIONES
        </div>
        <ul className="space-y-2">
          {specs.map((s, i) => (
            <li key={i} className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: C.ember }} />
              <span style={{ fontSize: "13px", color: C.textSecondary }}>{s}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 rounded-xl" style={{ background: C.card, border: `1px solid ${C.border}` }}>
        <div style={{ fontFamily: C.mono, fontSize: "10px", color: C.textMuted, letterSpacing: "0.08em", marginBottom: "10px" }}>
          CRITERIOS DE USO
        </div>
        <p style={{ fontSize: "13px", color: C.textSecondary, lineHeight: 1.65 }}>{note}</p>
      </div>
    </div>
  );
}

// ─── Main ──────────────────────────────────────────────────────────────────────
type TabId = "li-post" | "li-banner" | "instagram" | "story" | "twitter";

const TABS: { id: TabId; label: string }[] = [
  { id: "li-post", label: "LinkedIn Post" },
  { id: "li-banner", label: "LinkedIn Banner" },
  { id: "instagram", label: "Instagram" },
  { id: "story", label: "Story" },
  { id: "twitter", label: "Twitter / X" },
];

export function SocialCraft() {
  const [tab, setTab] = useState<TabId>("li-post");
  const [liV, setLiV] = useState<1 | 2>(1);
  const [igDark, setIgDark] = useState(true);

  return (
    <section style={{ background: C.base, padding: "88px 0", fontFamily: C.inter }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <SLabel
          index="05 — SOCIAL"
          title="Plantillas para redes"
          sub="LinkedIn como canal principal de conversión B2B. Instagram para refuerzo de marca. Consistencia visual en cada punto de contacto."
        />

        {/* Tab nav */}
        <div className="flex flex-wrap gap-1 mb-0" style={{ borderBottom: `1px solid ${C.border}` }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className="px-4 py-2.5 rounded-t-xl transition-all"
              style={{
                fontFamily: C.inter,
                fontSize: "13px",
                fontWeight: tab === t.id ? 600 : 400,
                color: tab === t.id ? C.ember : C.textMuted,
                background: tab === t.id ? C.emberDim : "transparent",
                border: tab === t.id ? `1px solid rgba(232,99,26,0.2)` : "1px solid transparent",
                borderBottom: "none",
                cursor: "pointer",
                marginBottom: "-1px",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div
          className="rounded-b-2xl rounded-tr-2xl p-6 sm:p-10"
          style={{ background: C.raised, border: `1px solid ${C.border}`, borderTop: "none" }}
        >
          {tab === "li-post" && (
            <div>
              <div className="flex gap-2 mb-6">
                {[{ v: 1 as const, l: "Thought leadership" }, { v: 2 as const, l: "Case study" }].map(({ v, l }) => (
                  <button key={v} onClick={() => setLiV(v)}
                    className="px-4 py-1.5 rounded-lg text-sm"
                    style={{
                      fontFamily: C.inter, fontSize: "12px",
                      fontWeight: liV === v ? 600 : 400,
                      color: liV === v ? "white" : C.ember,
                      background: liV === v ? C.ember : C.emberDim,
                      border: `1px solid ${liV === v ? C.ember : "rgba(232,99,26,0.2)"}`,
                      cursor: "pointer",
                    }}
                  >{l}</button>
                ))}
              </div>
              {liV === 1 ? <LIThought /> : <LICaseStudy />}
              <SpecBox
                specs={["1200 × 627 px (imagen adjunta)", "Ratio 1.91:1 recomendado", "Max 3.000 caracteres en copy"]}
                note="Titular = dato o beneficio concreto. Siempre Syne para el H1 del post. Stats en ember refuerzan credibilidad. CTA claro y una sola acción por post."
              />
            </div>
          )}
          {tab === "li-banner" && (
            <div>
              <LIBanner />
              <SpecBox
                specs={["1584 × 396 px", "Safe zone: 220px derecha (foto de perfil)", "JPG o PNG < 8MB"]}
                note="Logo + tagline siempre en zona izquierda. Diagonal pattern como fondo sutil. Botón CTA a la derecha cuando haya espacio."
              />
            </div>
          )}
          {tab === "instagram" && (
            <div>
              <div className="flex gap-2 mb-6">
                {[{ l: "Dark (datos)", v: true }, { l: "Claro (proceso)", v: false }].map(({ l, v }) => (
                  <button key={l} onClick={() => setIgDark(v)}
                    className="px-4 py-1.5 rounded-lg"
                    style={{
                      fontFamily: C.inter, fontSize: "12px",
                      fontWeight: igDark === v ? 600 : 400,
                      color: igDark === v ? "white" : C.ember,
                      background: igDark === v ? C.ember : C.emberDim,
                      border: `1px solid ${igDark === v ? C.ember : "rgba(232,99,26,0.2)"}`,
                      cursor: "pointer",
                    }}
                  >{l}</button>
                ))}
              </div>
              <IGPost dark={igDark} />
              <SpecBox
                specs={["1080 × 1080 px", "Ratio 1:1", "Alta legibilidad en móvil"]}
                note="Dark para estadísticas de impacto. Claro para contenido conceptual o educativo. Siempre línea Ember en el borde superior."
              />
            </div>
          )}
          {tab === "story" && (
            <div>
              <Story />
              <SpecBox
                specs={["1080 × 1920 px", "Ratio 9:16", "Safe zone: 250px top y bottom"]}
                note="Estructura diagonal + dark base. Flujo de proceso central. CTA Ember al final. Siempre un único objetivo por story."
              />
            </div>
          )}
          {tab === "twitter" && (
            <div>
              <TwitterHeader />
              <SpecBox
                specs={["1500 × 500 px", "Ratio 3:1", "Logo alejado del centro"]}
                note="Diagonal pattern sutil en base oscura. Ember glow como punto focal. Tags técnicos en mono a la derecha. Tono más directo que LinkedIn."
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
