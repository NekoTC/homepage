import { config } from '../config';
import { ConnectGrid } from './ConnectGrid';

/**
 * ProfileCard component - displays user avatar, name, role, and bio
 * Material You 3 design with original MD3 card styling
 */
export function ProfileCard() {
  return (
    <section className="md-card profile-card">
      {/* Avatar */}
      <div className="profile-pic-container">
        <img
          src={config.avatar}
          alt={`${config.name}'s avatar`}
          loading="lazy"
        />
      </div>

      {/* Name, Role, Bio & Links */}
      <div>
        <h1 className="name-display">{config.name}</h1>
        <span className="role-tag">{config.role}</span>

        {/* Bio */}
        <p className="bio">
          {config.bio}
        </p>

        {/* Visitor Counter */}
        <img
          style={{ borderRadius: '8px', opacity: 0.8, marginBottom: '20px' }}
          src="https://count.getloli.com/@nekotc?name=nekotc&theme=rule34&padding=7&offset=0&align=top&scale=1&pixelated=1&darkmode=auto"
          alt="Visitor count"
          loading="lazy"
        />

        {/* Social Links */}
        <ConnectGrid />
      </div>
    </section>
  );
}

export default ProfileCard;
