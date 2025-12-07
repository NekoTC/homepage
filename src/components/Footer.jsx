export function Footer() {
    return (
        <footer className="md-footer">
            <div className="footer-content">
                {/* 文本更清晰 */}
                <p>System Version: NEKOTC.V2.0 | (C) 2025 ALL RIGHTS RESERVED.</p>
                <a
                    className="status-line"
                    href="https://beian.miit.gov.cn/"
                    target="_blank"
                    rel="noreferrer"
                >
                    陇ICP备2024006604号-1
                </a>
            </div>
        </footer>
    );
}