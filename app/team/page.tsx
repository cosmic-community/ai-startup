import type { Metadata } from 'next';
import { getTeamMembers } from '@/lib/cosmic';
import SectionHeading from '@/components/SectionHeading';
import TeamMemberCard from '@/components/TeamMemberCard';

export const metadata: Metadata = {
  title: 'Team — AI Startup',
  description: 'Meet the talented team behind AI Startup — engineers, researchers, and creators building the future.',
};

export default async function TeamPage() {
  const members = await getTeamMembers();

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Our Team"
            title="The People Behind the Technology"
            description="We're a passionate team of AI researchers, engineers, designers, and creators dedicated to making AI accessible to everyone."
          />

          {members.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {members.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-surface-400 text-lg">Team information coming soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}