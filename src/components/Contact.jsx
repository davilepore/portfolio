import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section className="min-h-screen w-full bg-[rgba(255,255,255,0.05)] flex justify-center rounded-full items-center text-white mt-50">
      <div className="p-10 gap-10 flex justify-center">
        <div className="flex flex-col w-content gap-20 p-6">
          <h2 className="text-start text-5xl font-bold -tracking-[-0.5rem]">
            Fale Comigo
          </h2>
          <div className="space-y-4">
            <div className="flex flex-row items-center gap-4">
              <FaWhatsapp
                size={40}
                className="text-[#25D366] drop-shadow-[0_0_8px_rgba(37,211,102,0.5)]"
              />
              <p className="p-0 m-0">Whatsapp</p>
            </div>

            <div className="flex flex-row items-center gap-4">
              <div className="relative group cursor-pointer">
                <svg width="0" height="0">
                  <radialGradient
                    id="instagram-gradient"
                    r="150%"
                    cx="30%"
                    cy="107%"
                  >
                    <stop stopColor="#fdf497" offset="0%" />
                    <stop stopColor="#fdf497" offset="5%" />
                    <stop stopColor="#fd5949" offset="45%" />
                    <stop stopColor="#d6249f" offset="60%" />
                    <stop stopColor="#285AEB" offset="90%" />
                  </radialGradient>
                </svg>
                <FaInstagram
                  size={40}
                  style={{ fill: "url(#instagram-gradient)" }}
                  className="drop-shadow-[0_0_8px_rgba(214,36,159,0.5)]"
                />
              </div>
              <p className="p-0 m-0">Instagram</p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <FaEnvelope
                size={40}
                className="text-[#8B5CF6] drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]"
              />
              <p className="p-0 m-0">E-mail</p>
            </div>
          </div>
        </div>
        <div className="w-15 text-5xl flex justify-center items-center font-bold">
          <h2>OU</h2>
        </div>
        <div className="flex w-full justify-center items-center flex-col max-w-150 p-6 border border-[rgba(255,255,255,0.01)] rounded-2xl">
          <h2 className="mb-6 text-2xl">Envie uma Mensagem</h2>
          <form
            action="#"
            className="flex flex-col gap-6 w-[70%] items-center p-6 rounded-2xl"
          >
            <div className="w-full">
              <label
                for="first_name"
                class="block mb-2.5 text-sm font-medium text-heading"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-md focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="w-full">
              <label
                for="message"
                class="block mb-2.5 text-sm font-medium text-heading"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-md focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <button className="bg-[#25D366] p-2 rounded-md w-[80%] hover:translate-y-1 transition-all duration-300 cursor-pointer">
              Enviar para Whatsapp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
