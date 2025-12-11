import { ProfileCard } from './ProfileCard';
import { ProjectGrid } from './ProjectGrid';
import { ActivitySection } from './ActivitySection';
import { DeviceStatus } from './DeviceStatus';

/**
 * Dashboard component - main content area that composes all sections
 * Uses original MD3 CSS classes for consistency
 */
export function Dashboard() {
  return (
    <>
      {/* Left Sidebar - Profile */}
      <aside className="sidebar">
        <ProfileCard />
      </aside>

      {/* Main Content - Status, Identity, Capabilities, Projects */}
      <div className="main-content">
        <DeviceStatus />

        <section className="md-card">
          <h2 className="section-title">Identity <span>Verified</span></h2>
          <p className="identity-text">
            Just a normal student.
          </p>
        </section>

        <ActivitySection />

        <ProjectGrid />
      </div>
    </>
  );
}

export default Dashboard;
