import Appbar from "@/components/Layout/Appbar";
import Footer from "@/components/Layout/Footer";
import ThemeRegistry from "@/theme/ThemeRegistry";
import type { Metadata } from "next";
import "../i18n";

export const metadata: Metadata = {
  title: {
    default:
      "ScanSight - Посети. Сканирай. Печели. Твоят Път към Приключенията!",
    template: "%s - ScanSight",
  },
  description:
    "ScanSight е софтуер, който предоставя на своите потребители възможността да сканира предварително обозначени QR кодове. Тези стикери и табели са позиционирани на различни туристически обекти в региона, като всеки сканиран QR код носи определен брой точки в акаунта на своя потребител. Целта на приложението е да мотивира туристическата активност в региона, като направи преживяването на потребителите интересно и забавно.",
  category: "Tourism",
  keywords: [
    "scansight",
    "scan",
    "sight",
    "qR",
    "tourism",
    "points",
    "awards",
    "map",
    "guide",
    "petrich",
    "bulgaria",
    "tourist",
    "attractions",
    "sightseeing",
    "adventure",
    "fun",
    "experience",
    "travel",
    "explore",
    "discover",
    "visit",
    "win",
    "prizes",
    "rewards",
    "stickers",
    "петрич",
    "българия",
    "туризъм",
    "точки",
    "награди",
    "карта",
    "пътеводител",
    "туристически",
    "атракции",
    "разходка",
    "приключение",
    "забавление",
    "пътуване",
    "откриване",
    "посещение",
    "печели",
    "награди",
    "хераклея",
    "синтика",
    "къща",
    "музей",
    "ванга",
    "самуилова",
    "крепост",
    "исторически",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>
          <Appbar />
          {children}
          <Footer />
        </body>
      </ThemeRegistry>
    </html>
  );
}
