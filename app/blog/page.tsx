import type { Metadata } from 'next';
import { getBlogPosts } from '@/lib/cosmic';
import SectionHeading from '@/components/SectionHeading';
import BlogPostCard from '@/components/BlogPostCard';

export const metadata: Metadata = {
  title: 'Blog — AI Startup',
  description: 'Insights, tutorials, and updates from the AI Startup team about AI content and media.',
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Blog"
            title="Insights & Updates"
            description="Stay up to date with the latest in AI content creation, product updates, and industry insights."
          />

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-surface-400 text-lg">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}