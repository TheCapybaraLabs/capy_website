import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/i18n";

export default function NotFound() {
  const t = getDictionary("pt-BR").notFound;

  return (
    <section className="flex flex-1 flex-col items-center justify-center py-32 text-center">
      <p className="font-bold text-6xl text-primary">404</p>
      <h1 className="mt-4 font-bold text-2xl">{t.title}</h1>
      <p className="mt-2 text-muted-foreground">{t.body}</p>
      <Button className="mt-8" asChild>
        <Link href="/">{t.back}</Link>
      </Button>
    </section>
  );
}
