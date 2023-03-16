import "./globals.css";

import { Nav } from "@/components/nav";

export const metadata = {
  title: "Sudhanshu's Portfolio",
  description: "Sudhanshu's developer porfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="relative z-0 bg-primary">
        <Nav />
        {children}
      </body>
    </html>
  );
}
