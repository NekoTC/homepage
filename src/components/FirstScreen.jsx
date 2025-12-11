import { config } from '../config';
import { ConnectGrid } from './ConnectGrid';

/**
 * FirstScreen component - replaces Hero and integrates ProfileCard
 * Left side: name + tags, social links
 * Right side: avatar
 * No dedicated background, uses MD3 styling
 */
export function FirstScreen() {
  return (
    <section className="first-screen">
      {/* Left side: Name, Role, Bio, Social Links */}
      <div className="first-screen-left">
        <h1 className="name-display">{config.name}</h1>
        <span className="role-tag">{config.role}</span>
        
        {/* Bio */}
        <p className="bio">
          {config.bio}
        </p>

        {/* Social Links */}
        <ConnectGrid />
      </div>

      {/* Right side: Avatar */}
      <div className="first-screen-right">
        <div className="profile-pic-container">
          <img
            src={config.avatar}
            alt={`${config.name}'s avatar`}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default FirstScreen;
