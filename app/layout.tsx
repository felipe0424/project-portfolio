import { Roboto } from "next/font/google";
import "./globals.css";

// const roboto = Roboto({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
