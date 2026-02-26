import React from "react";
import { SectionLabel } from "./ColorSystem";
import { LogoMark } from "./BrandHero";
import { FlowPattern } from "./GraphicElements";

// ─── Mock Card Post ──────────────────────────────────────────────────────────
function MockPostCard({ title, tag, stat }: { title: string; tag: string; stat?: string }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: "#06060A",
        border: "1px solid rgba(255,255,255,0.07)",
        padding: "20px",
        minHeight: "120px",
      }}
    >
      <div
        className="absolute"
        style={{
          top: 0, right: 0,
          width: "80px", height: "80px",
          background: "radial-gradient(circle, rgba(124,58,255,0.2) 0%, transparent 70%)",
        }}
      />
      <div
        className="flex items-center gap-2 mb-3"
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "8px",
          color: "#AAFF00",
          letterSpacing: "0.12em",
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#AAFF00" }} />
        {tag}
      </div>
      {stat && (
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "36px",
            fontWeight: 700,
            color: "#AAFF00",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            marginBottom: "4px",
          }}
        >
          {stat}
        </div>
      )}
      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "14px",
          fontWeight: 600,
          color: "#F4F3FF",
          lineHeight: 1.3,
        }}
      >
        {title}
      </div>
      <div
        className="absolute bottom-3 right-3"
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "8px",
          color: "#6B6A85",
        }}
      >
        @flux.studio
      </div>
    </div>
  );
}

// ─── Mock Slide ──────────────────────────────────────────────────────────────
function MockCarouselSlide({ index, total }: { index: number; total: number }) {
  const items = [
    {
      step: "01",
      title: "Auditamos tus procesos actuales",
      sub: "Identificamos qué tareas consumen más tiempo y recursos.",
      accent: "#AAFF00",
    },
    {
      step: "02",
      title: "Diseñamos el flujo óptimo",
      sub: "Arquitectura de automatización personalizada para tu empresa.",
      accent: "#7C3AFF",
    },
    {
      step: "03",
      title: "Implementamos y medimos",
      sub: "Deploy en producción con monitoreo en tiempo real.",
      accent: "#AAFF00",
    },
  ];

  const item = items[index % items.length];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: "100%",
        aspectRatio: "1/1",
        background: "#0F0F1A",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* BG */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(170,255,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(170,255,0,0.04) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute bottom-0 right-0"
        style={{
          width: "160px", height: "160px",
          background: `radial-gradient(circle, ${item.accent}22 0%, transparent 70%)`,
        }}
      />

      {/* Corner brackets */}
      <div className="absolute top-4 left-4 w-5 h-5" style={{ borderTop: `1.5px solid ${item.accent}60`, borderLeft: `1.5px solid ${item.accent}60` }} />
      <div className="absolute top-4 right-4 w-5 h-5" style={{ borderTop: `1.5px solid ${item.accent}60`, borderRight: `1.5px solid ${item.accent}60` }} />
      <div className="absolute bottom-4 left-4 w-5 h-5" style={{ borderBottom: `1.5px solid ${item.accent}60`, borderLeft: `1.5px solid ${item.accent}60` }} />
      <div className="absolute bottom-4 right-4 w-5 h-5" style={{ borderBottom: `1.5px solid ${item.accent}60`, borderRight: `1.5px solid ${item.accent}60` }} />

      <div className="absolute inset-0 flex flex-col justify-between p-6">
        {/* Top */}
        <div className="flex justify-between items-start">
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "8px",
              color: "#6B6A85",
              letterSpacing: "0.12em",
            }}
          >
            {index + 1}/{total} — CÓMO TRABAJAMOS
          </div>
          <LogoMark size="sm" />
        </div>

        {/* Content */}
        <div>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(48px, 12vw, 72px)",
              fontWeight: 700,
              color: item.accent,
              letterSpacing: "-0.05em",
              lineHeight: 1,
              marginBottom: "12px",
            }}
          >
            {item.step}
          </div>
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(16px, 4vw, 22px)",
              fontWeight: 700,
              color: "#F4F3FF",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              marginBottom: "8px",
            }}
          >
            {item.title}
          </h3>
          <p
            style={{
              fontSize: "12px",
              color: "rgba(244,243,255,0.5)",
              lineHeight: 1.6,
            }}
          >
            {item.sub}
          </p>
        </div>

        {/* Pagination dots */}
        <div className="flex gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              style={{
                width: i === index ? "20px" : "6px",
                height: "4px",
                background: i === index ? item.accent : "rgba(255,255,255,0.2)",
                transition: "width 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Mock Email Header ────────────────────────────────────────────────────────
