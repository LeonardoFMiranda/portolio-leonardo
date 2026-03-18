"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function ServicesAnimation({ children }: { children: React.ReactNode }) {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      },
      y: 40,
      opacity: 0,
      stagger: 0.12,
      duration: 0.8,
      ease: "power3.out",
    });
  }, { scope: container });

  return <div ref={container}>{children}</div>;
}