// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Feature
export interface Feature extends CosmicObject {
  type: 'features';
  metadata: {
    name?: string;
    description?: string;
    icon?: string;
    display_order?: number;
  };
}

// Pricing Tier
export interface PricingTier extends CosmicObject {
  type: 'pricing-tiers';
  metadata: {
    plan_name?: string;
    price?: number;
    billing_period?: string;
    plan_features?: string;
    is_popular?: boolean;
    cta_text?: string;
    display_order?: number;
  };
}

// Team Member
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    full_name?: string;
    role?: string;
    bio?: string;
    headshot?: {
      url: string;
      imgix_url: string;
    };
    linkedin_url?: string;
    twitter_url?: string;
  };
}

// Blog Post
export interface BlogPost extends CosmicObject {
  type: 'blog-posts';
  metadata: {
    content?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    excerpt?: string;
    author?: TeamMember;
  };
}

// Testimonial
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    quote?: string;
    customer_name?: string;
    company?: string;
    role?: string;
    avatar?: {
      url: string;
      imgix_url: string;
    };
  };
}

// API response type
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}