import lamborghini from "../assets/lambo.jpg";

const projects = [
  {
    techs: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Node.js",
      "Express",
      "Postgres",
    ],
    name: "Site de Doces",
    img: lamborghini,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate odit eligendi fugit voluptas rerum architecto similique voluptatum fugiat totam quae, eius dolor in, nihil minima facere iusto eveniet consectetur officiis? 1",
  },
  {
    techs: ["HTML", "CSS", "Javascript", "Bootstrap"],
    name: "Site Barbearia",
    img: lamborghini,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate odit eligendi fugit voluptas rerum architecto similique voluptatum fugiat totam quae, eius dolor in, nihil minima facere iusto eveniet consectetur officiis? 2",
  },
  {
    techs: ["HTML", "CSS", "Javascript"],
    name: "Site Contagem de Itens",
    img: lamborghini,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate odit eligendi fugit voluptas rerum architecto similique voluptatum fugiat totam quae, eius dolor in, nihil minima facere iusto eveniet consectetur officiis? 3",
  },
  {
    techs: [],
    name: "Project 4",
    img: lamborghini,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate odit eligendi fugit voluptas rerum architecto similique voluptatum fugiat totam quae, eius dolor in, nihil minima facere iusto eveniet consectetur officiis? 4",
  },
  {
    techs: [],
    name: "Project 5",
    img: lamborghini,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate odit eligendi fugit voluptas rerum architecto similique voluptatum fugiat totam quae, eius dolor in, nihil minima facere iusto eveniet consectetur officiis? 5",
  },
  {
    techs: ["HTML", "CSS", "Javascript", "Bootstrap"],
    name: "Project 6",
    img: lamborghini,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate odit eligendi fugit voluptas rerum architecto similique voluptatum fugiat totam quae, eius dolor in, nihil minima facere iusto eveniet consectetur officiis? 6",
  },
];

function ProjectCard({ project, index }) {
  return (
    <div className="group flex flex-col h-full gap-4 p-4 rounded-sm border border-[rgba(57,255,100,0.12)] bg-[rgba(57,255,100,0.02)] hover:border-[rgba(57,255,100,0.35)] hover:bg-[rgba(57,255,100,0.05)] hover:shadow-[0_0_24px_rgba(57,255,100,0.08)] transition-all duration-300 relative overflow-hidden">
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
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
