export const CONTACT_EMAIL = "contato@capybaralabs.com.br";
/** E-mail específico do produto, usado só na landing /labschat. */
export const LABSCHAT_EMAIL = "labs@capybaralabs.com.br";
/**
 * Número de WhatsApp divulgado na proposta comercial (apresentacao-capybara-
 * labs-sebrae-pi.md), usado no CTA "Falar com o time" da landing /labschat.
 * `LABSCHAT_WHATSAPP_NUMBER` alimenta o link wa.me — só dígitos, com código
 * do país, sem `+` nem espaços; `LABSCHAT_PHONE_DISPLAY` é só pra exibição.
 */
export const LABSCHAT_WHATSAPP_NUMBER = "5586994126858";
export const LABSCHAT_PHONE_DISPLAY = "(86) 99412-6858";
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
