import { api } from "@/app/data/api"
import { Pokemon } from "@/app/data/types/pokemon"
import { redirect } from "next/navigation"
import Image from 'next/image'
import { PokemonSpecie } from "@/app/data/types/pokemon-species"
import { Progress } from "@/components/ui/progress"
import { getPokemonDetailsByNameOrId, getPokemonSpeciesById } from "@/app/data/pokemon"


interface PokemonProps {
  params: {
    id: string
  }
}

async function getPokemon(id: string): Promise<{ pokemon: Pokemon; species: PokemonSpecie }> {
  const pokemon = await getPokemonDetailsByNameOrId(id)
  const pokemonDetails = await getPokemonSpeciesById(Number(id))

  return {
    pokemon,
    species: pokemonDetails
  }
}

const fromColors = {
  green: 'from-green-400/60',
  red: 'from-red-400/60',
  blue: 'from-blue-400/60',
  purple: 'from-purple-400/60',
  yellow: 'from-yellow-400/60',
  brown: 'from-amber-700/60',
  white: 'from-zinc-800/60',
}

const bgColors = {
  green: 'bg-green-500/45',
  red: 'bg-red-700/45',
  blue: 'bg-blue-500/45',
  purple: 'bg-purple-500/45',
  yellow: 'bg-yellow-500/45',
  brown: 'bg-amber-700/45',
  white: 'bg-zinc-500/45',
}

const progressColors = {
  green: 'bg-green-400/70',
  red: 'bg-red-400/70',
  blue: 'bg-blue-400/70',
  purple: 'bg-purple-400/70',
  yellow: 'bg-yellow-400/70',
  brown: 'bg-amber-400/70',
  white: 'bg-zinc-400/70',
}

export default async function Pokemon({ params }: PokemonProps) {
  if (!params.id) {
    redirect('/')
  }

  const { pokemon, species } = await getPokemon(params.id)

  const description = species.flavor_text_entries[1].flavor_text
  const fromColor = fromColors[species.color.name as keyof typeof fromColors]
  const bgColor = bgColors[species.color.name as keyof typeof bgColors]
  const progressColor = progressColors[species.color.name as keyof typeof progressColors]

  return (
    <div className={`flex justify-around min-h-screen w-full bg-gradient-to-b ${fromColor} to-zinc-300`}>
      <div className="flex justify-around items-center w-[80%]">
        <article className={`flex flex-col max-w-[300px] rounded-md shadow-lg ${bgColor} ring-1 ring-black/5 text-white`}>
          <div className="text-center p-3 text-4xl">
            <h1 className="text-shadow-xl">{pokemon.name.toLocaleUpperCase()}</h1>
          </div>
          <div className="p-6 leading-loose">
            <h1 className="text-shadow-xl text-3xl">{description}</h1>
          </div>
        </article>
        <Image
          className="max-w-[600px] max-h-[600px] w-full h-full"
          height={200}
          width={200}
          alt={pokemon.name}
          src={pokemon.sprites.other.dream_world.front_default}
        />
        <article className={`flex flex-col min-w-64 rounded-md shadow-lg ${bgColor} ring-1 ring-black/5`}>
          <div className="flex flex-col text-white p-6 gap-10">
            <h2 className="text-center font-semibold text-shadow-lg text-4xl">
              {pokemon.name.toLocaleUpperCase()} STATUS
            </h2>
            {pokemon.stats.map(stat => (
              <div key={stat.stat.name} className="flex flex-col gap-2 text-2xl">
                <span className="flex gap-1">
                  {stat.stat.name}
                  <span>
                    {stat.base_stat}
                  </span>
                </span>
                <Progress value={stat.base_stat} className={`${progressColor} drop-shadow-2xl`} />
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  )
}