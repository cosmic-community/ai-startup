// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';
import { getBlogPost, getBlogPosts } from '@/lib/cosmic';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return { title: 'Post Not Found — AI Startup' };
  }

  return {
    title: `${post.title} — AI Startup Blog`,
    description: post.metadata?.excerpt || 'Read the latest from AI Startup.',
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const content = post.metadata?.content || post.content || '';
  const featuredImage = post.metadata?.featured_image;
  const author = post.metadata?.author;
  const authorName = author?.metadata?.full_name || author?.title || 'AI Startup Team';
  const authorHeadshot = author?.metadata?.headshot;
  const date = new Date(post.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="pt-24">
      <article className="section-padding">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-surface-400 hover:text-white transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author / Date */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-700">
                {authorHeadshot?.imgix_url ? (
                  <img
                    src={`${authorHeadshot.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                    alt={authorName}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-lg">👤</div>
                )}
              </div>
              <div>
                <div className="text-sm font-medium text-white">{authorName}</div>
                <div className="text-xs text-surface-500">{date}</div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {featuredImage?.imgix_url && (
            <div className="rounded-2xl overflow-hidden mb-10 bg-surface-800">
              <img
                src={`${featuredImage.imgix_url}?w=1400&h=700&fit=crop&auto=format,compress`}
                alt={post.title}
                width={700}
                height={350}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Content */}
          <div
            className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-surface-300 prose-a:text-brand-400 prose-strong:text-white prose-code:text-brand-300 prose-pre:bg-surface-800 prose-blockquote:border-brand-500"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Bottom CTA */}
          <div className="mt-16 glass-card p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Enjoyed this article?</h3>
            <p className="text-surface-400 text-sm mb-6">
              Explore more content on our blog or start your free trial today.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/blog"
                className="px-6 py-2.5 text-sm font-medium text-surface-300 bg-surface-700/50 border border-surface-600/50 rounded-xl hover:bg-surface-700 hover:text-white transition-all"
              >
                More Articles
              </Link>
              <Link
                href="/pricing"
                className="px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-brand-500 to-cyan-500 rounded-xl hover:from-brand-600 hover:to-cyan-600 transition-all"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}