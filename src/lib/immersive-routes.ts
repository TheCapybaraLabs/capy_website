/**
 * Rotas que renderizam sua própria mini-nav/rodapé e não devem receber o
 * Header/Footer institucional. Hoje é só a landing do LabsChat.Ai, mas a
 * lista existe pra não espalhar esse conhecimento entre os dois componentes.
 */
const IMMERSIVE_PATHS = ["/labschat", "/en/labschat"];

export function isImmersivePath(pathname: string | null): boolean {
  if (!pathname) return false;
  return IMMERSIVE_PATHS.includes(pathname);
}
