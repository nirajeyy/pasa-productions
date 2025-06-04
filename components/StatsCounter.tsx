"use client"

import { useState, useEffect, useRef } from "react"
import { Award, Clock, Star, Users } from "lucide-react"

interface Stat {
  iconName: "Award" | "Clock" | "Star" | "Users"
  label: string
  value: number
  suffix: string
}

interface StatsCounterProps {
  stats: Stat[]
}

const iconMap = {
  Award,
  Clock,
  Star,
  Users
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState(stats.map(() => 0))
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 2000 // 2 seconds
        const steps = 60
        const increment = stat.value / steps
        let current = 0

        const timer = setInterval(() => {
          current += increment
          if (current >= stat.value) {
            current = stat.value
            clearInterval(timer)
          }

          setCounts((prev) => {
            const newCounts = [...prev]
            newCounts[index] = Math.floor(current)
            return newCounts
          })
        }, duration / steps)
      })
    }
  }, [isVisible, stats])

  return (
    <div ref={sectionRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => {
        const Icon = iconMap[stat.iconName]
        return (
          <div key={stat.label} className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icon className="h-8 w-8 text-white" strokeWidth={1.5} />
            </div>
            <div className="text-3xl font-bold text-white mb-2">
              {counts[index]}
              {stat.suffix}
            </div>
            <div className="text-sm text-zinc-400">{stat.label}</div>
          </div>
        )
      })}
    </div>
  )
} 