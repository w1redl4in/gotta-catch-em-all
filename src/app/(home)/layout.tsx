import { Header } from "../components/header";

export default function PokemonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      {children}
    </div >
  )
}