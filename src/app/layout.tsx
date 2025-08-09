import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";

const fontPop = Poppins({
  variable: "--font-pop",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const description =
  "Transforma tu idea en un proyecto web escalabe y con propósito";
const title = `HarkaySoft | ${description}`;
const imageUrl = `https://qh2ensep0f.ufs.sh/f/tJ39KzeM4kyTSjkdQngMNke9sgiw7f68qVYl4ZxGzXoSEBb5`;

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "article",
    url: "https://harkaysoft.com/",
    images: [{ url: imageUrl }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [imageUrl],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`font-pop ${fontPop.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
