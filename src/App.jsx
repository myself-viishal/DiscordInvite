import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Background from './components/Background';
import Container from './components/Container';
import Home from './pages/Home';
import bgImg from "./assets/bg_assets/bg.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-primary relative ">
      <Header />
      <main className="relative bg-primary">
        
          <Home />
        
        
      </main>
    </div>
  );
}

export default App
