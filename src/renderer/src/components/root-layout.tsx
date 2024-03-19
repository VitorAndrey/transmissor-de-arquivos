import { Header } from "./header";
import { Sidebar } from "./sidebar";

export function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <main className="flex h-screen w-screen flex-col">
    <Header />

    <div className="flex flex-1">
      <div className="border-r">
        <Sidebar />
      </div>
      <div className="flex-1 px-10 py-6">
        {/* Routes go here */}
        {children}
      </div>
    </div>
  </main>
  )
}
