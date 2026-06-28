export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-leaf focus:px-4 focus:py-2 focus:text-white"
    >
      Ir para o conteúdo principal
    </a>
  );
}
