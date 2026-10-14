import "./globals.css";

export const metadata = {
  title: "Cartiva Admin",
  description: "Cartiva admin dashboard.",
  // Admin panel search engine e jeno index na hoy
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
