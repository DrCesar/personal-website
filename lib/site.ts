import type { SocialIconName } from "@/components/SocialIcon";

export const SITE = {
  name: "Josue Jacobs",
  description: "Software engineer at Amazon in Vancouver, writing about developer tools and AI coding agents.",
  links: [
    { label: "GitHub", href: "https://github.com/DrCesar", icon: "github" },
    { label: "LinkedIn", href: "https://ca.linkedin.com/in/josue-jacobs", icon: "linkedin" },
  ] satisfies { label: string; href: string; icon: SocialIconName }[],
};
