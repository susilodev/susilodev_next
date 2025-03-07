'use client'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'

export default function DarkActivator() {
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme('dark')
  }, [])

  return null
}
