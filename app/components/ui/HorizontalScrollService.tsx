"use client";

import { useEffect, useRef, useState } from "react";
import { ChartBar, Globe, MonitorCheck } from "lucide-react";
import styles from "../sections/Services.module.css";
import { ServiceCard } from "./ServiceCard";

const services = [
    {
        title: "Landing Page",
        index: 1,
        description: "Do clique à venda: transforme curiosidade em oportunidades reais",
        icon: <MonitorCheck />,
        problemDescription: "Você consegue atenção, mas sua página não sabe converter isso em negócio",
        solutionPoints: ["Mensagem Principal Impactante", "CTA forte", "Fluxo Pensado para Vender"],
        benefitsDescription: "Comunicação direta: deixa claro quem você serve e por que escolher você."
    },
    {
        title: "Site Institucional",
        index: 2,
        description: "Presença que inspira credibilidade e atrai clientes de alto valor",
        icon: <Globe />,
        problemDescription: "Presença digital fraca: site desatualizado sabota sua credibilidade e afasta clientes",
        solutionPoints: ["Página institucional", "Conteúdo Relevante", "Experiência de Usuário Otimizada", "Prova de credibilidade"],
        benefitsDescription: "Quando pesquisam você online, encontram um profissional. Não uma dúvida."
    },
    {
        icon: <ChartBar />,
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

export const HorizontalScrollService = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateScrollButtons = () => {
        if (!scrollRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;
        const tolerance = 2;

        setCanScrollLeft(scrollLeft > tolerance);
        setCanScrollRight(scrollLeft < maxScrollLeft - tolerance);
    };

    useEffect(() => {
        updateScrollButtons();

        const container = scrollRef.current;
        if (!container) return;

        container.addEventListener("scroll", updateScrollButtons, { passive: true });
        window.addEventListener("resize", updateScrollButtons);

        return () => {
            container.removeEventListener("scroll", updateScrollButtons);
            window.removeEventListener("resize", updateScrollButtons);
        };
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;

        scrollRef.current.scrollBy({
            left: direction === "left" ? -320 : 320,
            behavior: "smooth",
        });

        requestAnimationFrame(updateScrollButtons);
    };
    
    return (
        <div className="relative">

            {/* BOTÃO ESQUERDA */}
            <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 border border-[#1e1e20] px-4 py-2 rounded-full transition-opacity ${canScrollLeft ? "cursor-pointer bg-black/50" : "cursor-not-allowed bg-black/20 opacity-40"}`}
            >
                ←
            </button>

            {/* LISTA */}
            <div
                ref={scrollRef}
                className={`
                ${styles.scrollbarHide}
                flex gap-6 overflow-x-auto px-4 pb-4
                snap-x snap-mandatory
              `}
            >
                {services.map((service, i) => (
                    <div key={i} className="">
                        <ServiceCard {...service} />
                    </div>
                ))}
            </div>

            {/* BOTÃO DIREITA */}
            <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 border border-[#1e1e20] px-4 py-2 rounded-full transition-opacity ${canScrollRight ? "cursor-pointer bg-black/50" : "cursor-not-allowed bg-black/20 opacity-40"}`}
            >
                →
            </button>

        </div>
    )
};