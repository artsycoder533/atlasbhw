import type { Metadata } from "next";
import roboto from "./fonts.ts/Roboto";
import montserratAlternates from "./fonts.ts/Montserrat_Alternatives";
import "../globals.css";
import Header from "./components/Header";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Atlas Behavioral Health + Wellness",
  description: "Atlas Behavioral Health + Wellness is a mental health private practice based in North Chesterfield, Virginia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-20">
      <body className={`flex flex-col min-h-screen ${roboto.className}`}>
        {draftMode().isEnabled && (
          <div>
            <a className="p-4 bg-blue-300 block" href="/api/disable-draft">
              Disable preview mode
            </a>
          </div>
        )}
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
