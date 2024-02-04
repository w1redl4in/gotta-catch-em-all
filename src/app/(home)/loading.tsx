export default function LoadingPokemon() {


  return (
    <div className="flex flex-col items-center h-5/6 justify-center bg-zinc-200">
      <h3 className="text-7xl text-zinc-700">
        Pokémons
      </h3>
      <div className="flex items-center justify-center flex-wrap gap-2 p-10">
        <div className="w-24 h-24 bg-zinc-300 animate-pulse duration-300" />
      </div>
    </div>
  )
}