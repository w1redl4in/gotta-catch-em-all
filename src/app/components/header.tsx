/* eslint-disable react/no-unescaped-entities */
'use client'

export function Header() {
  return (
    <div className="h-2/6 bg-pokemon bg-no-repeat bg-cover bg-bottom flex flex-col items-center justify-center">
      <h1 className="text-shadow-xl font-medium text-8xl text-emerald-200">Pokédex</h1>
      <h2 className="text-shadow-xl font-medium text-6xl text-emerald-200">
        Gotta Catch 'Em All
      </h2>
    </div>
  )
}