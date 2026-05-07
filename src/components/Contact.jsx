import { useState } from "react";

const links = [
  {
    label: "WhatsApp",
    handle: "// resposta rápida",
    color: "#25D366",
    bg: "rgba(37,211,102,0.1)",
    href: "https://wa.me/21972505271?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20projetos!",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.565 4.13 1.545 5.848L.057 23.272c-.06.317.228.598.537.537l5.516-1.469A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.796 9.796 0 01-5.02-1.376l-.356-.213-3.722.991.999-3.639-.234-.375A9.796 9.796 0 012.182 12C2.182 6.56 6.56 2.182 12 2.182S21.818 6.56 21.818 12 17.44 21.818 12 21.818z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    handle: "// @davilepore_",
    color: "#d6249f",
    bg: "rgba(214,36,159,0.1)",
    href: "https://instagram.com/davilepore_",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "E-mail",
    handle: "// davileporedev@email.com",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.1)",
    href: "mailto:davileporedev@email.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
];

function ContactLink({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "16px 18px",
        border: `1px solid ${hovered ? "rgba(57,255,100,0.4)" : "rgba(57,255,100,0.12)"}`,
        background: hovered ? "rgba(57,255,100,0.06)" : "#0f180f",
        borderRadius: 3,
        cursor: "pointer",
        textDecoration: "none",
        transform: hovered ? "translateX(4px)" : "translateX(0)",
        transition: "all 0.2s ease",
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: item.bg,
          color: item.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {item.icon}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{ fontSize: 13, color: "#b0d4b0", letterSpacing: "0.05em" }}
        >
          {item.label}
        </span>
        <span style={{ fontSize: 11, color: "#4a7a50", marginTop: 2 }}>
          {item.handle}
        </span>
      </div>
      <span
        style={{
          marginLeft: "auto",
          color: "#39ff64",
          opacity: 0.4,
          fontSize: 16,
        }}
      >
        →
      </span>
    </a>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [btnHovered, setBtnHovered] = useState(false);

  const handleSubmit = () => {
    const text = encodeURIComponent(`Olá, sou ${name}!\n\n${message}`);
    window.open(`https://wa.me/21972505271?text=${text}`, "_blank");
  };

  const inputStyle = {
    background: "#0f180f",
    border: "1px solid rgba(57,255,100,0.15)",
    color: "#e8ffe8",
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 12,
    padding: "10px 14px",
    borderRadius: 3,
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contato"
      className="bg-[#0a0f0a] min-h-screen px-6 sm:px-10 lg:px-20 py-14 font-mono relative overflow-hidden"
    >
      <style>{`
        @keyframes statusBlink { 0%,100% { opacity: 1; } 50% { opacity: 0.15; } }
        input::placeholder, textarea::placeholder { color: #2a4a2e; }
        input:focus, textarea:focus { border-color: rgba(57,255,100,0.45) !important; box-shadow: 0 0 0 2px rgba(57,255,100,0.07); }
      `}</style>

      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(57,255,100,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Header */}

      <h2 className="text-4xl font-bold text-[#e8ffe8] leading-tight mb-1">
        Fale
        <br />
        <span className="text-[#39ff64]">Comigo</span>
      </h2>
      <p className="text-[13px] text-[#4a7a50] tracking-[0.05em] mb-10">
        Disponível para projetos freelance e oportunidades.
      </p>

      {/* Layout: coluna em mobile, dois lados em desktop */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-start">
        {/* Esquerda / topo: links */}
        <div className="flex flex-col gap-[14px] w-full lg:flex-1 lg:pr-10">
          <p className="text-[10px] text-[#39ff64] opacity-50 tracking-[0.15em] mb-1">
            // canais diretos
          </p>
          {links.map((item) => (
            <ContactLink key={item.label} item={item} />
          ))}
        </div>

        {/* Divisor — horizontal em mobile, vertical em desktop */}
        <div className="w-full h-px lg:w-px lg:h-auto lg:self-stretch bg-[rgba(57,255,100,0.12)]" />

        {/* Direita / base: formulário */}
        <div className="flex flex-col gap-4 w-full lg:flex-1 lg:pl-10">
          <p className="text-[10px] text-[#39ff64] opacity-50 tracking-[0.15em] mb-1">
            // enviar mensagem
          </p>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] text-[#4a7a50] tracking-[0.15em] uppercase">
              nome
            </label>
            <input
              type="text"
              placeholder="seu_nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] text-[#4a7a50] tracking-[0.15em] uppercase">
              mensagem
            </label>
            <textarea
              placeholder="// escreva aqui..."
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ ...inputStyle, resize: "none" }}
            />
          </div>

          <button
            onClick={handleSubmit}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: "#0a0f0a",
              background: "#39ff64",
              border: "none",
              padding: "12px 24px",
              borderRadius: 3,
              cursor: "pointer",
              letterSpacing: "0.1em",
              boxShadow: btnHovered
                ? "0 0 30px rgba(57,255,100,0.6)"
                : "0 0 18px rgba(57,255,100,0.35)",
              transform: btnHovered ? "translateY(-1px)" : "translateY(0)",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
            enviar_via_whatsapp()
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
