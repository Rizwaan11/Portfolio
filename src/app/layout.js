import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { MotionProvider } from "@/components/providers/motion-provider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "M Rizwan Ali — MERN Stack Developer",
  description:
    "Portfolio of M Rizwan Ali, a MERN stack developer building full-stack and AI-powered web apps. Open to internships and junior roles.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body>
        <MotionProvider>
          <ScrollProgress />
          <CustomCursor />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
