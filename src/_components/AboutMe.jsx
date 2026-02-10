import myimg from "../assets/myimg.png";

function AboutMe() {
  return (
    <section className="w-full min-h-screen text-white flex flex-col space-y-20">
      <h2 className="text-center text-5xl font-bold -tracking-[-0.5rem]">
        Sobre Mim
      </h2>
      <div className="flex flex-row gap-18 justify-center h-125 items-center">
        <img src={myimg} alt="Minha foto" className="w-55 h-55 rounded-full" />
        <div className="rounded-2xl p-px bg-linear-to-br from-white/20 to-transparent h-full w-[50%]">
          <p className="p_aboutme bg-[#0B0F14] rounded-[15px] p-4 h-full text-[18px] leading-7 text-white">
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
