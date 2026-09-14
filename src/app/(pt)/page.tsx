import { HomeSections } from "@/components/sections/home-sections";
import { getDictionary } from "@/i18n";

export default function Home() {
  return <HomeSections locale="pt-BR" dict={getDictionary("pt-BR")} />;
}
