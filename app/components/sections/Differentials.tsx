export const Differentials = () => {
  return (
    <section className="py-24 px-6 bg-black text-white" id="differentials">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Os pontos que mais travam o crescimento
          </h2>
          <p className="text-lightGray">
            Toda empresa esbarra em três momentos críticos: atrair, convencer e executar. Quando um deles não funciona como deveria, o crescimento desacelera.
          </p>
        </div>

        {/* GRID */}
        <div className="flex flex-1 gap-8">

          {/* BLOCO 1 */}
          <div className="bg-[#050507] border border-[#1e1e20] rounded-lg p-6 ">
            
            <h3 className="text-xl font-medium mb-4">
              Marketing e vendas sem estrutura
            </h3>

            <p className="text-lightGray mb-4">
              A empresa investe para atrair, mas perde no momento mais crítico:
              a conversão.
            </p>

            <ul className="space-y-2 text-sm text-gray-400">
              <li>Mensagem confusa</li>
              <li>CTA fraco</li>
              <li>Perda de oportunidade no primeiro contato</li>
            </ul>
          </div>

          {/* BLOCO 2 */}
          <div className="bg-[#050507] border border-[#1e1e20] rounded-lg p-6 ">
            <h3 className="text-xl font-medium mb-4">
              Autoridade digital abaixo do real valor
            </h3>

            <p className="text-lightGray mb-4">
              Quem pesquisa sua empresa deveria sair mais seguro — quando isso não acontece,
              a venda fica mais difícil e mais cara.
            </p>

            <ul className="space-y-2 text-sm text-gray-400">
              <li>Site desatualizado</li>
              <li>Presença fraca no Google</li>
              <li>Concorrentes aparentando mais confiança</li>
            </ul>
          </div>

          {/* BLOCO 3 */}
          <div className="bg-[#050507] border border-[#1e1e20] rounded-lg p-6 ">
            <h3 className="text-xl font-medium mb-4">
              Operação travada por tarefas manuais
            </h3>

            <p className="text-lightGray mb-4">
              Sem sistemas e automação, a equipe cresce junto com o caos —
              e não com o resultado.
            </p>

            <ul className="space-y-2 text-sm text-gray-400">
              <li>Planilhas espalhadas</li>
              <li>Copia e cola</li>
              <li>Falhas por repetição</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};