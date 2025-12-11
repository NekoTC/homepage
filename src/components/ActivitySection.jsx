import { SkillBars } from './SkillBars';

/**
 * ActivitySection component - displays skills/capabilities with heading + skill bars
 * No large card wrapper, follows new single-column design
 */
export function ActivitySection() {
  return (
    <section className="content-section">
      <h2 className="section-heading">Capabilities <span className="section-badge">Synced</span></h2>
      <SkillBars />
    </section>
  );
}

export default ActivitySection;
