export interface LinkItem {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  url: string;
  type: 'course' | 'social' | 'whatsapp';
  icon?: string;
  badge?: string;
  price?: string;
}

export interface UserProfile {
  name: string;
  title: string;
  firm: string;
  bio: string;
  avatarUrl?: string;
  location?: string;
  email?: string;
}
