export interface Solution {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  useCase: string;
  icon: string;
  metric: string;
  metricLabel: string;
}

export interface MetricCard {
  id: string;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: string;
}

export interface ConversationLog {
  id: string;
  customer: string;
  channel: 'call' | 'whatsapp' | 'email';
  status: 'answered' | 'resolved' | 'pending' | 'failed' | 'missed' | 'completed' | 'active';
  summary: string;
  time: string;
  duration?: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
