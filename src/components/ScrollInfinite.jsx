import logohtml from "../assets/vecteezy_the-html5-logo-with-the-number-5-in-the-center_66386005.png";
import logojs from "../assets/javascript-logo-javascript-icon-transparent-free-png.png";
import reactlogo from "../assets/react.svg";
import tailwindlogo from "../assets/Tailwind_CSS_Logo.svg.png";
import nextlogo from "../assets/next_js_logo_icon_145038.png";
import nodelogo from "../assets/free-node-js-logo-icon-svg-download-png-3030179.png";
import postgrelogo from "../assets/Postgresql_elephant.svg.png";

function ScrollInfinite() {
  const skills = [
    { img: logohtml, name: "HTML" },
    { img: logojs, name: "JavaScript" },
    { img: reactlogo, name: "React" },
    { img: tailwindlogo, name: "Tailwind CSS" },
    { img: nextlogo, name: "Next.js" },
    { img: nodelogo, name: "Node.js" },
    { img: postgrelogo, name: "PostgreSQL" },
  ];

  return (
    <section
      id="container_scroll"
      className="max-w-full overflow-hidden absolute bottom-0"
    >
      <div className="infinite-scroll-div flex gap-12">
        {Array.from({ length: 5 }).map((_, i) =>
          skills.map((skill) => (
            <div key={`${i}-${skill.name}`} className="scroll_item">
              <img src={skill.img} alt={`${skill.name} Logo`} />
              <h2 className="text-[#E5E7EB]">{skill.name}</h2>
            </div>
          )),
        )}
      </div>
    </section>
  );
}

export default ScrollInfinite;
