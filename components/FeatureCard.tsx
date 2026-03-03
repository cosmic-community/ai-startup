import type { Feature } from '@/types';

interface FeatureCardProps {
  feature: Feature;
  index?: number;
}

// Map of common icon names to SVG paths
function getIconEmoji(icon?: string): string {
  if (!icon) return '✨';
  const lower = icon.toLowerCase();
  if (lower.includes('brain') || lower.includes('ai') || lower.includes('intelligence')) return '🧠';
  if (lower.includes('image') || lower.includes('photo') || lower.includes('media')) return '🖼️';
  if (lower.includes('video')) return '🎬';
  if (lower.includes('text') || lower.includes('write') || lower.includes('content')) return '✍️';
  if (lower.includes('audio') || lower.includes('music') || lower.includes('sound')) return '🎵';
  if (lower.includes('speed') || lower.includes('fast') || lower.includes('performance')) return '⚡';
  if (lower.includes('secure') || lower.includes('privacy') || lower.includes('lock')) return '🔒';
  if (lower.includes('cloud') || lower.includes('scale')) return '☁️';
  if (lower.includes('team') || lower.includes('collab')) return '👥';
  if (lower.includes('analytics') || lower.includes('data') || lower.includes('chart')) return '📊';
  if (lower.includes('api') || lower.includes('integrate') || lower.includes('code')) return '🔗';
  if (lower.includes('auto') || lower.includes('robot')) return '🤖';
  return '🚀';
}

export default function FeatureCard({ feature, index = 0 }: FeatureCardProps) {
  const name = feature.metadata?.name || feature.title;
  const description = feature.metadata?.description || '';
  const iconText = feature.metadata?.icon || '';

  return (
    <div
      className="glass-card p-6 md:p-8 hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/5 group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/20 to-cyan-500/20 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
        {getIconEmoji(iconText)}
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
      <p className="text-surface-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}