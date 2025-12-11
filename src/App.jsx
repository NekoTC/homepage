import { useEffect, useState } from 'react'
import { Loader } from './components/Loader.jsx'
import { FirstScreen } from './components/FirstScreen.jsx'
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

            {/* Main Content Container */}
            <main className={`main-container ${ready ? 'content-visible' : ''}`}>
                {/* First Screen - replaces Hero and sidebar profile */}
                <FirstScreen />

                {/* Main Dashboard Content - single column */}
                <Dashboard />
            </main>

            {/* Footer */}
            <Footer />

            {/* Floating Action Button */}
            <FloatingActionButton />
        </>
    )
}