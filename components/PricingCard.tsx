import type { PricingTier } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';
import Link from 'next/link';

interface PricingCardProps {
  tier: PricingTier;
}

export default function PricingCard({ tier }: PricingCardProps) {
  const planName = tier.metadata?.plan_name || tier.title;
  const price = tier.metadata?.price ?? 0;
  const billingPeriod = getMetafieldValue(tier.metadata?.billing_period) || 'month';
  const planFeatures = tier.metadata?.plan_features || '';
  const isPopular = tier.metadata?.is_popular === true;
  const ctaText = tier.metadata?.cta_text || 'Get Started';

  // Changed: Normalize plan features to avoid split errors when not a string
  const features =
    Array.isArray(planFeatures)
      ? planFeatures.map((feature) => String(feature).trim()).filter(Boolean)
      : String(planFeatures)
          .split(/[\n,]+/)
          .map((feature) => feature.trim())
          .filter(Boolean);

  return (
    <div
      className={`relative glass-card p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
        isPopular
          ? 'border-brand-500/50 shadow-xl shadow-brand-500/10'
          : 'hover:border-surface-600/50'
      }`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 text-xs font-semibold text-white bg-gradient-to-r from-brand-500 to-cyan-500 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      {/* Plan Name */}
      <h3 className="text-xl font-bold text-white mb-2">{planName}</h3>

      {/* Price */}
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">${price}</span>
        <span className="text-surface-400 text-sm">/{billingPeriod}</span>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feat, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-surface-300">
            <svg
              className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feat}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="/pricing"
        className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all ${
          isPopular
            ? 'bg-gradient-to-r from-brand-500 to-cyan-500 text-white hover:from-brand-600 hover:to-cyan-600 hover:shadow-lg hover:shadow-brand-500/25'
            : 'bg-surface-700/50 text-white hover:bg-surface-700 border border-surface-600/50'
        }`}
      >
        {ctaText}
      </Link>
    </div>
  );
}