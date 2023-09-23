import "./globals.css";
import Header from "@/ui/Header";
import { ReactElement } from "react";
import { Kanit } from "next/font/google";
// import AlertPreview from "@/components/AlertPreview";
// import Footer from "@/components/Footer";
// import { draftMode } from "next/headers";
// import { getSiteSettings } from "@/lib/cosmic";
// import getMetadata from "helpers/getMetadata";

// const siteSettings = await getSiteSettings();
// const enableRobots = getMetadata(siteSettings?.metadata?.enable_robots, false);
// const siteUrl = getMetadata(siteSettings?.metadata?.site_url);

// export const metadata = {
//   // metadataBase: new URL(siteUrl),
//   icons: {
//     icon: "/favicon/icon.ico",
//     shortcut: "/favicon/shortcut-icon.png",
//     apple: "/favicon/apple-touch-icon.png",
//   },
//   viewport: {
//     width: "device-width",
//     initialScale: 1,
//     maximumScale: 1,
//   },
//   robots: {
//     index: enableRobots,
//     follow: enableRobots,
//     nocache: enableRobots,
//     googleBot: {
//       index: enableRobots,
//       follow: enableRobots,
//       noimageindex: enableRobots,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
// };

const kanit = Kanit({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactElement[] }) {
  // const { isEnabled } = draftMode();

  return (
    <html lang="en" className={kanit.className}>
      <body className="bg-[#111111]">
        <div className="min-h-screen p-20 flex w-full h-full items-stretch">
          <Header />
          {/* {isEnabled && <AlertPreview enabled={isEnabled} />} */}
          <main className="bg-white flex-grow text-white">{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
