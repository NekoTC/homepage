import { useEffect, useState } from 'react'
import { Loader } from './components/Loader.jsx'
import { Hero } from './components/Hero.jsx'
import { Dashboard } from './components/Dashboard.jsx'
import { Footer } from './components/Footer.jsx'
import { FloatingActionButton } from './components/FloatingActionButton.jsx'
import './styles/index.css'

export default function App() {
    const [ready, setReady] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setReady(true), 800)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="min-h-screen bg-md-background font-roboto">
            <Loader visible={!ready} />

            <div className={`transition-opacity duration-500 ${ready ? 'opacity-100' : 'opacity-0'}`}>
                {/* Hero Section with animated blobs */}
                <Hero />

                {/* Main Dashboard Content */}
                <Dashboard />

                {/* Footer */}
                <Footer />

                {/* Floating Action Button */}
                <FloatingActionButton />
            </div>
        </div>
    )
}