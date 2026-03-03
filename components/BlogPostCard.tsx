import type { BlogPost } from '@/types';
import Link from 'next/link';

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const excerpt = post.metadata?.excerpt || '';
  const featuredImage = post.metadata?.featured_image;
  const author = post.metadata?.author;
  const authorName = author?.metadata?.full_name || author?.title || 'AI Startup Team';
  const date = new Date(post.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="glass-card overflow-hidden group hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/5 flex flex-col"
    >
      {/* Image */}
      <div className="aspect-video overflow-hidden bg-surface-800">
        {featuredImage?.imgix_url ? (
          <img
            src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={post.title}
            width={400}
            height={225}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl text-surface-600">
            📝
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs text-surface-500 mb-3">
          <span>{date}</span>
          <span>·</span>
          <span>{authorName}</span>
        </div>

        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-400 transition-colors line-clamp-2">
          {post.title}
        </h3>

        {excerpt && (
          <p className="text-sm text-surface-400 leading-relaxed line-clamp-3 flex-1">
            {excerpt}
          </p>
        )}

        <div className="mt-4 text-sm font-medium text-brand-400 group-hover:text-brand-300 transition-colors">
          Read more →
        </div>
      </div>
    </Link>
  );
}