import { ProjectGrid } from './ProjectGrid';
import { ActivitySection } from './ActivitySection';
import { DeviceStatus } from './DeviceStatus';

/**
 * Dashboard component - main content area with single-column flow
 * Sections divided by large headings and small cards
 */
export function Dashboard() {
  return (
    <div className="dashboard-content">
      {/* Device Status Section */}
      <DeviceStatus />

      {/* Identity Section - heading + content (no large card wrapper) */}
      <section className="content-section">
        <h2 className="section-heading">Identity <span className="section-badge">Verified</span></h2>
        <p className="identity-text">
          Just a normal student.
        </p>
      </section>

      {/* Capabilities Section - heading + skill bars */}
      <ActivitySection />

      {/* Projects Section - heading + small cards grid */}
      <ProjectGrid />
    </div>
  );
}

export default Dashboard;
