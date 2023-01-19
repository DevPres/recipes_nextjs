import Header from "./Header"


export type Layout = {
  children: React.ReactNode
} 

export default function Layout({children}: Layout) {
  return (
    <>
      <Header/>
      <main className="md:container md:mx-auto py-4">
        {children}
      </main>
    </>
  )
} 