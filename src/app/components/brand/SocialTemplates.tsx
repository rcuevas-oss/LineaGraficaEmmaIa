import React, { useState, useRef } from "react";
import { SectionLabel } from "./ColorSystem";
import { LogoMark } from "./BrandHero";
import { FlowPattern, CircuitPattern } from "./GraphicElements";
import html2canvas from "html2canvas";
import { Download } from "lucide-react";

// ─── Export Utility ──────────────────────────────────────────────────────────
async function exportAsImage(
  elementRef: HTMLElement,
  fileName: string,
  width: number,
  height: number
) {
  try {
    // Create a temporary container with exact dimensions
    const tempContainer = document.createElement("div");
    tempContainer.style.position = "fixed";
    tempContainer.style.left = "-9999px";
    tempContainer.style.top = "0";
    tempContainer.style.width = `${width}px`;
    tempContainer.style.height = `${height}px`;
    document.body.appendChild(tempContainer);

    // Clone the element
    const clone = elementRef.cloneNode(true) as HTMLElement;
    clone.style.width = `${width}px`;
    clone.style.height = `${height}px`;
    clone.style.maxWidth = "none";
    clone.style.margin = "0";
    
    // Convert oklch colors to rgb before appending
    convertOklchToRgb(clone);
    
    tempContainer.appendChild(clone);

    // Wait for fonts and styles to load
    await document.fonts.ready;
    await new Promise((resolve) => setTimeout(resolve, 200));

    // Capture with high quality settings
    const canvas = await html2canvas(clone, {
      width: width,
      height: height,
      scale: 2, // 2x resolution for high quality
      backgroundColor: null,
      logging: false,
      useCORS: true,
      allowTaint: true,
    });

    // Clean up
    document.body.removeChild(tempContainer);

    // Download
    const link = document.createElement("a");
    link.download = fileName;
    link.href = canvas.toDataURL("image/png", 1.0);
    link.click();
  } catch (error) {
    console.error("Error exporting image:", error);
    alert("Error al exportar la imagen. Por favor, intenta nuevamente.");
  }
}

// Convert oklch colors to rgb for html2canvas compatibility
function convertOklchToRgb(element: HTMLElement) {
  const walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_ELEMENT,
    null
  );
  
  const elements: HTMLElement[] = [element];
  let currentNode = walker.nextNode();
  while (currentNode) {
    elements.push(currentNode as HTMLElement);
    currentNode = walker.nextNode();
  }
  
  elements.forEach((el) => {
    const style = window.getComputedStyle(el);
    const props = [
      'color', 'backgroundColor', 'borderColor', 
      'borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor',
      'outlineColor', 'fill', 'stroke'
    ];
    
    props.forEach((prop) => {
      const value = style.getPropertyValue(prop);
      if (value && value.includes('oklch')) {
        // Get computed RGB value
        const computed = style.getPropertyValue(prop);
        // Set as inline style to override
        (el as HTMLElement).style.setProperty(prop, computed, 'important');
      }
    });
  });
}

// ─── EMMA IA Logo Component ──────────────────────────────────────────────────
function EmmaIALogo({ 
  size = "md", 
  dark = false,
  showTagline = true 
}: { 
  size?: "sm" | "md" | "lg";
  dark?: boolean;
  showTagline?: boolean;
}) {
  const sizes = {
    sm: { emma: "14px", ia: "10px", tagline: "5px", gap: "4px" },
    md: { emma: "22px", ia: "13px", tagline: "7px", gap: "6px" },
    lg: { emma: "32px", ia: "18px", tagline: "9px", gap: "8px" },
  };
  
  const s = sizes[size];
  const textColor = dark ? "#06060A" : "#F4F3FF";
  const lime = dark ? "#06060A" : "#AAFF00";
  const taglineColor = dark ? "rgba(6,6,10,0.4)" : "#6B6A85";

  return (
    <div className="flex flex-col" style={{ gap: s.gap }}>
      <div className="flex items-baseline gap-2">
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: s.emma,
            fontWeight: 700,
            color: textColor,
            letterSpacing: "0.05em",
          }}
        >
          EMMA
        </span>
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: s.ia,
            fontWeight: 700,
            color: lime,
            letterSpacing: "0.15em",
          }}
        >
          IA
        </span>
      </div>
      {showTagline && (
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: s.tagline,
            letterSpacing: "0.25em",
            color: taglineColor,
          }}
        >
          SOFTWARE & AUTOMATION
        </div>
      )}
    </div>
  );
}

