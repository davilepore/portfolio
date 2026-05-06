import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import myimg from "../assets/myimg.png";

const stack = [
  "React",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Docker",
  "REST APIs",
];

const stats = [
  { num: "3+", label: "anos de experiência" },
  { num: "20+", label: "projetos entregues" },
  { num: "∞", label: "café consumido" },
];

function AboutMe() {
  const dotRef = useRef(null);

  useLayoutEffect(() => {
    const tween = gsap.to(dotRef.current, {
      opacity: 0.2,
      duration: 1,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    });
    return () => tween.kill();
  }, []);

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-6 py-12 md:px-12 md:py-24"
      style={{
        background: "#0a0f0a",
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      {/* Background Orbs */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: -120,
          left: -120,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(57,255,100,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Container Principal Centralizado */}
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="mb-12">
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 42px)", // Fonte responsiva
              fontWeight: 700,
              color: "#e8ffe8",
              lineHeight: 1.1,
              marginBottom: 8,
            }}
          >
            Olá, eu sou
            <br />
            <span style={{ color: "#39ff64" }}>Dev Fullstack</span>
          </h2>
          <p
            style={{
              fontSize: 14,
              color: "#4a7a50",
              letterSpacing: "0.05em",
            }}
          >
            Construindo do banco de dados à interface — linha por linha.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Lado da Imagem */}
          <div className="relative shrink-0 mx-auto md:mx-0">
            {[
              { top: -6, left: -6, borderWidth: "2px 0 0 2px" },
              { top: -6, right: -6, borderWidth: "2px 2px 0 0" },
              { bottom: -6, left: -6, borderWidth: "0 0 2px 2px" },
              { bottom: -6, right: -6, borderWidth: "0 2px 2px 0" },
            ].map((s, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  width: 16,
                  height: 16,
                  borderColor: "#39ff64",
                  borderStyle: "solid",
                  ...s,
                }}
              />
            ))}

            <div
              style={{
                width: 200,
                height: 200,
                border: "1.5px solid #39ff64",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={myimg}
                alt="Minha foto"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(57,255,100,0.08) 0%, transparent 60%)",
                }}
              />
            </div>

            <div
              className="flex items-center gap-2 mt-4 justify-center md:justify-start"
              style={{ fontSize: 12, color: "#39ff64" }}
            >
              <span
                ref={dotRef}
                style={{
                  display: "inline-block",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#39ff64",
                  boxShadow: "0 0 8px #39ff64",
                }}
              />
              disponível para projetos
            </div>
          </div>

          {/* Lado do Conteúdo */}
          <div className="flex flex-col gap-8 flex-1">
            <p
              style={{
                fontSize: 16,
                color: "#b0d4b0",
                lineHeight: 1.8,
                fontFamily: "system-ui, -apple-system, sans-serif",
                borderLeft: "2px solid #39ff64",
                paddingLeft: 20,
              }}
            >
              Sou desenvolvedor{" "}
              <strong
                style={{
                  color: "#39ff64",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                fullstack
              </strong>{" "}
              apaixonado por transformar ideias complexas em produtos digitais
              que funcionam de ponta a ponta. Cuido tanto da experiência do
              usuário quanto da arquitetura que sustenta tudo por baixo.
            </p>

            <div>
              <p
                style={{
                  fontSize: 11,
                  color: "#39ff64",
                  opacity: 0.6,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                // stack principal
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: 12,
                      color: "#39ff64",
                      border: "1px solid rgba(57,255,100,0.3)",
                      background: "rgba(57,255,100,0.05)",
                      padding: "4px 12px",
                      borderRadius: 3,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {stats.map(({ num, label }) => (
                <div
                  key={label}
                  style={{
                    background: "#0f180f",
                    border: "1px solid rgba(57,255,100,0.15)",
                    padding: "16px",
                    borderRadius: 4,
                  }}
                >
                  <div
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      color: "#39ff64",
                      marginBottom: 4,
                    }}
                  >
                    {num}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#4a7a50",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
