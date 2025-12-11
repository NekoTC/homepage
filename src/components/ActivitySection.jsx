import { SkillBars } from './SkillBars';

/**
 * ActivitySection component - displays skills/capabilities with animated progress bars
 * Uses original SkillBars component for consistency
 */
export function ActivitySection() {
  return (
    <section className="md-card">
      <h2 className="section-title">Capabilities <span>Synced</span></h2>
      <SkillBars />
    </section>
  );
}

export default ActivitySection;