// ─── Instagram Square Post ──────────────────────────────────────────────────
function InstagramPost({ variant = 1 }: { variant?: number }) {
  if (variant === 1) {
    return (
      <div
        className="relative overflow-hidden"
        style={{
          width: "100%",
          aspectRatio: "1/1",
          background: "#06060A",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Grid bg */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(170,255,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(170,255,0,0.05) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Violet glow */}
        <div
          className="absolute"
          style={{
            bottom: "-40px",
            right: "-40px",
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, rgba(124,58,255,0.35) 0%, transparent 70%)",
          }}
        />
        {/* Green glow */}
        <div
          className="absolute"
          style={{
            top: "-40px",
            left: "-40px",
            width: "150px",
            height: "150px",
            background: "radial-gradient(circle, rgba(170,255,0,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Corner brackets */}
        <div className="absolute top-4 left-4 w-6 h-6" style={{ borderTop: "1.5px solid rgba(170,255,0,0.5)", borderLeft: "1.5px solid rgba(170,255,0,0.5)" }} />
        <div className="absolute top-4 right-4 w-6 h-6" style={{ borderTop: "1.5px solid rgba(170,255,0,0.5)", borderRight: "1.5px solid rgba(170,255,0,0.5)" }} />
        <div className="absolute bottom-4 left-4 w-6 h-6" style={{ borderBottom: "1.5px solid rgba(170,255,0,0.5)", borderLeft: "1.5px solid rgba(170,255,0,0.5)" }} />
        <div className="absolute bottom-4 right-4 w-6 h-6" style={{ borderBottom: "1.5px solid rgba(170,255,0,0.5)", borderRight: "1.5px solid rgba(170,255,0,0.5)" }} />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          {/* Top: tag */}
          <div className="flex justify-between items-start">
            <div
              className="flex items-center gap-2 px-2 py-1"
              style={{
                background: "rgba(170,255,0,0.1)",
                border: "1px solid rgba(170,255,0,0.25)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#AAFF00" }} />
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "8px",
                  color: "#AAFF00",
                  letterSpacing: "0.12em",
                }}
              >
                AUTOMATIZACIÓN
              </span>
            </div>
            <LogoMark size="sm" />
          </div>

          {/* Center: headline */}
          <div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(20px, 5vw, 32px)",
                fontWeight: 700,
                color: "#F4F3FF",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: "10px",
              }}
            >
              Deja que los sistemas trabajen por ti.
            </h2>
            <div
              className="h-0.5 w-12"
              style={{ background: "#AAFF00" }}
            />
          </div>

          {/* Bottom: footer */}
          <div className="flex justify-between items-end">
            <EmmaIALogo size="sm" />
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "9px",
                color: "#6B6A85",
              }}
            >
              @emma.ia
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Variant 2: Data/stat post
  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: "100%",
        aspectRatio: "1/1",
        background: "#AAFF00",
        border: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(6,6,10,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(6,6,10,0.12) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="absolute inset-0 flex flex-col justify-between p-6">
        {/* Top */}
        <div className="flex justify-between items-start">
          <LogoMark size="sm" inverted />
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "8px",
              letterSpacing: "0.15em",
              color: "rgba(6,6,10,0.5)",
            }}
          >
            DATO DEL DÍA
          </div>
        </div>

        {/* Stat */}
        <div className="text-center">
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(56px, 14vw, 80px)",
              fontWeight: 700,
              color: "#06060A",
              letterSpacing: "-0.05em",
              lineHeight: 1,
            }}
          >
            73%
          </div>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(12px, 3vw, 16px)",
              color: "rgba(6,6,10,0.7)",
              fontWeight: 500,
              marginTop: "8px",
            }}
          >
            de tareas repetitivas pueden automatizarse hoy.
          </p>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-center">
          <EmmaIALogo size="sm" dark showTagline={false} />
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "9px",
              color: "rgba(6,6,10,0.5)",
            }}
          >
            @emma.ia
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Instagram Story ────────────────────────────────────────────────────────
function InstagramStory() {
  return (
    <div
      className="relative overflow-hidden mx-auto"
      style={{
        width: "100%",
        maxWidth: "280px",
        aspectRatio: "9/16",
        background: "#06060A",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* BG elements */}
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
          top: "-60px",
          right: "-60px",
          width: "240px",
          height: "240px",
          background: "radial-gradient(circle, rgba(124,58,255,0.3) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: "20%",
          left: "-40px",
          width: "160px",
          height: "160px",
          background: "radial-gradient(circle, rgba(170,255,0,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Flow pattern in middle */}
      <div
        className="absolute"
        style={{ top: "25%", left: 0, right: 0, opacity: 0.4 }}
      >
        <FlowPattern />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-5">
        {/* Top bar */}
        <div className="flex justify-between items-center">
          <LogoMark size="sm" />
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "7px",
              color: "#6B6A85",
              letterSpacing: "0.12em",
            }}
          >
            emma.ia
          </div>
        </div>

        {/* Center content */}
        <div>
          <div
            className="flex items-center gap-2 mb-4"
            style={{
              border: "1px solid rgba(170,255,0,0.3)",
              background: "rgba(170,255,0,0.05)",
              padding: "4px 8px",
              display: "inline-flex",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#AAFF00" }} />
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "7px",
                color: "#AAFF00",
                letterSpacing: "0.12em",
              }}
            >
              NUEVO SERVICIO
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(24px, 8vw, 32px)",
              fontWeight: 700,
              color: "#F4F3FF",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "12px",
            }}
          >
            Automatiza tu empresa en 30 días.
          </h2>
          <div
            className="h-0.5 mb-4"
            style={{
              background: "linear-gradient(to right, #AAFF00, transparent)",
              width: "80px",
            }}
          />
          <p
            style={{
              fontSize: "11px",
              color: "rgba(244,243,255,0.5)",
              lineHeight: 1.6,
            }}
          >
            Flujos de trabajo personalizados que escalan con tu negocio.
          </p>
        </div>

        {/* Bottom CTA */}
        <div>
          <div
            className="flex items-center justify-between p-3 mb-4"
            style={{
              background: "#AAFF00",
            }}
          >
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                color: "#06060A",
                letterSpacing: "-0.01em",
              }}
            >
              Hablar con un experto
            </span>
            <span style={{ color: "#06060A", fontSize: "16px" }}>→</span>
          </div>
          <div
            className="text-center"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "8px",
              color: "#6B6A85",
              letterSpacing: "0.1em",
            }}
          >
            emma.ia · software & automation
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── LinkedIn Banner ─────────────────────────────────────────────────────────
function LinkedInBanner() {
  return (
    <div
      className="relative overflow-hidden w-full"
      style={{
        aspectRatio: "4/1",
        background: "#06060A",
        border: "1px solid rgba(255,255,255,0.06)",
        minHeight: "80px",
      }}
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(170,255,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(170,255,0,0.05) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Green gradient left */}
      <div
        className="absolute"
        style={{
          left: "-80px",
          top: "-80px",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(170,255,0,0.15) 0%, transparent 65%)",
        }}
      />
      {/* Violet gradient right */}
      <div
        className="absolute"
        style={{
          right: "-40px",
          bottom: "-40px",
          width: "250px",
          height: "250px",
          background: "radial-gradient(circle, rgba(124,58,255,0.3) 0%, transparent 65%)",
        }}
      />

      {/* Circuit pattern right side */}
      <div
        className="absolute right-0 top-0 h-full opacity-20"
        style={{ width: "200px" }}
      >
        <CircuitPattern className="absolute right-0 top-0" />
      </div>

      {/* Accent line bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{ background: "linear-gradient(to right, #AAFF00, #7C3AFF, transparent)" }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center px-6 sm:px-10 gap-6">
        <LogoMark size="md" />
        <div
          className="h-10 w-px"
          style={{ background: "rgba(255,255,255,0.1)" }}
        />
        <EmmaIALogo size="md" />
        <div className="flex-1 hidden sm:block" />
        <div className="hidden sm:flex gap-8">
          {["Flujos RPA", "Integraciones API", "IA a medida"].map((s) => (
            <div key={s} className="text-center">
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#F4F3FF",
                }}
              >
                {s}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Twitter/X Header ────────────────────────────────────────────────────────
function TwitterHeader() {
  return (
    <div
      className="relative overflow-hidden w-full"
      style={{
        aspectRatio: "3/1",
        background: "#06060A",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* BG */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 30px, rgba(170,255,0,0.03) 30px, rgba(170,255,0,0.03) 32px)`,
        }}
      />
      <div
        className="absolute"
        style={{
          top: "-50%",
          left: "30%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(124,58,255,0.25) 0%, transparent 65%)",
        }}
      />

      {/* Horizontal accent line */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(170,255,0,0.2), rgba(124,58,255,0.3), transparent)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-between px-8">
        <EmmaIALogo size="lg" showTagline={false} />
        <div className="flex flex-col items-end gap-2">
          <LogoMark size="md" />
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "8px",
              color: "#6B6A85",
              letterSpacing: "0.1em",
            }}
          >
            @emma.ia
          </div>
        </div>
      </div>

      {/* Corner node */}
      <div
        className="absolute bottom-3 left-3 w-2 h-2"
        style={{ background: "#AAFF00" }}
      />
      <div
        className="absolute top-3 right-3 w-2 h-2 rotate-45"
        style={{ background: "#7C3AFF" }}
      />
    </div>
  );
}

// ─── Profile Icon ────────────────────────────────────────────────────────────
function ProfileIcon() {
  return (
    <div className="flex gap-4 flex-wrap">
      {/* Dark */}
      <div
        className="relative flex items-center justify-center"
        style={{
          width: "80px",
          height: "80px",
          background: "#06060A",
          border: "2px solid #AAFF00",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(170,255,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(170,255,0,0.08) 1px, transparent 1px)`,
            backgroundSize: "15px 15px",
          }}
        />
        <div className="relative z-10 text-center">
          <LogoMark size="sm" />
        </div>
      </div>
      {/* Green */}
      <div
        className="relative flex items-center justify-center"
        style={{
          width: "80px",
          height: "80px",
          background: "#AAFF00",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(6,6,10,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,6,10,0.1) 1px, transparent 1px)`,
            backgroundSize: "12px 12px",
          }}
        />
        <LogoMark size="sm" inverted />
      </div>
      {/* Square dark */}
      <div
        className="relative flex items-center justify-center"
        style={{
          width: "80px",
          height: "80px",
          background: "#06060A",
          border: "2px solid #7C3AFF",
        }}
      >
        <LogoMark size="sm" />
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
type TabId = "post" | "story" | "linkedin" | "twitter" | "profile";

const TABS: { id: TabId; label: string }[] = [
  { id: "post", label: "Post Instagram" },
  { id: "story", label: "Story" },
  { id: "linkedin", label: "LinkedIn Banner" },
  { id: "twitter", label: "Twitter/X Header" },
  { id: "profile", label: "Perfil" },
];

export function SocialTemplates() {
  const [activeTab, setActiveTab] = useState<TabId>("post");
  const [postVariant, setPostVariant] = useState(1);
  const [isExporting, setIsExporting] = useState(false);
  
  const postRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const linkedinRef = useRef<HTMLDivElement>(null);
  const twitterRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const handleExport = async () => {
    setIsExporting(true);
    
    try {
      switch (activeTab) {
        case "post":
          if (postRef.current) {
            await exportAsImage(
              postRef.current,
              `EMMA-IA-Instagram-Post-V${postVariant}.png`,
              1080,
              1080
            );
          }
          break;
        case "story":
          if (storyRef.current) {
            await exportAsImage(
              storyRef.current,
              "EMMA-IA-Instagram-Story.png",
              1080,
              1920
            );
          }
          break;
        case "linkedin":
          if (linkedinRef.current) {
            await exportAsImage(
              linkedinRef.current,
              "EMMA-IA-LinkedIn-Banner.png",
              1584,
              396
            );
          }
          break;
        case "twitter":
          if (twitterRef.current) {
            await exportAsImage(
              twitterRef.current,
              "EMMA-IA-Twitter-Header.png",
              1500,
              500
            );
          }
          break;
        case "profile":
          if (profileRef.current) {
            await exportAsImage(
              profileRef.current,
              "EMMA-IA-Profile-Icon.png",
              400,
              400
            );
          }
          break;
      }
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <section
      style={{
        background: "#06060A",
        fontFamily: "'Space Grotesk', sans-serif",
        padding: "80px 0",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionLabel label="06" title="Plantillas Redes Sociales" />

        {/* Tabs */}
        <div
          className="flex gap-1 mt-10 flex-wrap"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-4 py-2 transition-all"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.1em",
                color: activeTab === tab.id ? "#AAFF00" : "#6B6A85",
                background: activeTab === tab.id ? "rgba(170,255,0,0.08)" : "transparent",
                borderTop: activeTab === tab.id ? "1px solid rgba(170,255,0,0.25)" : "1px solid transparent",
                borderLeft: activeTab === tab.id ? "1px solid rgba(170,255,0,0.25)" : "1px solid transparent",
                borderRight: activeTab === tab.id ? "1px solid rgba(170,255,0,0.25)" : "1px solid transparent",
                borderBottom: "none",
                cursor: "pointer",
                marginBottom: "-1px",
              }}
            >
              {tab.label.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Preview panel */}
        <div
          className="p-6 sm:p-10 mt-0"
          style={{
            background: "#0A0A12",
            border: "1px solid rgba(255,255,255,0.06)",
            borderTop: "none",
          }}
        >
          {activeTab === "post" && (
            <div>
              <div className="flex gap-2 mb-6">
                {[1, 2].map((v) => (
                  <button
                    key={v}
                    onClick={() => setPostVariant(v)}
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "9px",
                      letterSpacing: "0.1em",
                      color: postVariant === v ? "#06060A" : "#AAFF00",
                      background: postVariant === v ? "#AAFF00" : "transparent",
                      borderTop: "1px solid rgba(170,255,0,0.4)",
                      borderRight: "1px solid rgba(170,255,0,0.4)",
                      borderBottom: "1px solid rgba(170,255,0,0.4)",
                      borderLeft: "1px solid rgba(170,255,0,0.4)",
                      padding: "4px 10px",
                      cursor: "pointer",
                    }}
                  >
                    VARIANTE {v}
                  </button>
                ))}
              </div>
              <div className="max-w-sm mx-auto" ref={postRef}>
                <InstagramPost variant={postVariant} />
              </div>
              <TemplateInfo
                title="Instagram Post"
                specs={["1080 × 1080 px", "Formato cuadrado", "Resolución: 72dpi mínimo"]}
                notes="Usar Space Grotesk 700 para headline. Mantener un elemento en Flux Green. No saturar con texto."
              />
            </div>
          )}

          {activeTab === "story" && (
            <div>
              <div className="max-w-sm mx-auto" ref={storyRef}>
                <InstagramStory />
              </div>
              <TemplateInfo
                title="Instagram Story"
                specs={["1080 × 1920 px", "Relación 9:16", "Safe zone: 250px top/bottom"]}
                notes="El CTA siempre en Flux Green. Máximo 2 bloques de texto. Flow pattern como elemento decorativo."
              />
            </div>
          )}

          {activeTab === "linkedin" && (
            <div>
              <div className="max-w-sm mx-auto" ref={linkedinRef}>
                <LinkedInBanner />
              </div>
              <TemplateInfo
                title="LinkedIn Banner"
                specs={["1584 × 396 px", "Relación 4:1", "Sin elementos en zona inferior izquierda (avatar superpone)"]}
                notes="Versión más corporativa. Logo + tagline a la izquierda. Servicios destacados a la derecha."
              />
            </div>
          )}

          {activeTab === "twitter" && (
            <div>
              <div className="max-w-sm mx-auto" ref={twitterRef}>
                <TwitterHeader />
              </div>
              <TemplateInfo
                title="Twitter / X Header"
                specs={["1500 × 500 px", "Relación 3:1", "Safe zone: 60px todos los lados"]}
                notes="Fondo oscuro con pattern diagonal sutil. Logo a la derecha para no interferir con foto de perfil."
              />
            </div>
          )}

          {activeTab === "profile" && (
            <div>
              <div className="flex flex-col items-center gap-8 py-4" ref={profileRef}>
                <ProfileIcon />
                <div className="text-center">
                  <p
                    style={{ fontSize: "13px", color: "#6B6A85", lineHeight: 1.6, maxWidth: "400px" }}
                  >
                    Tres variantes de foto de perfil. Prioridad: variante oscura con borde Flux Green.
                    Las otras son alternativas según contexto.
                  </p>
                </div>
              </div>
              <TemplateInfo
                title="Foto de Perfil"
                specs={["Mínimo 400 × 400 px", "Circular en Instagram/X", "Cuadrado en LinkedIn"]}
                notes="Siempre centrado. El logotipo nunca debe quedar cortado. Fondo oscuro es el principal."
              />
            </div>
          )}
        </div>

        {/* Export button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleExport}
            disabled={isExporting}
            className="flex items-center gap-3 px-6 py-3 transition-all"
            style={{
              background: isExporting ? "rgba(170,255,0,0.3)" : "#AAFF00",
              color: "#06060A",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              border: "none",
              cursor: isExporting ? "not-allowed" : "pointer",
              opacity: isExporting ? 0.6 : 1,
            }}
          >
            <Download size={18} />
            {isExporting ? "Exportando..." : "Descargar imagen para Instagram"}
          </button>
        </div>
      </div>
    </section>
  );
}

function TemplateInfo({
  title,
  specs,
  notes,
}: {
  title: string;
  specs: string[];
  notes: string;
}) {
  return (
    <div
      className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      <div
        className="p-4"
        style={{
          background: "#0F0F1A",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "9px",
            letterSpacing: "0.15em",
            color: "#7C3AFF",
            marginBottom: "10px",
          }}
        >
          ESPECIFICACIONES / {title.toUpperCase()}
        </div>
        <ul className="space-y-2">
          {specs.map((s, i) => (
            <li key={i} className="flex items-start gap-2">
              <span style={{ color: "#AAFF00", fontSize: "10px", marginTop: "2px" }}>◆</span>
              <span style={{ fontSize: "12px", color: "rgba(244,243,255,0.6)" }}>{s}</span>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="p-4"
        style={{
          background: "#0F0F1A",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "9px",
            letterSpacing: "0.15em",
            color: "#AAFF00",
            marginBottom: "10px",
          }}
        >
          NOTAS DE USO
        </div>
        <p style={{ fontSize: "12px", color: "rgba(244,243,255,0.55)", lineHeight: 1.7 }}>
          {notes}
        </p>
      </div>
    </div>
  );
}