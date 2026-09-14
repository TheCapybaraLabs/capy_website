export const CONTACT_EMAIL = "contato@capybaralabs.com.br";
export const LOGO_IMAGE_PATH = "/capybara-labs.png";

/**
 * Base absoluta para canonical, hreflang, Open Graph e sitemap.
 *
 * Não depende de variável de ambiente: nenhuma está configurada na Vercel,
 * e o fallback anterior (`http://localhost:3000`) vazava para produção.
 * A env var continua sendo respeitada se algum dia for definida — útil para
 * apontar um preview para si mesmo.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://www.capybaralabs.com.br";
