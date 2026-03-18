

type ServiceCardProps = {
    icon: React.ReactNode;
    index: number;
    title: string;
    description: string;
    problemDescription: string;
    solutionPoints: string[];
    benefitsDescription: string;
}


export const ServiceCard = ({ icon, index, title, description, problemDescription, solutionPoints, benefitsDescription }: ServiceCardProps) => {
    return (

        <div className="min-w-[88vw] sm:min-w-[420px] lg:min-w-[460px] min-h-[596px] flex flex-col h-full bg-[#050507] border border-[#1e1e20] rounded-lg p-8">
            <div className="flex justify-between">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white">{icon}</div>
                <span className="text-zinc-500 text-[12px]">0{index}</span>
            </div>
            <div className="mt-6">
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-zinc-300 text-sm leading-relaxed font-inter">
                    {description}
                </p>
            </div>
            <div className="flex flex-col gap-3 bg-[#0d0d0f] p-5 rounded-3xl border border-[#1e1e20] mt-6">
                <h6 className="text-zinc-500 text-xs">Problema que resolve</h6>
                <p className="text-zinc-300 text-sm font-inter">{problemDescription}</p>
            </div>
            <div className="mt-6">
                <h6 className="text-zinc-500 text-xs">Solução</h6>
                <div className="mt-3 flex flex-wrap gap-2">
                    {solutionPoints && solutionPoints.map((point, i) => (
                        <span key={i} className="text-zinc-300 text-xs py-2 px-3 rounded-3xl border border-[#1e1e20]">
                            {point}
                        </span>
                    ))}
                </div>
            </div>
            <div className="mt-6 border-t border-white/10 pt-6">
                <h6 className="text-zinc-500 text-xs">Beneficios</h6>
                <p className="text-zinc-300 text-sm font-inter mt-3">{benefitsDescription}</p>
            </div>
        </div>

    )
};