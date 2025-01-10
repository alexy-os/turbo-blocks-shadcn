import type { ButtonProps } from "@workspace/ui/components/button";
import type { BadgeProps } from "@workspace/ui/components/badge";

// Base content type that can be extended by specific hero components
export interface BaseHeroContent {
  badge?: BadgeProps & {
    text: string;
  };
  title: string;
  description: string;
  buttons?: (ButtonProps & {
    id: string;
    text: string;
    icon?: React.ReactNode;
  })[];
} 