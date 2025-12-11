import { ScrollReveal } from './ScrollReveal';
import { ProfileCard } from './ProfileCard';
import { ConnectGrid } from './ConnectGrid';
import { PersonalLinks } from './PersonalLinks';
import { ProjectGrid } from './ProjectGrid';
import { ActivitySection } from './ActivitySection';
import { DeviceStatus } from './DeviceStatus';

/**
 * Dashboard component - main content area that composes all sections
 * Material You 3 design with responsive grid layout
 */
export function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Grid Layout - Sidebar and Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Sidebar - Profile & Connect */}
        <aside className="lg:col-span-4 space-y-6">
          <ScrollReveal delay={100}>
            <ProfileCard />
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <ConnectGrid />
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <PersonalLinks />
          </ScrollReveal>
        </aside>

        {/* Main Content - Projects & Activities */}
        <main className="lg:col-span-8 space-y-6">
          <ScrollReveal delay={150}>
            <DeviceStatus />
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <div className="bg-white/80 backdrop-blur-xl rounded-md-large p-8 shadow-lg border border-white/50">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-roboto font-medium text-md-primary">
                  Identity
                </h3>
                <span className="px-3 py-1 bg-md-secondary-container text-md-secondary text-xs font-medium rounded">
                  Verified
                </span>
              </div>
              <p className="text-md-on-surface-variant leading-relaxed italic">
                Just a normal student.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <ActivitySection />
          </ScrollReveal>

          <ScrollReveal delay={450}>
            <ProjectGrid />
          </ScrollReveal>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
