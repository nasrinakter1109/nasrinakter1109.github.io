import "./globals.css";

export const metadata = {
  title: "Nasrin Akter | Portfolio",
  description:
    "Portfolio website for Nasrin Akter featuring experience, selected work, and contact details.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
