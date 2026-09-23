'use client'

import React, { useEffect, useRef, useState } from 'react'

interface BlurRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number // in ms
  duration?: number // in ms
  blur?: string // e.g. '12px'
  yOffset?: number // in px
  threshold?: number
  once?: boolean
}

export function BlurReveal({
  children,
  className = '',
  delay = 0,
  duration = 800,
  blur = '14px',
  yOffset = 28,
  threshold = 0.12,
  once = true,
}: BlurRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const element = domRef.current
    if (!element) return

    // Fallback if IntersectionObserver is not supported
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.unobserve(element)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [threshold, once])

  return (
    <div
      ref={domRef}
      className={`transition-all ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0px)' : `blur(${blur})`,
        transform: isVisible
          ? 'translateY(0px) scale(1)'
          : `translateY(${yOffset}px) scale(0.98)`,
        willChange: 'opacity, filter, transform',
      }}
    >
      {children}
    </div>
  )
}
