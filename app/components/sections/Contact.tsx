
export const Contact = () => {
  const inputStyle = "w-full bg-surface border border-muted p-4 rounded-lg text-white focus:border-white focus:outline-none transition-all duration-300";

  return (
    <section className="py-24 px-6 bg-surface/30" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-display font-bold text-white mb-12">Vamos construir algo juntos?</h2>
        <form className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Seu Nome" className={inputStyle} />
            <input type="email" placeholder="Seu E-mail" className={inputStyle} />
          </div>
          <textarea placeholder="Fale sobre seu projeto" rows={5} className={inputStyle}></textarea>
          <button className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-accent transition-colors">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};