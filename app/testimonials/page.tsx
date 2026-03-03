import type { Metadata } from 'next';
import { getTestimonials } from '@/lib/cosmic';
import SectionHeading from '@/components/SectionHeading';
import TestimonialCard from '@/components/TestimonialCard';

export const metadata: Metadata = {
  title: 'Testimonials — AI Startup',
  description: 'See what our customers have to say about AI Startup.',
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Testimonials"
            title="What Our Customers Say"
            description="Trusted by thousands of creators, agencies, and enterprises worldwide."
          />

          {testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-surface-400 text-lg">No testimonials yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}