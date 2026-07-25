import { PROFILE } from "./profile";

/**
 * GitHub Statistics Configuration
 * Update these placeholder stats with your actual GitHub stats or
 * integrate dynamic calls to the GitHub REST API (https://api.github.com/users/<username>).
 */
export const GITHUB_USERNAME = PROFILE.github.split("/").pop() || "yourusername";

export const GITHUB_STATS = [
  { label: "Public Repos", value: 24 },
  { label: "Total Contributions", value: 640 },
  { label: "Current Streak (days)", value: 18 },
  { label: "Followers", value: 32 },
];

export const TOP_LANGUAGES = [
  { name: "JavaScript", pct: 40 },
  { name: "TypeScript", pct: 25 },
  { name: "Python", pct: 20 },
  { name: "HTML/CSS", pct: 15 },
];
