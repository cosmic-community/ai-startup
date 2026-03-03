import type { Metadata } from 'next';
import { getPricingTiers } from '@/lib/cosmic';
import SectionHeading from '@/components/SectionHeading';
import PricingCard from '@/components/PricingCard';

export const metadata: Metadata = {
  title: 'Pricing — AI Startup',
  description: 'Simple, transparent pricing for every team. Start free and scale as you grow.',
};

export default async function PricingPage() {
  const tiers = await getPricingTiers();

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Pricing"
            title="Plans for Every Creator"
            description="Whether you're just getting started or scaling an enterprise, we have a plan for you."
          />

          {tiers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {tiers.map((tier) => (
                <PricingCard key={tier.id} tier={tier} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-surface-400 text-lg">Pricing information coming soon!</p>
            </div>
          )}

          {/* FAQ */}
          <div className="mt-20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {[
                {
                  q: 'Can I switch plans anytime?',
                  a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.',
                },
                {
                  q: 'Is there a free trial?',
                  a: 'Absolutely. Every plan comes with a 14-day free trial so you can explore all features risk-free.',
                },
                {
                  q: 'What payment methods do you accept?',
                  a: 'We accept all major credit cards, PayPal, and wire transfers for enterprise plans.',
                },
              ].map((item, idx) => (
                <div key={idx} className="glass-card p-6">
                  <h4 className="text-white font-semibold mb-2">{item.q}</h4>
                  <p className="text-surface-400 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}