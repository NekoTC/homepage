import { config } from '../config';

export function Footer() {
    // Get commit hash from environment variable
    const commitHash = process.env.REACT_APP_COMMIT_HASH || 'dev';
    
    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* Left side: Count image */}
                <div className="footer-left">
                    <img
                        src="https://count.getloli.com/@nekotc?name=nekotc&theme=rule34&padding=7&offset=0&align=top&scale=1&pixelated=1&darkmode=auto"
                        alt="Visitor count"
                        loading="lazy"
                        className="footer-count-image"
                    />
                </div>
                
                {/* Right side: Version, Copyright, ICP (right-aligned) */}
                <div className="footer-right">
                    <p className="text-md-on-surface-variant text-sm">
                        System Version: {config.footer.version} | Commit: {commitHash}
                    </p>
                    <p className="text-md-on-surface text-sm font-medium">
                        {config.footer.copyright}
                    </p>
                    <a
                        href={config.footer.icpUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-md-primary hover:text-md-primary/80 text-xs font-medium transition-colors duration-200 hover:underline"
                    >
                        {config.footer.icp}
                    </a>
                </div>
            </div>
        </footer>
    );
}