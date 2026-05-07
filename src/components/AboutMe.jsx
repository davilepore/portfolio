import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../assets/logo.png";

const stack = [
  "Next.js",
  "React.js",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "PostgreSQL",
  "Python",
  "Java",
];

const stats = [
  { num: "0", label: "anos de experiência" },
  { num: "5+", label: "projetos entregues" },
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
      id="sobre"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-6 py-12 md:px-12 md:py-24 bg-[#0a0f0a] font-mono"
    >
      {/* Background Orb */}

      <div className="pointer-events-none absolute -top-30 -left-30 w-120 h-120 rounded-full bg-[radial-gradient(circle,rgba(57,255,100,0.07)_0%,transparent_70%)]" />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-[clamp(32px,5vw,42px)] font-bold text-[#e8ffe8] leading-tight mb-2">
            Conheça mais
            <br />
            <span className="text-[#39ff64]">sobre mim</span>
          </h2>

          <p className="text-[14px] text-[#4a7a50] tracking-wider">
            Construindo do banco de dados à interface — linha por linha.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Imagem */}
          <div className="relative shrink-0 mx-auto md:mx-0">
            {/* Cantos */}
            <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#39ff64]" />
            <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#39ff64]" />
            <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#39ff64]" />
            <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#39ff64]" />

            <div className="w-50 h-50 border border-[#39ff64] overflow-hidden relative">
              <img
                src={logo}
                alt="Minha foto"
                className="w-full h-auto block relative -top-4"
              />

              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(135deg,rgba(57,255,100,0.08)_0%,transparent_60%)]" />
            </div>

            {/* Status */}
            <div className="flex items-center gap-2 mt-4 justify-center md:justify-start text-[12px] text-[#39ff64]">
              <span
                ref={dotRef}
                className="inline-block w-2 h-2 rounded-full bg-[#39ff64] shadow-[0_0_8px_#39ff64]"
              />
              disponível para projetos
            </div>
          </div>

          {/* Conteúdo */}
          <div className="flex flex-col gap-8 flex-1">
            <p className="text-[16px] text-[#b0d4b0] leading-[1.8] font-sans border-l-2 border-[#39ff64] pl-5">
              Sou desenvolvedor{" "}
              <strong className="text-[#39ff64] font-mono">fullstack</strong>{" "}
              apaixonado por transformar ideias complexas em produtos digitais
              que funcionam de ponta a ponta. Cuido tanto da experiência do
              usuário quanto da arquitetura que sustenta tudo por baixo.
            </p>

            {/* Stack */}
            <div>
              <p className="text-[11px] text-[#39ff64]/60 tracking-[0.15em] uppercase mb-3">
                // stack principal
              </p>

              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[12px] text-[#39ff64] border border-[#39ff644d] bg-[#39ff640d] px-3 py-1 rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {stats.map(({ num, label }) => (
                <div
                  key={label}
                  className="bg-[#0f180f] border border-[#39ff6426] p-4 rounded"
                >
                  <div className="text-[24px] font-bold text-[#39ff64] mb-1">
                    {num}
                  </div>
                  <div className="text-[11px] text-[#4a7a50] uppercase">
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
