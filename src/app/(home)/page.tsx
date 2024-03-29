import { api } from "../data/api"
import { Pokemon } from "../data/types/pokemon"
import { PokemonSpecie } from "../data/types/pokemon-species"
import { PokemonCard } from "../components/pokemon-card"
import { getPokemonDetailsByNameOrId, getPokemonSpeciesById } from "../data/pokemon"

async function getPokemons(): Promise<{
  pokemons: Pokemon[]
  species: PokemonSpecie[]
}> {
  const response = await api('/v2/pokemon')
  const data = await response.json()



  let pokemons: Pokemon[] = []
  let species: PokemonSpecie[] = []

  for await (const pokemon of data.results) {


    const pokemonDetails = await getPokemonDetailsByNameOrId(pokemon.name)
    const pokemonSpecies = await getPokemonSpeciesById(pokemonDetails.id)


    pokemons = [
      ...pokemons,
      pokemonDetails,
    ]

    species = [
      ...species,
      pokemonSpecies
    ]
  }

  return { pokemons, species }
}


export default async function Pokedex() {
  const { pokemons, species } = await getPokemons()

  return (
    <div className="py-10 flex flex-col items-center justify-center bg-zinc-200 h-full">
      <div className="flex items-center justify-center flex-wrap gap-8 p-5 max-w-[75%] w-full mx-auto">
        {pokemons.map((pokemon, pokemonIndex) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} specie={species[pokemonIndex]} />
        ))}
      </div>
    </div>
  )
}