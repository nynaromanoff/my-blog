import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/Container/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "My Blog",
    template: '%s | My Blog',
  },
  description: "Blog feito com Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Container>
          <Header />
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}
