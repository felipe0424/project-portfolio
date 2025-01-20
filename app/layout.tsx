import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const RedHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${RedHatDisplay.className} bg-bg-primary text-text-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
