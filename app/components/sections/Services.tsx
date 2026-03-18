
import { ServicesAnimation } from "../ui/ServicesAnimation";
import { HorizontalScrollService } from "../ui/HorizontalScrollService";

export const Services = () => {

  return (
    <section id="services" className="py-24 px-6 bg-surface/50">
      <div className="container mx-auto">

        {/* SEO */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Serviços
          </h2>
          <p className="text-lightGray">
            Problemas diferentes exigem soluções diferentes — nós entregamos todas em um só lugar.
          </p>
        </div>

        <ServicesAnimation>
          <HorizontalScrollService />
        </ServicesAnimation>
      </div>
    </section>
  );
};