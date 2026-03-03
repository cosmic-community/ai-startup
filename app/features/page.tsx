import type { Metadata } from 'next';
import { getFeatures } from '@/lib/cosmic';
import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';

export const metadata: Metadata = {
  title: 'Features — AI Startup',
  description: 'Discover the powerful AI capabilities that make AI Startup the go-to platform for content and media creation.',
};

export default async function FeaturesPage() {
  const features = await getFeatures();

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Features"
            title="Everything You Need to Create with AI"
            description="Our platform provides a comprehensive suite of AI-powered tools for content generation, media production, and creative automation."
          />

          {features.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={feature.id} feature={feature} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-surface-400 text-lg">No features available yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}