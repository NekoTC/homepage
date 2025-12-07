import { useEffect, useState } from 'react'
// import { Globe } from './components/Globe.jsx' // ❌ 已移除：地球
import { Loader } from './components/Loader.jsx'
import { DeviceStatus } from './components/DeviceStatus.jsx'
import { SkillBars } from './components/SkillBars.jsx'
import './styles/index.css'
import { Footer } from './components/Footer.jsx';

export default function App() {
    const [ready, setReady] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // 缩短加载时间，因为去掉了复杂的进度条动画，主要是为了防闪烁
        const timer = setTimeout(() => setReady(true), 800)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        const mql = window.matchMedia('(max-width: 768px)')
        setIsMobile(mql.matches)
        const handler = (e) => setIsMobile(e.matches)
        mql.addEventListener('change', handler)
        return () => mql.removeEventListener('change', handler)
    }, [])

    return (
        <>
            {/* 这里的 Loader 组件需要配合 CSS 中的 .simple-spinner 使用 */}
            <Loader visible={!ready} />

            <main className={`md-container ${ready ? 'content-visible' : ''}`}>

                {/* 左侧栏：个人信息 - 宽度已加宽 */}
                <aside className="sidebar">
                    <section className="md-card profile-card">
                        <div className="profile-pic-container">
                            <img
                                loading="lazy"
                                src="https://q.qlogo.cn/headimg_dl?dst_uin=1719252259&spec=640&img_type=jpg"
                                alt="Avatar"
                            />
                        </div>
                        <div>
                            <h1 className="name-display">Tome Chen</h1>
                            <span className="role-tag">Student / Developer</span>

                            <p className="bio">
                                Hello there!
                            </p>

                            <img
                                style={{ borderRadius: '8px', opacity: 0.8, marginBottom: '20px' }}
                                src="https://count.getloli.com/@nekotc?name=nekotc&theme=rule34&padding=7&offset=0&align=top&scale=1&pixelated=1&darkmode=auto"
                                alt="Count"
                            />

                            <ul className="contact-list">
                                <li>
                                    <a href="https://github.com/NekoTC" target="_blank" rel="noreferrer">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a href="https://x.com/@XTWG114514" target="_blank" rel="noreferrer">
                                        Twitter (X)
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:xtwg17192522@outlook.com">
                                        Email Me
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                </aside>

                {/* 右侧：主要内容 */}
                <div className="main-content">

                    {/* 设备状态：现在看起来像一个绿色的 Notification Banner */}
                    <DeviceStatus />

                    <section className="md-card">
                        <h2 className="section-title">Identity <span>Verified</span></h2>
                        <p style={{ lineHeight: 1.8, color: 'var(--md-sys-color-on-surface-variant)' }}>
                            Just a normal student exploring the digital world. <br/>
                            Focusing on RythmGames!
                        </p>
                    </section>

                    <section className="md-card">
                        <h2 className="section-title">Skills <span>Synced</span></h2>
                        <SkillBars />
                    </section>

                    <section className="md-card">
                        <h2 className="section-title">Projects <span>Active</span></h2>
                        <div className="project-grid">
                            <a
                                href="https://github.com/TakesBot"
                                target="_blank"
                                rel="noreferrer"
                                className="project-item"
                            >
                                <h3>TakesBot</h3>
                                <p>A QQ Bot for RythmGames. Built for community efficiency.</p>
                            </a>
                            <a
                                href="https://blog.nekotc.cn"
                                target="_blank"
                                rel="noreferrer"
                                className="project-item"
                            >
                                <h3>Tome's Blog</h3>
                                <p>Sharing thoughts, tutorials, and development logs.</p>
                            </a>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </>
    )
}