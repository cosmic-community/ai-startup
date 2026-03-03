import type { TeamMember } from '@/types';

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const fullName = member.metadata?.full_name || member.title;
  const role = member.metadata?.role || '';
  const bio = member.metadata?.bio || '';
  const headshot = member.metadata?.headshot;
  const linkedinUrl = member.metadata?.linkedin_url;
  const twitterUrl = member.metadata?.twitter_url;

  return (
    <div className="glass-card p-6 text-center group hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1">
      {/* Avatar */}
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-surface-700 ring-2 ring-surface-600 group-hover:ring-brand-500/50 transition-all">
        {headshot?.imgix_url ? (
          <img
            src={`${headshot.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
            alt={fullName}
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-3xl text-surface-400">
            👤
          </div>
        )}
      </div>

      {/* Info */}
      <h3 className="text-lg font-semibold text-white mb-1">{fullName}</h3>
      <p className="text-sm text-brand-400 mb-3">{role}</p>
      {bio && (
        <p className="text-sm text-surface-400 leading-relaxed mb-4 line-clamp-3">{bio}</p>
      )}

      {/* Social */}
      <div className="flex items-center justify-center gap-3">
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-surface-700/50 flex items-center justify-center text-surface-400 hover:text-white hover:bg-surface-700 transition-colors"
            aria-label={`${fullName} on LinkedIn`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        )}
        {twitterUrl && (
          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-surface-700/50 flex items-center justify-center text-surface-400 hover:text-white hover:bg-surface-700 transition-colors"
            aria-label={`${fullName} on Twitter`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}