'use client'

import React from 'react'

interface ButtonExploreProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

const ButtonExplore = React.forwardRef<HTMLAnchorElement, ButtonExploreProps>(
  ({ href, children, className, ...props }, ref) => {
    return (
      <a
        ref={ref}
        target="_blank"
        href={href}
        className="mt-10 ml-4 border-[0.80px] px-5 py-3 text-xs !text-slate-200 no-underline hover:font-bold"
        {...props}
      >
        {children}
      </a>
    )
  }
)

ButtonExplore.displayName = 'ButtonExplore'

export default ButtonExplore
