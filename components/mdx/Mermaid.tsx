'use client'

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

interface MermaidProps {
  chart: string
}

export default function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true })
    if (ref.current) {
      mermaid.contentLoaded()
    }
  }, [])

  return (
    <div ref={ref} className="mermaid bg-white py-5">
      {chart}
    </div>
  )
}
