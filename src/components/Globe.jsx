import { useEffect, useRef } from 'react';

export function Globe({ enabled }) {
    const canvasRef = useRef(null);
    const wrapRef   = useRef(null);

    useEffect(() => {
        if (!enabled) return;

        const canvas = canvasRef.current;
        const ctx    = canvas.getContext('2d');
        const dpr    = window.devicePixelRatio || 1;

        let logicalW = window.innerWidth;
        let logicalH = window.innerHeight;
        let centerX  = logicalW / 2;
        let centerY  = logicalH / 2;
        let R        = Math.min(logicalW, logicalH) * 0.35;
        let ang      = 0;

        let targetX  = centerX;
        let targetY  = centerY;
        let targetR  = R;
        let isLoaded = false;

        /* 以下完全复刻你给的 HTML 逻辑 */
        function setCanvasSize(w, h) {
            canvas.style.width = w + 'px';
            canvas.style.height = h + 'px';
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
        setCanvasSize(logicalW, logicalH);

        window.addEventListener('resize', () => {
            logicalW = window.innerWidth;
            logicalH = window.innerHeight;
            setCanvasSize(logicalW, logicalH);
            if (isLoaded) {
                targetX = 0;
                targetY = logicalH;
                targetR = Math.min(logicalW, logicalH) * 0.8;
            } else {
                targetX = logicalW / 2;
                targetY = logicalH / 2;
                targetR = Math.min(logicalW, logicalH) * 0.35;
                centerX = targetX; centerY = targetY; R = targetR;
            }
        });

        function drawGlobe() {
            ctx.clearRect(0, 0, logicalW, logicalH);
            if (Math.abs(centerX - targetX) > 0.1) centerX += (targetX - centerX) * 0.05;
            if (Math.abs(centerY - targetY) > 0.1) centerY += (targetY - centerY) * 0.05;
            if (Math.abs(R - targetR) > 0.1) R += (targetR - R) * 0.05;

            ctx.shadowBlur = 5;
            ctx.shadowColor = 'rgba(0,243,255,0.4)';
            ctx.strokeStyle = 'rgba(0,243,255,0.15)';
            ctx.lineWidth = 1;

            for (let lon = -180; lon <= 180; lon += 30) {
                ctx.beginPath();
                for (let lat = -90; lat <= 90; lat += 5) {
                    const radLat = lat * Math.PI / 180;
                    const radLon = (lon + ang) * Math.PI / 180;
                    const x = centerX + R * Math.cos(radLat) * Math.cos(radLon);
                    const y = centerY + R * Math.sin(radLat);
                    lat === -90 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
                }
                ctx.stroke();
            }
            for (let lat = -90; lat <= 90; lat += 30) {
                ctx.beginPath();
                for (let lon = -180; lon <= 180; lon += 5) {
                    const radLat = lat * Math.PI / 180;
                    const radLon = (lon + ang) * Math.PI / 180;
                    const x = centerX + R * Math.cos(radLat) * Math.cos(radLon);
                    const y = centerY + R * Math.sin(radLat);
                    lon === -180 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
                }
                ctx.stroke();
            }
            ctx.beginPath();
            ctx.arc(centerX, centerY, R, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(0,243,255,0.3)';
            ctx.lineWidth = 2;
            ctx.stroke();
            ang += 0.2;
            requestAnimationFrame(drawGlobe);
        }
        drawGlobe();

        return () => window.removeEventListener('resize', () => {});
    }, [enabled]);

    /* 加载完成后：移动 + 放大（作用在包裹层） */
    useEffect(() => {
        if (!enabled) return;
        const t = setTimeout(() => {
            wrapRef.current.style.transform = 'translate(-50%, -50%) scale(2.5)'; // 放大2倍
            wrapRef.current.style.left = '-115%';
            wrapRef.current.style.top  = 'calc(25% - 20rem)'; // 离底边4rem，防止被页脚/遮罩裁切
            wrapRef.current.style.transition = 'all 1.2s cubic-bezier(0.22,1,0.36,1)';
        }, 100);
        return () => clearTimeout(t);
    }, [enabled]);

    return (
        <div
            ref={wrapRef}
            className="globe-wrap"
            style={{ position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 0, pointerEvents: 'none' }}
        >
            <canvas id="globe-canvas" ref={canvasRef} />
        </div>
    );
}