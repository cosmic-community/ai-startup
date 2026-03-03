import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-surface-800/60 border border-surface-700/50 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-surface-300">AI-Powered Content & Media Platform</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Create Stunning Content{' '}
          <span className="gradient-text">with AI</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-surface-400 max-w-2xl mx-auto mb-10">
          Harness the power of artificial intelligence to generate, transform, and optimize your content and media at scale. Built for creators, agencies, and enterprises.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/pricing"
            className="px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-brand-500 to-cyan-500 rounded-xl hover:from-brand-600 hover:to-cyan-600 transition-all hover:shadow-xl hover:shadow-brand-500/25 hover:-translate-y-0.5"
          >
            Start Free Trial
          </Link>
          <Link
            href="/features"
            className="px-8 py-3.5 text-base font-semibold text-surface-300 bg-surface-800/50 border border-surface-700/50 rounded-xl hover:bg-surface-800 hover:text-white transition-all hover:-translate-y-0.5"
          >
            Explore Features →
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: '10K+', label: 'Creators' },
            { value: '1M+', label: 'Content Pieces' },
            { value: '99.9%', label: 'Uptime' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-surface-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}