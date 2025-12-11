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
        <>
            <Loader visible={!ready} />

            {/* Hero Section with animated blobs */}
            <Hero />

            {/* Main Dashboard Content */}
            <main className={`md-container ${ready ? 'content-visible' : ''}`}>
                <Dashboard />
            </main>

            {/* Footer */}
            <Footer />

            {/* Floating Action Button */}
            <FloatingActionButton />
        </>
    )
}