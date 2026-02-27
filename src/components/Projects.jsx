import lamborghini from "../assets/lambo.jpg";

function Projects() {
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

  return (
    <section className="min-h-screen w-full text-white flex flex-col justify-center space-y-20">
      <h2 className="text-center text-5xl font-bold -tracking-[-0.5rem]">
        Meus Projetos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10 w-[70%] mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col h-full gap-4 p-4 rounded-lg border border-[rgba(255,255,255,0.05)] hover:scale-105 transition-transform duration-500"
          >
            <img
              src={project.img}
              alt={project.name}
              className="rounded-md object-cover"
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {project.techs.map((tech, techIndex) => (
                <p
                  key={techIndex}
                  className="px-2 border-2 border-[#2D1C7F] rounded-full text-center text-sm"
                >
                  {tech}
                </p>
              ))}
            </div>

            <h3 className="text-center font-semibold">{project.name}</h3>

            <p className="text-center text-sm text-gray-300 line-clamp-4">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
