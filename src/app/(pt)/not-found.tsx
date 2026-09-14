import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center py-32 text-center">
      <p className="font-bold text-6xl text-primary">404</p>
      <h1 className="mt-4 font-bold text-2xl">Página não encontrada</h1>
      <p className="mt-2 text-muted-foreground">
        A página que você procura não existe ou foi removida.
      </p>
      <Button className="mt-8" asChild>
        <Link href="/">Voltar ao início</Link>
      </Button>
    </section>
  );
}
