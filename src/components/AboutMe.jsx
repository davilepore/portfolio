import myimg from "../assets/myimg.png";
import { Undo } from "lucide-react";
import gsap from "gsap";
import { useLayoutEffect } from "react";

function AboutMe() {
  useLayoutEffect(() => {
    gsap.to(
      ".arrow",

      {
        opacity: 1,
        duration: 0.75,
        ease: "power3.out",
        repeat: -1,
        yoyo: true,
      },
    );
    return () => gsap.killTweensOf(".arrow");
  }, []);

  return (
    <section className="w-full min-h-screen text-white flex flex-col space-y-20 relative p-6">
      <h2 className="text-center text-5xl font-bold -tracking-[-0.5rem]">
        Sobre Mim
      </h2>
      <div className="flex justify-around m-0">
        <Undo
          className="opacity-0 arrow scale-x-[-1] "
          size={200}
          strokeWidth={1}
          color="#2D1C7F"
        />
        <h2>
          Transformo ideias em interfaces que funcionam, performam e encantam.
        </h2>
        <Undo
          className="opacity-1 arrow "
          size={200}
          strokeWidth={1}
          color="#2D1C7F"
        />
      </div>
      <div className="flex flex-row gap-18 justify-center h-125 items-center">
        <div className="flex items-center flex-col">
          <img
            src={myimg}
            alt="Minha foto"
            className="w-55 h-55 border border-[#2D1C7F]"
          />
        </div>
        <div className="rounded-md  h-[80%] w-[30%] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)]">
          <p className="p_aboutme p-4 h-full text-[18px] leading-10 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            adipisci quibusdam veritatis exercitationem? Dolorem deserunt, dolor
            beatae ratione blanditiis laborum quisquam vel a amet molestiae in,
            vitae accusantium ex sapiente.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
