import { config } from '../config';

export function Footer() {
    // Get commit hash from environment variable
    const commitHash = process.env.REACT_APP_COMMIT_HASH || 'dev';
    
    return (
        <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-8">
            <div className="border-t border-md-surface-variant pt-8 pb-4">
                <div className="text-center space-y-2">
                    {/* Version & Copyright */}
                    <p className="text-md-on-surface-variant text-sm">
                        System Version: {config.footer.version} | Commit: {commitHash}
                    </p>
                    <p className="text-md-on-surface text-sm font-medium">
                        {config.footer.copyright}
                    </p>
                    
                    {/* ICP Link */}
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