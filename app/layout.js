import ScrollProgress from "./ScrollProgress";
import CursorGlow from "./CursorGlow";
import ParallaxBackground from "./ParallaxBackground";
import "./globals.css";

export const metadata = {
  title: "Nasrin Akter | Portfolio",
  description:
    "Backend and full-stack software engineer — payment systems, enterprise platforms, and product engineering.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0b0f1a" />
      </head>
      <body>
        <ScrollProgress />
        <CursorGlow />
        <ParallaxBackground />
        {children}
      </body>
    </html>
  );
}
