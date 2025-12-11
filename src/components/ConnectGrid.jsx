import { config } from '../config';
import { ExpandingButton } from './ExpandingButton';

/**
 * ConnectGrid component - displays social links in a grid layout
 * Material You 3 design
 */
export function ConnectGrid() {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-md-large p-8 shadow-lg border border-white/50">
      <h3 className="text-2xl font-roboto font-medium text-md-on-surface mb-6">
        Connect
      </h3>
      
      <div className="flex flex-col gap-3">
        {/* GitHub */}
        <ExpandingButton
          icon="code"
          label={config.links.github.label}
          href={config.links.github.url}
        />

        {/* Twitter */}
        <ExpandingButton
          icon="chat"
          label={config.links.twitter.label}
          href={config.links.twitter.url}
        />

        {/* Email */}
        <ExpandingButton
          icon="mail"
          label={config.links.email.label}
          href={config.links.email.url}
        />
      </div>
    </div>
  );
}

export default ConnectGrid;
