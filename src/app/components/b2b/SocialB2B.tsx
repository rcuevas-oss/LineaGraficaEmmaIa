import React, { useState } from "react";
import { T } from "./tokens";
import { SectionLabel, NexoWordmark, NexoLogo, Tag, DotGrid } from "./SharedB2B";
import { ProcessFlow, StatCard } from "./ElementsB2B";

// ─── LinkedIn Post ────────────────────────────────────────────────────────────
function LinkedInPost({ variant = 1 }: { variant?: number }) {
  if (variant === 1) {
    // Insight / thought leadership
    return (
      <div
        className="w-full rounded-2xl overflow-hidden"
        style={{
          background: T.white,
          border: `1px solid ${T.border}`,
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          maxWidth: "520px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div
          className="px-6 pt-6 pb-4 flex items-center gap-3"
          style={{ borderBottom: `1px solid ${T.border}` }}
        >
          <NexoLogo size={36} />
          <div>
            <div style={{ fontSize: "14px", fontWeight: 600, color: T.ink }}>
              nexo
            </div>
            <div style={{ fontSize: "12px", color: T.muted }}>
              Software & Automation · 2.4K seguidores
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <Tag color="blue">Automatización B2B</Tag>
          <h3
            className="mt-4 mb-3"
            style={{
              fontFamily: T.sans,
              fontSize: "22px",
              fontWeight: 700,
              color: T.ink,
              letterSpacing: "-0.025em",
              lineHeight: 1.2,
            }}
          >
            El 73% del tiempo de tu equipo se pierde en tareas que ya existen herramientas para automatizar.
          </h3>
          <p
            style={{
              fontSize: "14px",
              color: T.slate,
              lineHeight: 1.7,
              marginBottom: "20px",
            }}
          >
            No es un problema de tecnología. Es un problema de implementación.
            En nexo lo resolvemos en menos de 30 días.
          </p>

          {/* Stats row */}
          <div
            className="flex gap-4 p-4 rounded-xl mb-4"
            style={{ background: T.canvas, border: `1px solid ${T.border}` }}
          >
            {[
              { val: "−62%", label: "Tiempo manual" },
              { val: "3.4×", label: "ROI promedio" },
              { val: "30d", label: "Time to value" },
            ].map((s) => (
              <div key={s.label} className="flex-1 text-center">
                <div
                  style={{
                    fontFamily: T.sans,
                    fontSize: "20px",
                    fontWeight: 700,
                    color: T.blue,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {s.val}
                </div>
                <div style={{ fontSize: "11px", color: T.muted }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="flex items-center justify-between px-4 py-3 rounded-xl"
            style={{ background: T.blueTint, border: `1px solid rgba(26,68,255,0.15)` }}
          >
            <span style={{ fontSize: "13px", color: T.blue, fontWeight: 600 }}>
              ¿Cuánto tiempo pierdes tú? → Calculadora gratuita
            </span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Footer */}
        <div
          className="px-6 py-3 flex items-center justify-between"
          style={{ borderTop: `1px solid ${T.border}`, background: T.canvas }}
        >
          <div style={{ fontFamily: T.mono, fontSize: "10px", color: T.muted }}>
            nexo.io · hola@nexo.io
          </div>
          <NexoWordmark size="sm" />
        </div>
      </div>
    );
  }

  // Variant 2: Case study
  return (
    <div
      className="w-full rounded-2xl overflow-hidden"
      style={{
        background: T.ink,
        border: `1px solid ${T.border}`,
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        maxWidth: "520px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <div
        className="absolute"
        style={{
          top: "-40px", right: "-40px",
          width: "200px", height: "200px",
          background: "radial-gradient(circle, rgba(26,68,255,0.4) 0%, transparent 70%)",
        }}
      />
      <div className="relative p-6">
        {/* Tag */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5"
          style={{
            background: "rgba(26,68,255,0.15)",
            border: "1px solid rgba(26,68,255,0.3)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: T.blue }} />
          <span style={{ fontFamily: T.mono, fontSize: "10px", color: T.blue, letterSpacing: "0.06em" }}>
            CASO DE ÉXITO
          </span>
        </div>

        <h3
          className="mb-2"
          style={{
            fontFamily: T.sans,
            fontSize: "26px",
            fontWeight: 700,
            color: T.white,
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
          }}
        >
          De 3 días a 4 horas.
        </h3>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "20px" }}>
          Así redujimos el proceso de facturación de una empresa de logística
          con 200 clientes activos.
        </p>

        <div className="flex gap-3 mb-5">
          {["−87% tiempo", "0 errores", "Integrado en 2 semanas"].map((t) => (
            <div
              key={t}
              className="px-2 py-1 rounded-md"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", fontFamily: T.mono }}>
                {t}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <NexoWordmark size="sm" inverted />
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", fontFamily: T.mono }}>
            nexo.io
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── LinkedIn Banner ──────────────────────────────────────────────────────────
function LinkedInBanner() {
  return (
    <div
      className="w-full relative overflow-hidden rounded-xl"
      style={{
        aspectRatio: "4/1",
        background: T.canvas,
        border: `1px solid ${T.border}`,
        minHeight: "80px",
      }}
    >
      <DotGrid opacity={0.4} />
      <div
        className="absolute"
        style={{
          top: "-30px", right: "15%",
          width: "200px", height: "200px",
          background: "radial-gradient(circle, rgba(26,68,255,0.08) 0%, transparent 65%)",
        }}
      />
      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{ background: `linear-gradient(to right, ${T.blue}, rgba(26,68,255,0.1), transparent)` }}
      />

      <div className="absolute inset-0 flex items-center px-6 sm:px-10 gap-6">
        <NexoWordmark size="md" />
        <div className="h-8 w-px" style={{ background: T.border }} />
        <div className="hidden sm:block">
          <p style={{ fontSize: "13px", color: T.slate, fontWeight: 500 }}>
            Software & Automation para empresas B2B
          </p>
          <p style={{ fontFamily: T.mono, fontSize: "10px", color: T.muted, marginTop: "2px" }}>
            Flujos · Integraciones · IA aplicada
          </p>
        </div>
        <div className="flex-1 hidden sm:block" />
        <div
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full"
          style={{
            background: T.blue,
            color: T.white,
            fontSize: "12px",
            fontWeight: 600,
          }}
        >
          nexo.io
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Instagram Post ────────────────────────────────────────────────────────────
function InstagramPost({ dark = false }: { dark?: boolean }) {
  if (!dark) {
    return (
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{
          width: "100%",
          maxWidth: "380px",
          aspectRatio: "1/1",
          background: T.canvas,
          border: `1px solid ${T.border}`,
          margin: "0 auto",
        }}
      >
        <DotGrid opacity={0.5} />
        <div
          className="absolute"
          style={{
            bottom: "-30px", right: "-30px",
            width: "160px", height: "160px",
            background: `radial-gradient(circle, rgba(26,68,255,0.08) 0%, transparent 70%)`,
          }}
        />
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: T.blue }}
        />

        <div className="absolute inset-0 flex flex-col justify-between p-6">
          <div className="flex items-center justify-between">
            <Tag color="blue">Automatización</Tag>
            <NexoLogo size={28} />
          </div>

          <div>
            <h2
              style={{
                fontFamily: T.sans,
                fontSize: "clamp(22px, 6vw, 32px)",
                fontWeight: 700,
                color: T.ink,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: "10px",
              }}
            >
              Construye flujos que trabajan mientras duermes.
            </h2>
            <div className="flex gap-3">
              {["RPA", "Integraciones", "IA"].map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded-md"
                  style={{
                    fontSize: "11px",
                    fontFamily: T.mono,
                    color: T.blue,
                    background: T.blueTint,
                    border: `1px solid rgba(26,68,255,0.15)`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <NexoWordmark size="sm" />
            <span style={{ fontFamily: T.mono, fontSize: "10px", color: T.muted }}>
              @nexo.studio
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Dark variant
  return (
    <div
      className="relative overflow-hidden rounded-2xl"
      style={{
        width: "100%",
        maxWidth: "380px",
        aspectRatio: "1/1",
        background: T.ink,
        border: `1px solid rgba(255,255,255,0.06)`,
        margin: "0 auto",
      }}
    >
      <div
        className="absolute"
        style={{
          top: "-40px", right: "-40px",
          width: "220px", height: "220px",
          background: "radial-gradient(circle, rgba(26,68,255,0.35) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-2 px-3 py-1 rounded-full"
            style={{
              background: "rgba(26,68,255,0.2)",
              border: "1px solid rgba(26,68,255,0.3)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: T.blue }} />
            <span style={{ fontFamily: T.mono, fontSize: "10px", color: T.blue, letterSpacing: "0.06em" }}>
              DATO
            </span>
          </div>
          <NexoLogo size={28} inverted />
        </div>

        <div className="text-center">
          <div
            style={{
              fontFamily: T.sans,
              fontSize: "clamp(56px, 14vw, 72px)",
              fontWeight: 700,
              color: T.white,
              letterSpacing: "-0.06em",
              lineHeight: 1,
            }}
          >
            3.4<span style={{ color: T.blue }}>×</span>
          </div>
          <p
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.6)",
              marginTop: "8px",
              lineHeight: 1.5,
            }}
          >
            de retorno promedio en clientes
            <br />
            que automatizan sus operaciones.
          </p>
        </div>

        <div className="flex items-center justify-between">
          <NexoWordmark size="sm" inverted />
          <span style={{ fontFamily: T.mono, fontSize: "10px", color: "rgba(255,255,255,0.3)" }}>
            @nexo.studio
          </span>
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
        background: T.white,
        border: `1px solid ${T.border}`,
        boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
      }}
    >
      {/* Blue top section */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{ height: "45%", background: T.blue, position: "relative" }}
      >
        <div
          className="absolute"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)`,
            backgroundSize: "16px 16px",
            inset: 0,
          }}
        />
        <div className="relative p-5 flex flex-col justify-between h-full">
          <div className="flex items-center justify-between">
            <NexoWordmark size="sm" inverted />
          </div>
          <div>
            <div
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full mb-3"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <span style={{ fontFamily: T.mono, fontSize: "9px", color: T.white, letterSpacing: "0.06em" }}>
                PROCESO
              </span>
            </div>
            <h3
              style={{
                fontFamily: T.sans,
                fontSize: "20px",
                fontWeight: 700,
                color: T.white,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
              }}
            >
              Cómo lo hacemos en 5 pasos.
            </h3>
          </div>
        </div>
      </div>

      {/* White bottom section */}
      <div
        className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-between"
        style={{ top: "45%", background: T.white }}
      >
        <div className="mt-2">
          <ProcessFlow compact />
        </div>

        <div className="space-y-2 mt-4">
          {["Diagnóstico gratuito", "Sin compromisos", "Resultados en 30 días"].map((item, i) => (
            <div key={item} className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                style={{ background: T.blueTint, border: `1px solid rgba(26,68,255,0.2)` }}
              >
                <span style={{ fontSize: "8px", color: T.blue, fontWeight: 700 }}>✓</span>
              </div>
              <span style={{ fontSize: "11px", color: T.slate }}>{item}</span>
            </div>
          ))}
        </div>

        <div
          className="flex items-center justify-center py-2 rounded-xl mt-3"
          style={{ background: T.blue }}
        >
          <span style={{ fontSize: "12px", fontWeight: 700, color: T.white }}>
            Agenda una llamada →
          </span>
        </div>

        <div style={{ fontFamily: T.mono, fontSize: "9px", color: T.muted, textAlign: "center", marginTop: "8px" }}>
          nexo.io
        </div>
      </div>
    </div>
  );
}

// ─── Twitter Header ────────────────────────────────────────────────────────────
function TwitterHeader() {
  return (
    <div
      className="relative overflow-hidden rounded-xl w-full"
      style={{
        aspectRatio: "3/1",
        background: T.canvas,
        border: `1px solid ${T.border}`,
      }}
    >
      <DotGrid opacity={0.4} />
      <div
        className="absolute"
        style={{
          top: "-30px", left: "40%",
          width: "200px", height: "200px",
          background: "radial-gradient(circle, rgba(26,68,255,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-between px-8">
        <div>
          <NexoWordmark size="lg" />
          <p
            style={{
              fontFamily: T.mono,
              fontSize: "clamp(9px, 1.5vw, 12px)",
              color: T.muted,
              marginTop: "6px",
              letterSpacing: "0.04em",
            }}
          >
            Automatiza · Integra · Escala
          </p>
        </div>
        <div
          className="hidden sm:flex flex-col items-end gap-1"
        >
          {["RPA", "API", "IA"].map((tag) => (
            <div
              key={tag}
              className="px-3 py-1 rounded-full"
              style={{
                fontFamily: T.mono,
                fontSize: "10px",
                color: T.blue,
                background: T.blueTint,
                border: `1px solid rgba(26,68,255,0.15)`,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{ background: `linear-gradient(to right, ${T.blue}80, ${T.blue}10)` }}
      />
    </div>
  );
}

// ─── Main ──────────────────────────────────────────────────────────────────────
type TabId = "linkedin-post" | "linkedin-banner" | "instagram" | "story" | "twitter";

const TABS: { id: TabId; label: string }[] = [
  { id: "linkedin-post", label: "LinkedIn Post" },
  { id: "linkedin-banner", label: "LinkedIn Banner" },
  { id: "instagram", label: "Instagram Post" },
  { id: "story", label: "Story" },
  { id: "twitter", label: "Twitter/X" },
];

export function SocialB2B() {
  const [tab, setTab] = useState<TabId>("linkedin-post");
  const [liVariant, setLiVariant] = useState(1);
  const [igDark, setIgDark] = useState(false);

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
          step="06 — Redes sociales"
          title="Plantillas para redes"
          subtitle="Diseñadas con LinkedIn como canal principal, sin descuidar Instagram y Twitter."
        />

        {/* Tab nav */}
        <div
          className="flex flex-wrap gap-1 mb-0"
          style={{ borderBottom: `1px solid ${T.border}` }}
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className="px-4 py-2.5 rounded-t-lg transition-all"
              style={{
                fontFamily: T.sans,
                fontSize: "13px",
                fontWeight: tab === t.id ? 600 : 400,
                color: tab === t.id ? T.blue : T.slate,
                background: tab === t.id ? T.blueTint : "transparent",
                border: tab === t.id
                  ? `1px solid rgba(26,68,255,0.2)`
                  : "1px solid transparent",
                borderBottom: "none",
                cursor: "pointer",
                marginBottom: "-1px",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div
          className="rounded-b-2xl rounded-tr-2xl p-6 sm:p-10"
          style={{
            background: T.canvas,
            border: `1px solid ${T.border}`,
            borderTop: "none",
          }}
        >
          {tab === "linkedin-post" && (
            <div>
              <div className="flex gap-2 mb-6">
                {[
                  { v: 1, label: "Thought leadership" },
                  { v: 2, label: "Case study" },
                ].map(({ v, label }) => (
                  <button
                    key={v}
                    onClick={() => setLiVariant(v)}
                    className="px-4 py-1.5 rounded-full text-sm transition-all"
                    style={{
                      fontFamily: T.sans,
                      fontSize: "12px",
                      fontWeight: liVariant === v ? 600 : 400,
                      color: liVariant === v ? T.white : T.blue,
                      background: liVariant === v ? T.blue : T.blueTint,
                      border: `1px solid ${liVariant === v ? T.blue : "rgba(26,68,255,0.2)"}`,
                      cursor: "pointer",
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <LinkedInPost variant={liVariant} />
              <SpecBox
                title="LinkedIn Post"
                specs={["1200 × 627 px (shared image)", "Ratio 1.91:1 recomendado", "Max 3.000 caracteres"]}
                note="El post de LinkedIn es el formato principal. Priorizar contenido de valor: datos, procesos, casos de éxito. Siempre incluir CTA claro."
              />
            </div>
          )}

          {tab === "linkedin-banner" && (
            <div>
              <LinkedInBanner />
              <SpecBox
                title="LinkedIn Banner"
                specs={["1584 × 396 px", "Safe zone: 220px dcha. (foto de perfil)", "JPG o PNG < 8MB"]}
                note="La zona izquierda es la más visible. Logo + tagline siempre presentes. Fondo Canvas con dot grid mantiene un tono profesional sin frialdad."
              />
            </div>
          )}

          {tab === "instagram" && (
            <div>
              <div className="flex gap-2 mb-6">
                {[
                  { label: "Claro", val: false },
                  { label: "Oscuro", val: true },
                ].map(({ label, val }) => (
                  <button
                    key={label}
                    onClick={() => setIgDark(val)}
                    className="px-4 py-1.5 rounded-full"
                    style={{
                      fontFamily: T.sans,
                      fontSize: "12px",
                      fontWeight: igDark === val ? 600 : 400,
                      color: igDark === val ? T.white : T.blue,
                      background: igDark === val ? T.blue : T.blueTint,
                      border: `1px solid ${igDark === val ? T.blue : "rgba(26,68,255,0.2)"}`,
                      cursor: "pointer",
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <InstagramPost dark={igDark} />
              <SpecBox
                title="Instagram Post"
                specs={["1080 × 1080 px", "Ratio 1:1", "Alta legibilidad en móvil"]}
                note="Instagram es secundario para B2B. Usar para refuerzo de marca y contenido de datos. Variante oscura para stats, clara para contenido explicativo."
              />
            </div>
          )}

          {tab === "story" && (
            <div>
              <Story />
              <SpecBox
                title="Story"
                specs={["1080 × 1920 px", "Ratio 9:16", "Safe zone: 250px top/bottom"]}
                note="Estructura dividida: zona superior de color de marca, zona inferior blanca con contenido legible. Siempre incluir proceso o CTA accionable."
              />
            </div>
          )}

          {tab === "twitter" && (
            <div>
              <TwitterHeader />
              <SpecBox
                title="Twitter / X Header"
                specs={["1500 × 500 px", "Ratio 3:1", "Logo lejos del centro (foto superpone)"]}
                note="Fondo Canvas con dot grid sutil. Logo a la izquierda, tags técnicos a la derecha. Tono más informal que LinkedIn."
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function SpecBox({
  title,
  specs,
  note,
}: {
  title: string;
  specs: string[];
  note: string;
}) {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div
        className="p-4 rounded-xl"
        style={{ background: T.white, border: `1px solid ${T.border}` }}
      >
        <div
          style={{
            fontFamily: T.mono,
            fontSize: "10px",
            color: T.muted,
            letterSpacing: "0.08em",
            marginBottom: "10px",
          }}
        >
          ESPECIFICACIONES — {title.toUpperCase()}
        </div>
        <ul className="space-y-2">
          {specs.map((s, i) => (
            <li key={i} className="flex items-start gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                style={{ background: T.blue }}
              />
              <span style={{ fontSize: "13px", color: T.slate }}>{s}</span>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="p-4 rounded-xl"
        style={{ background: T.white, border: `1px solid ${T.border}` }}
      >
        <div
          style={{
            fontFamily: T.mono,
            fontSize: "10px",
            color: T.muted,
            letterSpacing: "0.08em",
            marginBottom: "10px",
          }}
        >
          CRITERIOS DE USO
        </div>
        <p style={{ fontSize: "13px", color: T.slate, lineHeight: 1.65 }}>
          {note}
        </p>
      </div>
    </div>
  );
}
