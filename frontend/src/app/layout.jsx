import "./globals.css";

export const metadata = {
  title: "Cartiva",
  description: "Your online shopping destination.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}