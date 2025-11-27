import { useEffect, useState } from 'react'
import { Globe } from './components/Globe.jsx'
import { Loader } from './components/Loader.jsx'
import { DeviceStatus } from './components/DeviceStatus.jsx'
import { SkillBars } from './components/SkillBars.jsx'
import './styles/index.css'

export default function App() {
    const [ready, setReady] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setReady(true), 2800)
        return () => clearTimeout(t)
    }, [])

    return (
        <>
            <Globe enabled={ready} />
            <Loader visible={!ready} />
            <main className={`cyber-container ${ready ? 'content-visible' : ''}`}>
                {/* 左侧：头像 + 联系 + CPU */}
                <aside className="sidebar">
                    <section className="cyber-card profile-card animate-in">
                        <div className="profile-pic-container">
                            <img
                                loading="lazy"
                                src="http://q.qlogo.cn/headimg_dl?dst_uin=1719252259&spec=640&img_type=jpg"
                                alt="Avatar"
                            />
                        </div>
                        <div style={{ paddingTop: 20 }}>
                            <h1 className="glitch-name">Tome Chen</h1>
                            <span className="role-tag">Student / DEV</span>
                            <p className="bio">
                                Connection established.<br />Welcome to the grid.
                            </p>
                            <img src="https://count.getloli.com/@nekotc?name=nekotc&theme=rule34&padding=7&offset=0&align=top&scale=1&pixelated=1&darkmode=auto" alt="Count"></img>
                            <ul className="contact-list">
                                <li>
                                    <a href="https://github.com/NekoTC" target="_blank" rel="noreferrer">
                                        &gt;&gt; GITHUB_DATABASE
                                    </a>
                                </li>
                                <li>
                                    <a href="https://x.com/@XTWG114514" target="_blank" rel="noreferrer">
                                        &gt;&gt; TWITTER_FEED
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:xtwg17192522@outlook.com">&gt;&gt; ENCRYPTED_MAIL</a>
                                </li>
                            </ul>
                        </div>
                    </section>
                </aside>

                {/* 右侧：设备状态放最上面 */}
                <div className="main-content">
                    <DeviceStatus />

                    <section className="cyber-card animate-in">
                        <h2 className="section-title">01_IDENTITY <span>// VERIFIED</span></h2>
                        <p style={{ lineHeight: 1.6 }}>A Normal Student</p>
                    </section>

                    <section className="cyber-card animate-in">
                        <h2 className="section-title">02_CAPABILITIES <span>// SYNCED</span></h2>
                        <SkillBars />
                    </section>

                    <section className="cyber-card animate-in">
                        <h2 className="section-title">03_OPERATIONS <span>// ACTIVE</span></h2>
                        <div className="project-grid">
                            <a
                                href="https://github.com/TakesBot"
                                target="_blank"
                                rel="noreferrer"
                                className="project-item"
                            >
                                <h3>TakesBot</h3>
                                <p>A QQ Bot for RythmGames</p>
                            </a>
                            <a
                                href="https://blog.nekotc.cn"
                                target="_blank"
                                rel="noreferrer"
                                className="project-item"
                            >
                                <h3>Tome's Blog</h3>
                                <p>My Blog</p>
                            </a>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}