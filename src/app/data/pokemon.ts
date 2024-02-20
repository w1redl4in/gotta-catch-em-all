import { api } from "./api";
import { Pokemon } from "./types/pokemon";
import { PokemonSpecie } from "./types/pokemon-species";

export async function getPokemonDetailsByNameOrId(nameOrId: string) {
  const responsePokemonDetails = await api(`/v2/pokemon/${nameOrId}`);
  const pokemonDetails = (await responsePokemonDetails.json()) as Pokemon;

  return pokemonDetails;
}

export async function getPokemonSpeciesById(id: number) {
  const responsePokemonSpecies = await api(`/v2/pokemon-species/${id}`);
  const pokemonSpecies = (await responsePokemonSpecies.json()) as PokemonSpecie;

  return pokemonSpecies;
}
