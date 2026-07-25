import { PROFILE } from "./profile";

/**
 * Social Links & Contact Details
 * Derived from profile.js for centralized configuration.
 */
export const SOCIALS = {
  github: PROFILE.github,
  linkedin: PROFILE.linkedin,
  twitter: PROFILE.twitter,
  email: `mailto:${PROFILE.email}`,
  phone: PROFILE.phone,
  location: PROFILE.location,
};
