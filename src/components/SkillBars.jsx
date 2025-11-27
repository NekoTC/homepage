import { useEffect, useState } from 'react'

const skills = [
    { name: 'Python', width: 81, color: 'var(--neon-pink)' },
    { name: 'HTML', width: 58, color: 'var(--neon-purple)' },
    { name: 'JavaScript', width: 20, color: 'var(--neon-yellow)' },
    { name: 'CSS', width: 34, color: 'var(--neon-cyan)' },
]

export function SkillBars() {
    return (
        <>
            {skills.map((s) => (
                <SkillBar key={s.name} {...s} />
            ))}
        </>
    )
}

function SkillBar({ name, width, color }) {
    const [w, setW] = useState(0)
    useEffect(() => {
        let raf = 0
        const tick = () => {
            setW((v) => (v < width ? v + 1 : width))
            if (w < width) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(raf)
    }, [width, w])
    return (
        <div className="skill-bar">
            <div className="skill-name">
                <span>{name}</span>
                <span>{width}%</span>
            </div>
            <div className="progress-track">
                <div
                    className="progress-fill skill-fill"
                    style={{ width: `${w}%`, background: color }}
                />
            </div>
        </div>
    )
}