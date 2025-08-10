// Configuration for CTA links and API endpoints.
// These placeholders can be replaced with real URLs when deploying.

export const CTA_LINKS = {
  /** Link for the primary call‑to‑action (e.g. join Pokumaa). */
  join: 'https://your-domain.com/join',
  /** Link for the secondary call‑to‑action (e.g. learn more about Pokumaa). */
  learnMore: 'https://your-domain.com/learn-more',
  /** Link to the shop or merchandise section. */
  shop: 'https://your-domain.com/shop',
};

/**
 * Environment‑driven configuration.  At runtime Vite will replace
 * `import.meta.env` variables with their actual values.  Use this
 * endpoint for newsletter sign‑ups (e.g. Mailchimp or Klaviyo).
 */
export const NEWSLETTER_ENDPOINT = import.meta.env.VITE_NEWSLETTER_ENDPOINT ?? '';
