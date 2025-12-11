import { config } from '../config';

/**
 * ConnectGrid component - displays social links
 * Uses original contact-list styling for consistency
 */
export function ConnectGrid() {
  return (
    <ul className="contact-list">
      <li>
        <a href={config.links.github.url} target="_blank" rel="noreferrer">
          {config.links.github.label}
        </a>
      </li>
      <li>
        <a href={config.links.twitter.url} target="_blank" rel="noreferrer">
          {config.links.twitter.label}
        </a>
      </li>
      <li>
        <a href={config.links.email.url}>
          {config.links.email.label}
        </a>
      </li>
    </ul>
  );
}

export default ConnectGrid;
