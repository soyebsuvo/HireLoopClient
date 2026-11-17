import React from 'react'

export default function Heading({SubTitle,Title}) {
    return (
        <div className="text-center">
            <p className="flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-wider text-neutral-300 sm:text-sm">
                <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#5b5cff]" />
                {SubTitle}
                <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#5b5cff]" />
            </p>
            <h2 className="mx-auto mt-4 max-w-lg text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
                {Title}
            </h2>
        </div>
    )
}
