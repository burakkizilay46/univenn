import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen grid items-center p-4 bg-background text-foreground">
      <div className="flex flex-col items-center">
        <div className="flex gap-8 mb-8">
          <a href="https://vite.dev" target="_blank" className="hover:scale-110 transition-transform">
            <img src={viteLogo} className="h-32 w-32" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="hover:scale-110 transition-transform">
            <img src={reactLogo} className="h-32 w-32 animate-spin-slow" alt="React logo" />
          </a>
        </div>
        <h1 className="text-5xl font-bold mb-8">Vite + React</h1>
        <div className="text-center mb-8">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity mb-4"
          >
            count is {count}
          </button>
          <p className="text-muted-foreground">
            Edit <code className="text-accent-foreground">src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </main>
  )
}

export default App
