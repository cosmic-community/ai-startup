import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const quote = testimonial.metadata?.quote || '';
  const customerName = testimonial.metadata?.customer_name || testimonial.title;
  const company = testimonial.metadata?.company || '';
  const role = testimonial.metadata?.role || '';
  const avatar = testimonial.metadata?.avatar;

  return (
    <div className="glass-card p-6 md:p-8 hover:border-brand-500/30 transition-all duration-300">
      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-surface-300 text-sm leading-relaxed mb-6">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-700 flex-shrink-0">
          {avatar?.imgix_url ? (
            <img
              src={`${avatar.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
              alt={customerName}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-lg">
              😊
            </div>
          )}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{customerName}</div>
          <div className="text-xs text-surface-500">
            {role}{role && company ? ' at ' : ''}{company}
          </div>
        </div>
      </div>
    </div>
  );
}