import { TriangleAlert } from 'lucide-react';
import { DifferentialsCard } from '../ui/DifferentialsCard';

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
        <div className="flex  gap-6">

          <DifferentialsCard />

        </div>

      </div>
    </section>
  );
};