import HeroSection from '@/components/HeroSection';
import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';
import PricingCard from '@/components/PricingCard';
import TeamMemberCard from '@/components/TeamMemberCard';
import TestimonialCard from '@/components/TestimonialCard';
import BlogPostCard from '@/components/BlogPostCard';
import {
  getFeatures,
  getPricingTiers,
  getTeamMembers,
  getTestimonials,
  getBlogPosts,
} from '@/lib/cosmic';
import Link from 'next/link';

export default async function HomePage() {
  const [features, pricingTiers, teamMembers, testimonials, blogPosts] =
    await Promise.all([
      getFeatures(),
      getPricingTiers(),
      getTeamMembers(),
      getTestimonials(),
      getBlogPosts(),
    ]);

  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Features Section */}
      {features.length > 0 && (
        <section className="section-padding bg-surface-950">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              badge="Features"
              title="Powerful AI Capabilities"
              description="Everything you need to create, transform, and manage AI-powered content and media."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.slice(0, 6).map((feature, index) => (
                <FeatureCard key={feature.id} feature={feature} index={index} />
              ))}
            </div>
            {features.length > 6 && (
              <div className="text-center mt-10">
                <Link
                  href="/features"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-brand-400 border border-brand-500/30 rounded-xl hover:bg-brand-500/10 transition-colors"
                >
                  View All Features →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Pricing Section */}
      {pricingTiers.length > 0 && (
        <section className="section-padding bg-surface-900/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              badge="Pricing"
              title="Simple, Transparent Pricing"
              description="Choose the plan that fits your needs. Scale up anytime as you grow."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingTiers.map((tier) => (
                <PricingCard key={tier.id} tier={tier} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="section-padding bg-surface-950">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              badge="Testimonials"
              title="Loved by Creators Worldwide"
              description="See what our customers have to say about their experience."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(0, 3).map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
            {testimonials.length > 3 && (
              <div className="text-center mt-10">
                <Link
                  href="/testimonials"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-brand-400 border border-brand-500/30 rounded-xl hover:bg-brand-500/10 transition-colors"
                >
                  Read All Testimonials →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Team Section */}
      {teamMembers.length > 0 && (
        <section className="section-padding bg-surface-900/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              badge="Our Team"
              title="Meet the Minds Behind the AI"
              description="A diverse team of engineers, researchers, and creators building the future of AI content."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.slice(0, 4).map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
            {teamMembers.length > 4 && (
              <div className="text-center mt-10">
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-brand-400 border border-brand-500/30 rounded-xl hover:bg-brand-500/10 transition-colors"
                >
                  View Full Team →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Blog Section */}
      {blogPosts.length > 0 && (
        <section className="section-padding bg-surface-950">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              badge="Blog"
              title="Latest from Our Blog"
              description="Insights, tutorials, and updates from the AI Startup team."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(0, 3).map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
            {blogPosts.length > 3 && (
              <div className="text-center mt-10">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-brand-400 border border-brand-500/30 rounded-xl hover:bg-brand-500/10 transition-colors"
                >
                  View All Posts →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-surface-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Content?
          </h2>
          <p className="text-lg text-surface-400 mb-8">
            Join thousands of creators already using AI Startup to supercharge their workflow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-brand-500 to-cyan-500 rounded-xl hover:from-brand-600 hover:to-cyan-600 transition-all hover:shadow-xl hover:shadow-brand-500/25"
            >
              Start Free Trial
            </Link>
            <Link
              href="/features"
              className="px-8 py-3.5 text-base font-semibold text-surface-300 bg-surface-800/50 border border-surface-700/50 rounded-xl hover:bg-surface-800 hover:text-white transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}