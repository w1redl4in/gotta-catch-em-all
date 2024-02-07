'use client'

import { twMerge } from "tailwind-merge"
import { Pokemon } from "../data/types/pokemon"
import { PokemonSpecie } from "../data/types/pokemon-species"
import Image from 'next/image'
import Link from "next/link"

interface PokemonCardProps {
  pokemon: Pokemon
  specie: PokemonSpecie
}

const colors = {
  green: 'bg-green-500',
  red: 'bg-red-500',
  blue: 'bg-blue-500',
  purple: 'bg-purple-500',
  yellow: 'bg-yellow-500',
  brown: 'bg-amber-700',
  white: 'bg-zinc-300',
}

const shadowColors = {
  green: 'shadow-green-300',
  red: 'shadow-red-300',
  blue: 'shadow-blue-300',
  purple: 'shadow-purple-300',
  yellow: 'shadow-yellow-300',
  brown: 'shadow-amber-500',
  white: 'shadow-zinc-300',
}

const types = {
  grass: 'bg-green-500',
  poison: 'bg-purple-500',
  flying: 'bg-sky-500',
  fire: 'bg-red-500',
  water: 'bg-teal-500',
  bug: 'bg-emerald-500',
  normal: 'bg-slate-500'
}

export function PokemonCard({ pokemon, specie }: PokemonCardProps) {
  const backgroundColor = colors[specie.color.name as keyof typeof colors]
  const shadowColor = shadowColors[specie.color.name as keyof typeof shadowColors]



  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <div
        className={`relative flex flex-col items-center justify-between size-60 hover:scale-110 hover:cursor-pointer duration-200 bg-slate-100 text-zinc-500 rounded-2xl shadow-lg ${shadowColor}`}
        key={pokemon.id}>
        <div className={twMerge("shadow-md text-shadow-md flex justify-center pt-8 h-[50%] w-full rounded-t-2xl", backgroundColor)}>
          <span className="text-xl text-white">
            {pokemon.name.toLocaleUpperCase()}
          </span>

        </div>
        <Image
          className="absolute top-[25%] w-32 h-32"
          width={50}
          height={50}
          alt={pokemon.name}
          src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}
        />

        <section className="flex flex-wrap gap-2 p-5">

          {pokemon.types.map(type => (
            <span key={type.type.name} className={twMerge('w-[50px] flex justify-center text-white rounded-full px-8', types[type.type.name as keyof typeof types], "font-bold")}>
              {type.type.name}
            </span>
          ))}
        </section>
      </div>
    </Link>
  )
}