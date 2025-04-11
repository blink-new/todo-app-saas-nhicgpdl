
import { useState } from 'react'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-blue-900">Vite is Lightning Fast!</h1>
        
        <div className="p-8 bg-white rounded-xl shadow-lg space-y-4">
          <div className="text-6xl font-bold text-blue-600">{count}</div>
          
          <div className="flex gap-2 justify-center">
            <Button 
              variant="outline"
              onClick={() => setCount(c => c - 1)}
              className="text-lg px-6"
            >
              -
            </Button>
            <Button 
              onClick={() => setCount(c => c + 1)}
              className="text-lg px-6"
            >
              +
            </Button>
          </div>
        </div>

        <p className="text-blue-700">
          Try clicking the buttons - notice how instantly it updates!
        </p>
      </div>
    </div>
  )
}

export default App