function MockEmailHeader() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: "#06060A",
        border: "1px solid rgba(255,255,255,0.07)",
        padding: "28px 32px",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(170,255,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(170,255,0,0.04) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "-30px", right: "-30px",
          width: "120px", height: "120px",
          background: "radial-gradient(circle, rgba(124,58,255,0.25) 0%, transparent 70%)",
        }}
      />
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LogoMark size="sm" />
          <div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "18px",
                fontWeight: 700,
                color: "#F4F3FF",
                letterSpacing: "-0.02em",
              }}
            >
              FLUX
            </div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "8px",
                color: "#AAFF00",
                letterSpacing: "0.12em",
              }}
            >
              SOFTWARE & AUTOMATION
            </div>
          </div>
        </div>
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "9px",
            color: "#6B6A85",
          }}
        >
          hola@flux.studio
        </div>
      </div>
      <div
        className="mt-4 h-px"
        style={{ background: "linear-gradient(to right, #AAFF00, rgba(124,58,255,0.5), transparent)" }}
      />
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export function UsageExamples() {
  return (
    <section
      style={{
        background: "#06060A",
        fontFamily: "'Space Grotesk', sans-serif",
        padding: "80px 0",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionLabel label="07" title="Ejemplos de Aplicación" />

        {/* Posts grid */}
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: "#6B6A85",
            margin: "32px 0 16px",
          }}
        >
          — POSTS INFORMATIVOS
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <MockPostCard
            tag="AUTOMATIZACIÓN RPA"
            stat="3x"
            title="más rápido con flujos automatizados"
          />
          <MockPostCard
            tag="CASO DE USO"
            title="Cómo automatizamos el onboarding de 500 clientes en un solo día."
          />
          <MockPostCard
            tag="DATO TÉCNICO"
            stat="99.9%"
            title="de uptime en nuestros sistemas productivos"
          />
        </div>

        {/* Carousel slides */}
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: "#6B6A85",
            margin: "40px 0 16px",
          }}
        >
          — CARRUSEL EDUCATIVO
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[0, 1, 2].map((i) => (
            <MockCarouselSlide key={i} index={i} total={3} />
          ))}
        </div>

        {/* Email header */}
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: "#6B6A85",
            margin: "40px 0 16px",
          }}
        >
          — HEADER DE EMAIL MARKETING
        </div>
        <MockEmailHeader />

        {/* Tone of voice */}
        <div
          className="mt-10 p-6 sm:p-8"
          style={{
            background: "#0F0F1A",
            border: "1px solid rgba(170,255,0,0.12)",
          }}
        >
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.2em",
              color: "#AAFF00",
              marginBottom: "20px",
            }}
          >
            — VOZ Y TONO DE COMUNICACIÓN
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                trait: "Directo",
                desc: "Sin rodeos. Mensajes concisos que van al punto.",
                ex: "✓ 'Automatiza en 30 días.'\n✗ 'Podemos ayudarte a automatizar algunos de tus procesos de negocio.'",
              },
              {
                trait: "Técnico sin barreras",
                desc: "Lenguaje especializado sin ser excluyente.",
                ex: "✓ 'Flujos RPA que se integran con tu CRM.'\n✗ 'Usamos robots para trabajar con tus datos.'",
              },
              {
                trait: "Confiado",
                desc: "Seguridad en lo que entregamos, sin arrogancia.",
                ex: "✓ 'Lo construimos, tú escala.'\n✗ 'Intentamos ofrecerte la mejor solución posible.'",
              },
              {
                trait: "Orientado a resultados",
                desc: "Siempre vinculado a métricas y outcomes reales.",
                ex: "✓ '3x más rápido, 80% menos errores.'\n✗ 'Mejoramos tus procesos notablemente.'",
              },
            ].map((t) => (
              <div key={t.trait}>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#F4F3FF",
                    marginBottom: "6px",
                  }}
                >
                  {t.trait}
                </div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#6B6A85",
                    lineHeight: 1.5,
                    marginBottom: "8px",
                  }}
                >
                  {t.desc}
                </p>
                <pre
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "10px",
                    color: "rgba(244,243,255,0.4)",
                    lineHeight: 1.6,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {t.ex}
                </pre>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
