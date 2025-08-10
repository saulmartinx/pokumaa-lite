/**
 * Configuration for CTA Links and API endpoints.
 * These placeholders can be replaced with real URLs when deploying.
 */

export const BRONEERI_URL = 'https://pokumaa.ee/broneeri';
export const EPOOD_URL = 'https://pokumaa.ee/epood';
export const UUDISKIRI_URL = 'https://pokumaa.ee/uudiskiri';

/**
 * Environment-driven configuration. At runtime vite will replace
 * import.meta.env variables with their actual values. Use this
 * endpoint for newsletter sign-ups (e.g. Mailchimp or Klaviyo).
 */
export const NEWSLETTER_ENDPOINT = import.meta.env.VITE_NEWSLETTER_ENDPOINT || '';
export const GA4_ID = 'G-XXXXXXX';
eexport const META_PIXEL_ID = 'XXXXXXXXXX';
