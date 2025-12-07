import { useEffect, useState } from 'react'

const skills = [
    { name: 'Python', width: 81 },
    { name: 'HTML', width: 58 },
    { name: 'JavaScript', width: 20 },
    { name: 'CSS', width: 34 },
]

export function SkillBars() {
    return (
        <>
            {skills.map((s) => (
                <SkillBar key={s.name} name={s.name} width={s.width} />
            ))}
        </>
    )
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

function SkillBar({ name, width }) {
    const [w, setW] = useState(0)

    useEffect(() => {
        const duration = 1000;
        const start = performance.now();
        let rafId;

        const frame = (now) => {
            const elapsed = now - start;
            const raw = Math.min(elapsed / duration, 1);
            const eased = easeOutCubic(raw) * width;

            setW(eased);

            if (raw < 1) {
                rafId = requestAnimationFrame(frame);
            }
        };

        rafId = requestAnimationFrame(frame);

        return () => cancelAnimationFrame(rafId);

    }, [width]);

    return (
        <div className="skill-bar">
            <div className="skill-name">
                <span style={{color: 'var(--md-sys-color-primary)'}}>{name}</span>
                <span style={{color: 'var(--md-sys-color-on-surface-variant)'}}>{Math.floor(w)}%</span>
            </div>
            <div className="progress-track">
                <div
                    className="progress-fill"
                    style={{
                        width: `${w}%`,
                        backgroundColor: 'var(--md-sys-color-primary)',
                        transition: 'width 0.1s linear'
                    }}
                />
            </div>
        </div>
    )
}