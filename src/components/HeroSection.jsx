import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const roles = ["FrontEnd", "BackEnd", "FullStack"];

function Hero({ logoSrc }) {
  const [typedName, setTypedName] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);

  useEffect(() => {
    const fullName = "Davi Lepore";
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullName.length) {
        setTypedName(fullName.slice(0, i));
        i++;
      } else clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleVisible(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setRoleVisible(true);
      }, 260);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="bg-[#0a0f0a] min-h-screen w-full flex flex-col justify-between font-mono relative overflow-hidden box-border p-0"
    >
      <Navbar />

      {/* keyframes */}
      <style>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes cursorBlink {
          0%,100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes statusBlink {
          0%,100% { opacity: 1; }
          50% { opacity: 0.15; }
        }
        @keyframes logoFloat {
          0%,100% { opacity: 0.12; transform: scale(1); }
          50% { opacity: 0.22; transform: scale(1.05); }
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* glows */}
      <div className="absolute -top-30 -left-30 w-120 h-120 rounded-full bg-[radial-gradient(circle,rgba(57,255,100,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-15 right-40 w-[320px] h-80 rounded-full bg-[radial-gradient(circle,rgba(57,255,100,0.05)_0%,transparent_70%)] pointer-events-none" />

      {/* scan */}
      <div
        className="absolute left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(57,255,100,0.15),transparent)] pointer-events-none"
        style={{ animation: "scan 4s linear infinite" }}
      />

      {/* main */}
      <div className="flex-1 flex items-center px-16 pt-20 pb-10 gap-10">
        {/* left */}
        <div className="flex flex-col gap-5 flex-1">
          <div className="text-[52px] font-bold text-[#e8ffe8] leading-[1.05]">
            Hi, I'm <br />
            <span className="[text-shadow:0_0_20px_rgba(57,255,100,0.4)] text-[#39ff64]">
              {typedName}
            </span>
            <span
              className="text-[#39ff64] inline-block"
              style={{ animation: "cursorBlink 1.2s ease-in-out infinite" }}
            >
              |
            </span>
          </div>

          <div className="flex items-center gap-2.5 text-[22px] text-[#b0d4b0]">
            <span>Desenvolvedor</span>
            <span
              className="text-[18px] border px-3.5 py-0.75 rounded-[3px] min-w-25 text-center transition-all duration-200"
              style={{
                color: roleVisible ? "#0a0f0a" : "#39ff64",
                background: roleVisible ? "#39ff64" : "transparent",
                borderColor: "rgba(57,255,100,0.4)",
                boxShadow: roleVisible
                  ? "0 0 16px rgba(57,255,100,0.5)"
                  : "none",
                opacity: roleVisible ? 1 : 0,
                transform: roleVisible ? "translateY(0)" : "translateY(-8px)",
              }}
            >
              {roles[roleIndex]}
            </span>
          </div>

          <p className="text-[14px] text-[#b0d4b0] leading-[1.85] border-l-2 border-[rgba(57,255,100,0.3)] pl-4.5 max-w-105">
            Construindo do banco de dados à interface —<br />
            linha por linha, commit por commit.
          </p>

          <div className="flex gap-3 mt-1">
            <button
              className="text-[12px] text-[#0a0f0a] bg-[#39ff64] px-6 py-2.75 rounded-[3px] tracking-[0.08em] transition-all"
              style={{ boxShadow: "0 0 18px rgba(57,255,100,0.4)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(57,255,100,0.65)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 18px rgba(57,255,100,0.4)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              ver_projetos()
            </button>

            <button
              className="text-[12px] text-[#39ff64] border px-6 py-2.75 rounded-[3px] tracking-[0.08em] transition-all"
              style={{ borderColor: "rgba(57,255,100,0.35)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(57,255,100,0.07)";
                e.currentTarget.style.borderColor = "#39ff64";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(57,255,100,0.35)";
              }}
            >
              contato.send()
            </button>
          </div>
        </div>

        {/* logo */}
        <div className="relative shrink-0">
          {[
            { top: -4, left: -4, borderWidth: "2px 0 0 2px" },
            { top: -4, right: -4, borderWidth: "2px 2px 0 0" },
            { bottom: -4, left: -4, borderWidth: "0 0 2px 2px" },
            { bottom: -4, right: -4, borderWidth: "0 2px 2px 0" },
          ].map((s, i) => (
            <div
              key={i}
              className="absolute w-3.5 h-3.5 border-[#39ff64] border-solid"
              style={s}
            />
          ))}

          <div className="w-55 h-55 border-[1.5px] border-[rgba(57,255,100,0.25)] bg-[#0f180f] flex items-center justify-center relative overflow-hidden">
            {logoSrc ? (
              <img
                src={logoSrc}
                alt="Logo"
                className="w-full h-full object-cover block"
              />
            ) : (
              <span
                className="text-[52px] font-bold text-[#39ff64]"
                style={{ animation: "logoFloat 3s ease-in-out infinite" }}
              >
                {"</>"}
              </span>
            )}

            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(57,255,100,0.07)_0%,transparent_60%)] pointer-events-none" />
          </div>

          <div className="flex items-center gap-2 mt-3.5 text-[11px] text-[#39ff64] tracking-[0.12em]">
            <span
              className="w-2 h-2 rounded-full bg-[#39ff64] inline-block"
              style={{
                boxShadow: "0 0 8px #39ff64",
                animation: "statusBlink 1.4s ease-in-out infinite",
              }}
            />
            disponível para projetos
          </div>

          <p className="text-[10px] text-[#2a4a2e] tracking-widest mt-1 text-center">
            // niterói, rio de janeiro
          </p>
        </div>
      </div>

      {/* divider */}
      <div className="h-px mx-16 bg-[linear-gradient(90deg,transparent,rgba(57,255,100,0.12),transparent)]" />
    </section>
  );
}

export default Hero;
