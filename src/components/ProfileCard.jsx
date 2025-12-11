import { config } from '../config';

/**
 * ProfileCard component - displays user avatar, name, role, and bio
 * Material You 3 design with glassmorphism effect
 */
export function ProfileCard() {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-md-large p-8 shadow-lg border border-white/50">
      {/* Avatar */}
      <div className="flex justify-center mb-6">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-md-background shadow-xl">
          <img
            src={config.avatar}
            alt={`${config.name}'s avatar`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Name & Role */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-roboto font-light text-md-on-surface mb-2 tracking-tight">
          {config.name}
        </h2>
        <span className="inline-block bg-md-primary-container text-md-on-primary-container px-4 py-2 rounded-md-medium font-medium text-sm">
          {config.role}
        </span>
      </div>

      {/* Bio */}
      <p className="text-md-on-surface-variant text-center leading-relaxed mb-6">
        {config.bio}
      </p>

      {/* Visitor Counter (optional) */}
      <div className="flex justify-center">
        <img
          className="rounded-md-small opacity-80"
          src="https://count.getloli.com/@nekotc?name=nekotc&theme=rule34&padding=7&offset=0&align=top&scale=1&pixelated=1&darkmode=auto"
          alt="Visitor count"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default ProfileCard;
