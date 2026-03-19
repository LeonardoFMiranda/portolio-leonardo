import { Layers, MessageSquareCheck, TriangleAlert } from "lucide-react";





const diferentials = [
    {
        title: "Landing Page",
        index: 1,
        description: "Do clique à venda: transforme curiosidade em oportunidades reais",
        icon: <TriangleAlert />,
        problemDescription: "Você consegue atenção, mas sua página não sabe converter isso em negócio",
        solutionPoints: ["Mensagem Principal Impactante", "CTA forte", "Fluxo Pensado para Vender"],
        benefitsDescription: "Comunicação direta: deixa claro quem você serve e por que escolher você."
    },
    {
        title: "Site Institucional",
        index: 2,
        description: "Presença que inspira credibilidade e atrai clientes de alto valor",
        icon: <MessageSquareCheck />,
        problemDescription: "Presença digital fraca: site desatualizado sabota sua credibilidade e afasta clientes",
        solutionPoints: ["Página institucional", "Conteúdo Relevante", "Experiência de Usuário Otimizada", "Prova de credibilidade"],
        benefitsDescription: "Quando pesquisam você online, encontram um profissional. Não uma dúvida."
    },
    {
        icon: <Layers />,
        index: 3,
        title: "Dashboard Executivo",
        description: "Visão geral dos indicadores mais importantes do seu negócio em tempo real.",
        problemDescription: "Empresas perdem tempo analisando dados espalhados e não conseguem tomar decisões rápidas.",
        solutionPoints: [
            "KPIs centralizados",
            "Visão de receita e custos",
            "Dados em tempo real",
        ],
        benefitsDescription: "Decisões mais rápidas, visão estratégica clara e ganho de produtividade na gestão."
    }
];


export const DifferentialsCard = () => {
    return (

        <>
            {diferentials.map((diferential, i) => {
                <div className="min-w-[88vw] sm:min-w-[420px] lg:min-w-[460px] min-h-[596px] flex flex-col h-full bg-[#050507] border border-[#1e1e20] rounded-lg p-8">
                    <div className="flex justify-between">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white">{diferential.icon}</div>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{diferential.title}</h3>
                    </div>
                    <p className="text-zinc-300 mb-4">
                        {diferential.problemDescription}
                    </p>

                    <ul className="space-y-2 text-sm text-gray-400">
                        {diferential.solutionPoints && diferential.solutionPoints.map((point, i) => (
                            <li className='flex items-center' key={i}>
                                <p className=" mr-3 h-1.5 w-1.5 rounded-full bg-white"></p>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            })}

        </>

    )
};