import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorTag from "@/components/CursorTag";

const hostGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/host-grotesk/HostGrotesk-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/host-grotesk/HostGrotesk-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/host-grotesk/HostGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/host-grotesk/HostGrotesk-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/host-grotesk/HostGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/host-grotesk/HostGrotesk-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/host-grotesk/HostGrotesk-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/host-grotesk/HostGrotesk-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/host-grotesk/HostGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/host-grotesk/HostGrotesk-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/host-grotesk/HostGrotesk-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/host-grotesk/HostGrotesk-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-host",
  display: "swap",
});

export const metadata = {
  title: "ARMA — Creative Studio",
  description:
    "ARMA is a creative studio crafting brands, websites, and campaigns that move people.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={hostGrotesk.variable}>
      <body className="font-sans antialiased">
        <SmoothScroll />
        <CursorTag />
        {children}
      </body>
    </html>
  );
}
