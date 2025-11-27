import { useEffect, useRef, useState } from 'react';

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

export function Loader({ visible }) {
    const fillRef = useRef(null);
    const [pct, setPct] = useState(0);          // 文字用

    useEffect(() => {
        if (!visible) return;

        const duration = 2600;
        const start = performance.now();

        const frame = (now) => {
            const elapsed = now - start;
            const raw = Math.min(elapsed / duration, 1);
            const eased = easeOutCubic(raw) * 100;

            // 1. 进度条宽度
            if (fillRef.current) {
                fillRef.current.style.width = `${eased}%`;
            }
            // 2. 文字百分比
            setPct(Math.floor(eased));

            if (raw < 1) {
                requestAnimationFrame(frame);
            }
        };
        requestAnimationFrame(frame);
    }, [visible]);

    return (
        <div id="loader-wrapper" className={visible ? '' : 'loaded-fade-out'}>
            <div className="loading-ui">
                <div className="loading-text">
                    SYSTEM INITIALIZING... <span>{pct}%</span>
                </div>

                <div className="loading-track">
                    <div className="loading-fill" ref={fillRef} />
                </div>

                <div className="loading-status">Establishing neural link protocol...</div>
            </div>
        </div>
    );
}