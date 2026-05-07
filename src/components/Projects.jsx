import doces1 from "../assets/doces1.png";
import doces2 from "../assets/doces2.png";
import doces3 from "../assets/doces3.png";
import doces4 from "../assets/doces4.png";
import doces5 from "../assets/doces5.png";
import fisio1 from "../assets/fisio1.png";
import fisio2 from "../assets/fisio2.png";
import fisio3 from "../assets/fisio3.png";
import fisio4 from "../assets/fisio4.png";
import casal1 from "../assets/casal1.png";
import casal2 from "../assets/casal2.png";
import casal3 from "../assets/casal3.png";
import casal4 from "../assets/casal4.png";
import { useState } from "react";

const projects = [
  {
    techs: [
      "React",
      "Typescript",
      "Next.js",
      "Tailwind",
      "Node.js",
      "Postgres",
    ],
    name: "Site de Doces",
    img: doces1,
    demonstration: [doces1, doces2, doces3, doces4, doces5],
    description:
      "Um site completo para uma confeitaria fictícia, com catálogo de produtos, carrinho de compras, área de contato e integrado com Whatsapp. O frontend foi construído com React, Typescript, Next.js e Tailwind, enquanto o backend utiliza Node.js, PostgreSQL e Prisma para garantir uma experiência fluida e responsiva.",
  },
  {
    techs: ["React", "Javascrit", "Tailwind", "Vite"],
    name: "Landing Page de Fisioterapia",
    img: fisio1,
    demonstration: [fisio1, fisio2, fisio3, fisio4],
    description:
      "Um site completo para uma clínica de fisioterapia, com informações sobre os serviços, equipe e localização. O frontend foi construído com React, Javascript, Tailwind e Vite para garantir uma experiência responsiva e moderna.",
  },
  {
    techs: ["React", "Typescript", "Tailwind", "Next.js"],
    name: "Template Site de Casal",
    img: casal3,
    demonstration: [casal1, casal2, casal3, casal4],
    description:
      "Um template de site para casais, ideal para compartilhar histórias, fotos e informações sobre eventos especiais e presentear. Construído com React, Typescript, Tailwind e Next.js, o site oferece uma experiência elegante e personalizada para celebrar momentos únicos.",
  },
];

function ProjectCard({ project, index, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className="group flex flex-col h-full gap-4 p-4 rounded-sm border border-[rgba(57,255,100,0.12)] bg-[rgba(57,255,100,0.02)] hover:border-[rgba(57,255,100,0.35)] hover:bg-[rgba(57,255,100,0.05)] hover:shadow-[0_0_24px_rgba(57,255,100,0.08)] transition-all duration-300 relative overflow-hidden cursor-pointer"
    >
      {/* corner brackets */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#39ff64] opacity-60" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#39ff64] opacity-60" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#39ff64] opacity-60" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#39ff64] opacity-60" />

      {/* index label */}
      <span className="absolute top-3 left-3 text-[10px] font-mono text-[#39ff64] opacity-30 tracking-widest">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* image */}
      <div className="relative overflow-hidden rounded-sm mt-2">
        <img
          src={project.img}
          alt={project.name}
          className="w-full h-40 object-cover rounded-sm group-hover:scale-105 transition-transform duration-500 brightness-75 group-hover:brightness-90"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0f0a] via-transparent to-transparent" />
      </div>

      {/* name */}
      <h3 className="font-mono font-semibold text-[#e8ffe8] text-sm tracking-wide text-center group-hover:text-[#39ff64] transition-colors duration-200">
        {project.name}
      </h3>

      {/* description */}
      <p className="font-mono text-xs text-[#7aab7a] leading-relaxed line-clamp-3 text-center border-l border-[rgba(57,255,100,0.2)] pl-3">
        {project.description}
      </p>

      {/* techs */}
      {project.techs.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-[rgba(57,255,100,0.1)]">
          {project.techs.map((tech, i) => (
            <span
              key={i}
              className="font-mono text-[10px] text-[#39ff64] border border-[rgba(57,255,100,0.25)] bg-[rgba(57,255,100,0.04)] px-2 py-0.5 rounded-sm tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxSrc, setLightboxSrc] = useState(null);
  return (
    <section
      id="projetos"
      className="min-h-screen w-full bg-[#0a0f0a] font-mono flex flex-col justify-center py-24 px-6 relative overflow-hidden"
    >
      {/* ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(57,255,100,0.04) 0%, transparent 70%)",
        }}
      />

      {/* heading */}
      <div className="text-center mb-16">
        <span className="text-[11px] text-[#39ff64] opacity-50 tracking-[0.2em]">
          // meus trabalhos
        </span>
        <h2 className="text-4xl font-bold text-[#e8ffe8] mt-2 tracking-tight">
          Meus{" "}
          <span
            className="text-[#39ff64]"
            style={{ textShadow: "0 0 20px rgba(57,255,100,0.4)" }}
          >
            Projetos
          </span>
        </h2>
        <div className="w-16 h-px bg-linear-to-r from-transparent via-[#39ff64] to-transparent mx-auto mt-4 opacity-50" />
      </div>

      {/* grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            onSelect={() => setSelectedProject(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <>
          <div
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-[rgba(10,15,10,0.95)] backdrop-blur-sm flex items-center justify-center p-6"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0f0a] border border-[rgba(57,255,100,0.2)] p-6 rounded-sm max-w-2xl w-full"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 gap-4">
                  <h3 className="text-lg font-bold text-[#39ff64]">
                    {selectedProject.name}
                  </h3>
                  <p className="text-sm text-[#7aab7a] max-h-40 overflow-y-auto">
                    {selectedProject.description}
                  </p>
                  {selectedProject.techs.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[rgba(57,255,100,0.1)]">
                      {selectedProject.techs.map((tech, i) => (
                        <span
                          key={i}
                          className="font-mono text-[10px] text-[#39ff64] border border-[rgba(57,255,100,0.25)] bg-[rgba(57,255,100,0.04)] px-2 py-0.5 rounded-sm tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {selectedProject.demonstration?.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 lg:w-1/2">
                    {selectedProject.demonstration.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxSrc(src);
                        }}
                        className="w-full h-32 object-cover rounded-sm cursor-pointer
                             border border-transparent hover:border-[#39ff64]
                             transition-all duration-200 hover:opacity-80"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {lightboxSrc && (
            <div
              onClick={() => setLightboxSrc(null)}
              className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
            >
              <img
                src={lightboxSrc}
                className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
              />
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default Projects;
