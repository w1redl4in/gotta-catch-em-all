/* eslint-disable react/no-unescaped-entities */
'use client'

export function Header() {
  return (
    <div className="shadow-md h-[45vh] bg-pokemon bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
      <h1 className="text-shadow-xl font-medium text-8xl text-zinc-100">Pokédex</h1>
      <h2 className="text-shadow-xl font-medium text-6xl text-zinc-100">
        Gotta Catch 'Em All
      </h2>
    </div>
  )
}