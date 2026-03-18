"use client";
import { useEffect, useState } from "react"

interface Props {
    text: string
    speed?: number
    delay?: number
    className?: string
}

export default function TypeText({
    text,
    speed = 80,
    delay = 600,
    className
}: Props) {

    const [displayText, setDisplayText] = useState("")

    useEffect(() => {
        let index = 0

        const start = setTimeout(() => {
            const interval = setInterval(() => {
                setDisplayText(text.slice(0, index + 1))
                index++

                if (index === text.length) {
                    clearInterval(interval)
                }
            }, speed)

            return () => clearInterval(interval)
        }, delay)

        return () => clearTimeout(start)
    }, [text, speed, delay])

    return (
        <span className={className}>
            {displayText}
            <span className="piscar text-gray-400">_</span>
        </span>
    )
}