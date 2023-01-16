import Header from "./Header"

export type Layout = {
  children: React.ReactNode
} 

export default function Layout({children}: Layout) {
  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
    </>
  )
} 