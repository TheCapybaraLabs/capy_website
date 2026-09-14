import { HomeSections } from "@/components/sections/home-sections";
import { getDictionary } from "@/i18n";

export default function EnHome() {
  return <HomeSections locale="en" dict={getDictionary("en")} />;
}
