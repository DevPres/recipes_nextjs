import RoundedButton from "../Buttons/RoundedButton";

export default function Header() {
  return (
    <header>
      <div className="flex h-40 container">
        <nav className="hidden h-full">
          <span className="mr-8">
            pagina 1
          </span>
          <span className="mr-8">
            pagina 2
          </span>
        </nav>
        <div className="container flex items-center justify-center">
          <RoundedButton text="Aggiungi ricetta" color="primary"></RoundedButton>
        </div>
      </div>
    </header>
  )
}