export const CTA = () => {
  return (
    <section className="py-20 bg-[#F2F2F2]" id="contato">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif-brand text-4xl md:text-6xl text-[#3B3B3B] mb-8">
          Pronto para organizar o caos?
        </h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Junte-se a centenas de gestores que recuperaram o controle do tempo
          com o Turnus.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-[#3B3B3B] text-[#C3FFD4] px-8 py-4 rounded-full font-medium text-lg hover:bg-black transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Começar Agora
          </button>
          <button className="bg-transparent border border-[#3B3B3B] text-[#3B3B3B] px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-200 transition-all">
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  );
};
