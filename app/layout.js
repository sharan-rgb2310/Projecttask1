import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "Pixora Studio — Design Agency",
  description:
    "Pixora Studio is a creative design agency specializing in UI/UX design, web development, branding, and digital marketing.",
  keywords: "design agency, UI UX design, web development, branding, digital marketing",
  openGraph: {
    title: "Pixora Studio — Design Agency",
    description: "Creative design solutions that make your brand stand out.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-white dark:bg-[#0a0a0f] transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
